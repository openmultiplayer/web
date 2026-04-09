---
slug: debugging
title: 在 open.mp 中进行测试
authors: y_less
---

在 SA:MP 中测试向来具有挑战性，但 open.mp 引入了新的工具，使其变得更加简单高效。借助开源代码库、增强的调试工具以及一个用于模拟玩家交互的强大新“mock”库，测试比以往任何时候都更自动化、更可靠。

<!-- truncate -->

:::warning

以下内容已过时，不反映 open.mp 的当前状态。本文发布于此仅作归档用。

:::

在 SA:MP 中进行测试并不容易。大多数情况下，只是连接到服务器并在各处放置打印语句。像 y_testing 这样的库使编写单元测试变得容易得多，但仅限于相当“纯粹”的代码——即主要在服务器端运行，没有太多玩家交互的代码。你可以用这种方式测试大量令人惊讶的行为，但它仍然有限，并且在问题真正出现时，并不能帮助缩小范围。

那么 open.mp 是如何解决这个问题的呢？首先，代码是开源的，所以你可以使用所有现成的调试工具，例如 GDB 和 Visual Studio，来单步调试和检查代码。我们还计划为 Pawn 脚本本身添加类似的工具。

但最大的新特性是“mock”库。简而言之，它允许你创建假的玩家，这些玩家的行为与真实玩家完全相同，但没有任何客户端连接。因此，脚本对这些假玩家执行的任何操作都可以被另一个脚本读取和分析。让我们以一个最简单的例子来首次演示——向玩家显示一个检查点，并确认它已被发送。使用 y_testing 时，你执行操作后必须实际询问玩家是否看到了，这很慢，不可重复，而且很繁琐：

```c
PTEST__ SetPlayerCheckpoint(playerid)
{
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);
    ASK("你看到世界中间有一个检查点吗？");
}
```

使用像 “Pawn.RakNet” 这样的库可以通过自动检查传出数据包来消除询问，但仍然需要一个已连接的玩家，因此无法自动化和重复：

```c
static
    gCheckpointPlayer,
    Float:gX,
    Float:gY,
    Float:gZ,
    Float:gS;

PTEST__ SetPlayerCheckpoint(playerid)
{
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);
    ASSERT(gX == 0.0);
    ASSERT(gY == 0.0);
    ASSERT(gZ == 4.0);
    ASSERT(gS == 5.0);
    ASSERT(gCheckpointPlayer == playerid);
}

OPacket:107(playerid, BitStream:bs)
{
    gCheckpointPlayer = playerid;

    BS_IgnoreBits(bs, 8);
    BS_ReadFloat(bs, gX);
    BS_ReadFloat(bs, gY);
    BS_ReadFloat(bs, gZ);
    BS_ReadFloat(bs, gS);

    return 1;
}
```

在 open.mp 中，我们有一个类似于 Pawn.RakNet 的 API，但是用于模拟玩家。因此，你可以创建一个没有游戏实例的玩家，并像对待普通玩家一样使用它：

```c
TEST__ SetPlayerCheckpoint()
{
    new playerid = Mock_CreatePlayer("Mr Mock");

    // 清除所有现有数据包，便于搜索。
    Mock_PurgeSent(playerid);

    // 正常显示一个检查点。
    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);

    // 检查是否看到了一个“SetCheckpoint”数据包。
    new MockPacket:packet = Mock_GetPacket(playerid, "SetCheckpoint");
    ASSERT(packet);
    if (!packet) return;

    // 检查数据包有4个组件，每个32位。
    ASSERT(MockPacket_Components(packet) == 4);
    ASSERT(MockPacket_Bits(packet) == 4 * 32);

    // 检查各个组件。
    new Float:tmp;
    ASSERT(MockPacket_ReadFloat(packet, 0, tmp));
    ASSERT(tmp == 0.0);
    ASSERT(MockPacket_ReadFloat(packet, 1, tmp));
    ASSERT(tmp == 0.0);
    ASSERT(MockPacket_ReadFloat(packet, 2, tmp));
    ASSERT(tmp == 4.0);
    ASSERT(MockPacket_ReadFloat(packet, 3, tmp));
    ASSERT(tmp == 5.0);
}
```

这段代码完全可重复测试，是自包含的（没有全局变量和额外回调），并且易于扩展。

但有时情况并非如此简单。如果你创建一个物体，你不能仅仅检查它是否立即发送给了玩家，因为他们可能离它很远，因此内置的streamer尚未将其发送给他们。为了解决这个问题，我们首先需要稍微绕开一下，解释一下像 `SetPlayerPos` 这样的基本同步是如何工作的。当你使用 `SetPlayerPos` 设置玩家的位置时，服务器并不会立即在内部以及为所有其他玩家更新他们的位置。相反，一个 `SET POSITION` 命令被发送给那个正在被移动的玩家，他们被传送到新位置，然后在下一个同步数据包中将新位置报告回服务器。原因基本上是延迟——在设置新位置后，可能仍有一个或多个使用旧位置的同步数据包在传输中。那么这对于模拟玩家意味着什么呢？这意味着你实际上无法设置他们的位置，至少不能以正常方式设置。因为没有真正的客户端，所以没有东西接收数据包（即设置位置的命令），也没有东西将数据同步回服务器。

我们可以从模拟玩家为服务器生成任何模拟的同步数据，所以这是一种更新他们位置的方法，但对于一个常见操作来说可能有点繁琐，因此针对这个特定用例，有一个 `Mock_SetPlayerPos` 函数。但这还不是全部，因为我们需要streamer运行并根据他们的新位置进行更新，这只会周期性地发生（每隔几毫秒，取决于服务器滴答率）。为此，我们有另一个模拟函数——`Mock_Tick`，它可以将服务器时间瞬间向前跳转指定的微秒数（注意，不是毫秒）。这在真实服务器上绝对不应该使用，因为它会给定时器和其他对时间敏感的代码带来各种奇怪的问题，但可以用来在测试中模拟时间的流逝。请注意，`Mock_Tick(10000)` 不会延迟 10 毫秒，而是会将时间瞬间向前跳转 10 毫秒。

```c
TEST__ SetPlayerCheckpoint()
{
    new playerid = Mock_CreatePlayer("Mr Mock");

    // 清除所有现有数据包，便于搜索。
    Mock_PurgeSent(playerid);

    // 创建一个物体。
    CreateObject(1337, 100.0, 100.0, 4.0);

    // 将模拟玩家的位置更新到服务器，使其靠近该物体。
    Mock_SetPlayerPos(playerid, 105.0, 105.0, 4.0);

    // 现在模拟经过一段时间，以便streamer运行（50毫秒应该足够）。
    Mock_Tick(50000);

    // 检查是否看到了一个“CreateObject”数据包。
    new MockPacket:packet = Mock_GetPacket(playerid, "CreateObject");
    ASSERT(packet);
    if (!packet) return;

    // 检查数据包是否有4个以上的组件，每个32位。
    ASSERT(MockPacket_Components(packet) > 5);

    // 检查数据包的一些组件。
    new int;
    new Float:tmp;
    ASSERT(MockPacket_ReadInt32(packet, 1, int));
    ASSERT(int == 1337);
    ASSERT(MockPacket_ReadFloat(packet, 2, tmp));
    ASSERT(tmp == 100.0);
    ASSERT(MockPacket_ReadFloat(packet, 3, tmp));
    ASSERT(tmp == 100.0);
    ASSERT(MockPacket_ReadFloat(packet, 4, tmp));
    ASSERT(tmp == 4.0);
}
```

关于 `Mock_Tick` 的一个重要说明。如果你调用它，比如 `Mock_Tick(100000)`，并且有一个 1 毫秒的定时器正在运行，这会立即使定时器触发，但定时器会认为它错过了很长时间（100毫秒）并会重新排队等待自己。在 `Mock_Tick` 调用期间，定时器会触发一次，但在当前测试结束后，由于定时器认为它错过了 100 次调用时间，它会被进一步排队 99 次，每次滴答一次。

以后我们会介绍一些更高级的调试技术，以便你可以更轻松地读写假的数据包，而不是像那段代码中那样一次一个组件，但这介绍了构建所有其他功能的基础。希望这能让每个人的代码开发和测试都变得更加容易（同时也能确保服务器更加稳定）。

明天我们还将深入探讨 open.mp 的 API 设计。它与 SA:MP 完全向后兼容，但这并不意味着没有并行的改进空间。
