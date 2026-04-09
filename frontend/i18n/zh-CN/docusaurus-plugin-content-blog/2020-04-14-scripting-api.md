---
slug: scripting-api
title: open.mp API 设计
authors: y_less
---

open.mp 的一个核心关注点是保持**向后兼容性**——你现有的 SA:MP 脚本可以开箱即用。然而，open.mp 也引入了改进，以修复不一致之处，并使脚本编写更直观、更强大。下面我们来看看一些我们正在解决的常见 SA:MP 问题，以及 open.mp 如何提升开发体验。

<!-- truncate -->

:::warning

以下内容已过时，不反映 open.mp 的当前状态。本文发布于此仅作归档用。

:::

## 介绍

首先，一个**极其重要**的澄清——现有的脚本仍然可以**原样运行**。我们在向后兼容性方面投入了大量精力，并在每个决策中都将其铭记于心。出于此原因，许多我们想要的改进都无法实现，而其他一些代码也因兼容性要求而变得极为复杂。

尽管如此，我们仍可在各处进行改进。让我们来看看 SA:MP 脚本中存在的一些不一致性示例：

### 标签

- `Menu:CreateMenu` - 有标签。
- `DB:db_open` - 有标签。
- `CreateVehicle` - 无标签。
- `CreateActor` - 无标签。

```c
#define SELECT_OBJECT_GLOBAL_OBJECT 1
#define SELECT_OBJECT_PLAYER_OBJECT 2
forward OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ);
```

`type` 是无标签的，所有 SA:MP 定义的常量都是如此；这与 pawn 的默认常量不同：

```c
native File:fopen(const name[], filemode:mode = io_readwrite);
```

### 命名

- `SetVehiclePos` - "Vehicle" 在函数名中间。
- `TextDrawTextSize` - "TextDraw" 在开头。
- `db_open` - "db" 在开头，且是小写。
- `fread` - "file" 在开头，且是缩写形式。
- `asin` - SA:MP 新增的函数，没有使用驼峰命名法。

不一致性：

- GetVehicleZAngle - "Z-Angle"
- GetVehicleRotationQuat - "Rotation"
- SetPlayerFacingAngle - "Facing Angle"
- SetObjectRot - "Rot"

尽管如此，大多数库现在已统一采用 `模块_方法` 的命名约定。

### 常量

- `65535` 无效玩家、演员、文本绘图等的值。它也是无效车辆的值，但 `0` 有时也会作为无效车辆 ID 返回。
- `0` 无效文件的值，有时是车辆（同时也是 `65535`）。也是许多缺失事物的值，如动作状态和武器。
- `255` 无效队伍和菜单的值。
- `-1` 无效帮派区域和武器状态的值。

此外，许多库使用 `0x80000000` 和 `-1` 表示无效状态，因为它们成为有效 ID 的可能性要小得多。65535 是一个相当大的数字，但一个大型服务器很容易拥有比这更多的物体。

### 针对玩家的函数

- `CreateObject` 和 `CreatePlayerObject` 有全局和针对玩家的版本。
- `SetPlayerMapIcon` 没有全局版本。
- `SetGravity` 没有针对玩家的版本，尽管这可能是最常被要求的针对玩家功能之一，并且 YSF 和其他插件几乎立即添加了它。
- `CreateVehicle` 没有针对玩家的版本，尽管也一直被反复要求。但也没有任何（公开的）插件添加此功能，甚至streamer插件也没有。
- `SendClientMessage` 和 `SendClientMessageToAll` 有全局和针对玩家的版本，但与大多数其他函数不同，针对玩家的版本是默认的。
- `GangZoneShowForPlayer` 和 `GangZoneShowForAll` 菜单、帮派区域和文本绘图是 SA:MP 默认函数中**唯一**可以指定哪些玩家可以看到它们的。所有其他的都是要么所有人可见，要么仅限一人。

当然，库和插件后来极大地扩展了此模型，现在大多数优秀的插件都允许对任何给定实体的可见玩家子集（组）进行非常精细的控制。

### IDs

- `CreateObject` 和 `CreatePlayerObject` 这些函数的 ID 池是共享的。如果全局物体的 ID 是 `4`，则任何玩家物体都不能拥有 ID `4`，但多个玩家可以拥有不同的物体，且这些物体都可以拥有 ID `5`。
- `Create3DTextLabel` 和 `CreatePlayer3DTextLabel` ID 池是分开的——前 `1024` 个 ID 是全局的，后 `1024` 个是针对玩家的。每个玩家最多可以有 `2048` 个 3D 文本，但每种类型只有 `1024` 个，尽管在客户端这没有区别。
- `SetPlayerMapIcon` ID 是手动指定的，最多 32 个。有一段时间，客户端并未检查此限制，导致了潜在的 ACE 漏洞。
- `ShowPlayerDialog` ID 是手动指定的，没有限制。ID 也完全没有意义，因为一个玩家一次只能看到一个对话框。
- `SetTimer` ID 会回绕，且不检查是否存在具有相同 ID 的定时器。你需要启动超过 40 亿个定时器才可能遇到这个问题，但这是可能发生的——它们甚至不必都保持运行。

当然，有些人依赖 ID 按照非常特定的顺序分配，然后当他们添加或移除一辆车辆时，就会疑惑为什么整个游戏模式会崩溃。

## 兼容性

所以，再次强调，我们必须非常明确地指出，所有现有的 _"SA:MP 代码"_ 都将有效。这到底是什么意思？

任何满足以下条件的代码：

- 用 Pawn 编写。
- 使用原始的 SA:MP API，没有插件。
- 用我们的头文件重新编译。
- 已经使用社区编译器。

都将有效。

但是：

- 如果你使用插件用非 Pawn 语言编写代码，该插件可能首先需要移植。所以你的代码不会立即生效。
- 如果你使用其他插件，如streamer、YSF、audio等；它们可能已经有效，可能需要移植，或者可能完全多余，因为其功能已集成到核心服务器中。所以你的代码**可能**有效。
- 如果你只有游戏模式的 .AMX 文件，而没有原始源代码，为什么？无论如何，虽然所有 SA:MP 函数都存在，但有些函数已被 Pawn 代码或宏重做或替换，你**必须**重新编译。所以如果你不能，你的代码将完全无效。

## 构建

### 示例

让我们从一个极其简单的 SA:MP 游戏模式开始。

```c
#include <a_samp>

main() {}

public OnGameModeInit()
{
    SetGameModeText("Example Script");
    AddPlayerClass(0, 0.0, 0.0, 4.0, 0.0, 0, 0, 0, 0, 0, 0);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 20.0, 20.0, 4.0, 2.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    SendClientMessage(playerid, 0xFF0000AA, "You won!");
    return 1;
}
```

你出生，前往检查点，然后获胜。

### 转换

要为 open.mp 构建此脚本，我们需要更改第一个包含文件并添加一个定义。

这：

```c
#include <a_samp>

main() {}
```

变成：

```c
#define OPENMP_COMPAT
#include <openmp\openmp>

main() {}
```

你可能遇到的第一个错误是：`open.mp 脚本需要社区编译器，来自：`
如果你遇到此错误，请前往 并下载编译器版本 3.10.10 或更高版本。对于正式发布版本，我们希望有一个集成了此编译器的 pawno 等效工具，但尚未完成。

我**强烈建议**首先尝试用此编译器编译你的游戏模式，因为它重新启用了常量正确性警告，所以你可能会立即看到大量新警告（这**不是**编译器的问题，这些是你代码中始终存在但之前被忽略的问题）。

你可能还想将这些头文件替换为：[https://github.com/pawn-lang/pawn-stdlib](https://github.com/pawn-lang/samp-stdlib)
即使不使用 open.mp，这样做也是一件好事，因为它们修复了原始头文件中的大量标签和常量问题。

### 警告

如果你在使用新编译器和新版本 `a_samp` 时没有收到任何警告，现在你会看到一系列新警告，内容类似：

`warning 234: function is deprecated (symbol "AddPlayerClass") Use "Class_Add" instead.`

你有三个选项 - 它们都受支持：

- **忽略警告：** 代码仍然有效。
- **抑制警告：** 将 `OPENMP_COMPAT` 更改为 `OPENMP_QUIET`：

```c
  #define OPENMP_QUIET
  #include <openmp\openmp>
  main() {}
```

- **修复警告：** 有些函数已更改名称以保持一致性；有些函数已更改参数，因为旧函数已演变且未完全暴露 open.mp 的功能。目前还没有简单的方法来转换每个函数，但你可以在慢慢转换代码时保持警告开启 - 旧函数将继续完美运行。

转换分为三个阶段：

### `#define OPENMP_QUIET`

使用此定义允许你的游戏模式编译时不会因已弃用的函数而产生新警告。但你不应坚持使用此定义，并且隐式转换仅适用于 Pawn 代码。你可以在这种模式下转换代码，因为新 API 也有效，但你无法使用编译器查看哪些地方仍有问题。

### `#define OPENMP_COMPAT`

这是第二阶段。一旦你想要开始利用 open.mp 的所有改进功能，例如精细的针对玩家实体控制和移除限制，你就需要开始使用函数的新版本。新函数始终可用，但你可能不知道哪些地方需要转换。这将对旧函数给出警告，但它们仍然有效，允许你一次转换部分游戏模式。

### 无定义

一旦你认为已完成了代码转换，可以移除定义：

```c
#include <openmp\openmp>
main() {}
```

现在，对于仍在使用的任何旧代码，你将收到错误而非警告。

## 新 API

现在我们已经看到了旧 API 的问题，以及如何找到需要应用新 API 的地方，我们应该实际看看新 API 是如何解决先前提到的问题的：

### 标签

现在函数几乎在所有地方都使用标签。我们试图在过多的标签警告和不足的有用信息之间找到平衡，但警告是有原因的，可以帮助发现你可能遗漏的问题。例如，将车辆作为参数传递给物体函数，或给予某人一个不存在的武器：

```c
// 此代码没有警告，尽管它显然是错误的。
new object = CreateObject(various, parameters, here);
PutPlayerInVehicle(playerid, object);

// 这里也一样 - 没有 20 号武器，尽管它在有效武器 ID 中。
GivePlayerWeapon(playerid, 20, 200);
```

如果所有明显错误的代码都能给出警告，那会好得多。这是类型安全语言的力量，虽然 Pawn 不是完全类型安全的，但我们可以通过标签来接近这一点。这些例子变成了：

```c
// warning 213: 标签不匹配：应为标签 "Vehicle"，但找到 "Object"
new Object:object = Object@Create(various, parameters, here);
Player_PutInVehicle(playerid, object);

// warning 213: 标签不匹配：应为标签 "WeaponType"，但找到但找到无标签 ("_")
GivePlayerWeapon(playerid, 20, 200);

// 这个不会给出警告：
GivePlayerWeapon(playerid, WEAPON_COLT45, 200);
```

### 命名

大多数新函数使用许多库和插件已经采用的命名方案的改进版本 - `模块_动词名词`。有些没有，当它们是独立的、不适用于任何更大模块时，但在大多数情况下，你可能能猜到所需函数的名称。

不再需要纠结某个元素是 "Rot" 还是 "Rotation"，除非函数名过长（32+ 个字符，编译器不接受），否则没有缩写。

想要更改物体的模型？`Object_SetModel`。想要向玩家显示文本？`Text_Show`。

动词的数量是有限的 - `Get`、`Set`、`Create`、`Destroy`、`Add`、`Remove`、`Show`、`Hide`、`Run`、`Move`、`Stop` 和 `Count`。可能会添加更多，并可能出现在特殊情况下，但通常如果其中之一适用，那很可能就是它。

到目前为止，最常见的是 `Get` 和 `Set`，与 SA:MP 不同，它们现在总是成对出现 - 如果你可以设置任何参数，你以后也可以获取它。它们也是最常与名词搭配的动词 - 你需要指定获取或设置什么 - `Health`、`Position`、`Model`、`Width` 等。

一些例子：

```c
native bool:Menu_SetDisabled(Menu:menuid, bool:disabled);
native bool:Menu_GetDisabled(Menu:menuid);
native bool:Text_SetAlignment(Text:text, alignment);
native Text_GetAlignment(Text:text);
native bool:Object_Move(Object:objectid, Float:posX, Float:posY, Float:posZ, Float:speed, Float:rotX = FLOAT_NAN, Float:rotY = FLOAT_NAN, Float:rotZ = FLOAT_NAN);
native DBResult_CountRows(DBResult:dbresult);
native Player_Spawn(Player:playerid);
```

请注意，模块和标签名称总是匹配的 - `Vehicle`、`DB`、`Player` 等。[这除了保持一致性外还有其他原因](https://github.com/pawn-lang/compiler/issues/234) - 它提供了更面向对象（OO）的接口，并且更容易记忆。

然而，你可能在前面的例子中注意到函数 `Object@Create`，而不是 `Object_Create`。原因是第一个参数的内容。在上面七个例子中，第一个参数都是被操作的实体（物体、车辆、玩家等）。你想获取特定实体的位置。你想移动特定实体。你想获取特定实体的剩余时间。这再次映射到类似 OO 的 API - `Player_Spawn(playerid)` 可以看作 `player.Spawn()`。PAWN 不能这样做，但这并不意味着集成到此 API 的其他语言不能。用 C++ 术语来说 - `_` 是 `.` 或 `->`，并且始终需要将有效的 ID 作为第一个参数。

但是，函数 `Dialog_IsValid(Dialog:id)` 根据定义，其第一个参数可能不是有效 ID（否则它的意义何在[^1]？），而 `Icon_Create(image, Float:x, Float:y, Float:z)` 根本不接收 ID。因此，它们变成了 `@` 替代 - 在 C++ 语法中是 `::`。它们可能根本不接收 ID，并且绝对不需要有效的 ID（`@Destroy` 也属于这类函数，因为销毁实体是逻辑上对实体外部的操作，而不是对实体本身的操作）。

### 常量

首先，我们尽可能使用 `const` 和 `enum` 而不是 `#define` 来定义所有东西，除非我们期望它们被覆盖（如 `MAX_PLAYERS`）：

```c
enum ObjectMaterialTextAlignment
{
    MATERIAL_TEXT_ALIGN_LEFT,
    MATERIAL_TEXT_ALIGN_CENTRE,
    MATERIAL_TEXT_ALIGN_RIGHT,
};
```

`Object_SetMaterialText` 现在将只接受这三个值之一，不接受其他值。

那无效 ID 呢？我们也把它们统一了。所有实体现在都使用相同的无效值，这个值远在可能有效值的范围之外 - open.mp 移除了几乎所有限制，所以像 `65536` 这样的无效值就行不通了。

这个新的无效值是什么？我们还没有决定... 有两个主要竞争者，各有优缺点，这个决定并不像乍看起来那么容易。但幸运的是，它对内部工作影响不大，因为我们几乎可以立即切换。

这两个选择解释如下，如果你能提供反馈，我们将不胜感激：

#### `0`

使用 `0` 作为无效值有一些优点：

- 它不是无效索引，所以当返回且未正确检查时，你的代码不会崩溃。它可能无法完美工作，但至少能继续执行某些操作。
- 检查起来非常容易，意图显而易见：
  ```c
  new Object:object = Object@Create(various, parameters, here);
  if (object)
  {
      Object_SetMaterialText(object, "Hello");
  }
  else
  {
      printf("Couldn't create the object.");
  }
  ```
- 新声明的变量默认是无效值：
  ```c
  new Dialog:d;
  ```
  人们遇到的最常见的错误之一是其代码只对玩家 0 有效，因为他们忘记初始化变量。如果没有玩家/物体/车辆 0，代码将不适用于任何人 - 没有人被提升为管理员比错误的人被提升为管理员要好。

#### `-1`

使用 `-1` 作为无效值有一些优点：

- 它**是**一个无效索引。这不是 `0` 的一个优点，因为你的代码经常会继续运行而不是崩溃，但有了 crashdetect，这可能是一件好事 - 你的代码中有一个错误，崩溃会告诉你它在哪里，有时甚至精确到源代码行。是悄无声息地继续运行好，还是大声地结束运行好？
- 人们习惯于 `0` 在大多数情况下是一个有效值。程序员从 `0` 开始计数，所以它应该是有效的，而正整数范围之外的东西应该是无效的。
- 在无符号数学中，它是最大可能的整数 - `0xFFFFFFFF`，`4294967295`。这意味着任何实体类型的内在硬限制是其可能的最大值 - 在耗尽 ID（和内存）之前可以有 `4,294,967,295` 个物品。

### 针对玩家的函数

简而言之，这些已经不复存在。每个 `ForPlayer`、`ForAll`、`CreatePlayerX` 等函数都已被一个简单的函数取代 - `X_Display`（其中 `X` 是任何实体），以及用于检查的 `X_Has`：

```c
Object_Display(objectid, playerid, true); // 显示它。
Object_Display(objectid, playerid, false); // 隐藏它。
Text_Display(textid, true); // 向所有人显示它。
if (Zone_Has(zoneid, playerid))
{
    // 玩家**允许**看到这个帮派区域。
}
```

YSI 使用 `X_SetPlayer`，但向玩家显示东西是最基本的事情，所以它值得拥有自己的动词。一些库使用 `X_Show` 和 `X_Hide`，但这是两个函数，当需要检查该做哪个时，只会导致代码冗余：

```c
if (var)
    Checkpoint_Show(cpid, playerid);
else
    Checkpoint_Hide(cpid, playerid);
```

对比

```c
Checkpoint_Display(cpid, playerid, var);
```

请注意，仅仅调用 `X_Display` 可能实际上并不会显示物品。世界另一端的物体仍然不可见。不同虚拟世界中的检查点，即使就在你旁边，也不会可见。对于世界实体，这只是表示玩家**允许**看到它，而不是他们当前**能够**看到它。相反，对于 HUD 元素，如菜单和对话框，这会立即显示它们，并且当只允许显示一个时，可能会隐藏其他的。

### IDs

随着针对玩家池的移除和无效 ID 的统一，这不再是问题。

## 更智能的函数

上面展示的 `X_Display` 函数可以接受两个参数 - 实体和显示状态，以便让每个玩家都能看到它们；或者也可以接受三个参数 - 实体、玩家和显示状态。还有其他函数也具有类似的智能参数处理。

一组例子是各种旋转函数。如介绍中所述，至少有四种不同的方法来获取和设置不同实体的旋转。现在只有一个 - `X_SetRotation` 和 `X_GetRotation`。

例如：

```c
// 只获取 `z`。
z = Player_GetRotation(playerid);
// 获取 x, y, 和 z 欧拉角。
Object_GetRotation(objectid, x, y, z);
// 获取 w, x, y, 和 z 四元数角。
Vehicle_GetRotation(vehicleid, w, x, y, z);
```

哪个用于哪个实体？全部都是：

```c
// 只获取 `z`。
z = Object_GetRotation(objectid);
// 获取 x, y, 和 z 欧拉角。
Object_GetRotation(objectid, x, y, z);
// 获取 w, x, y, 和 z 四元数角。
Object_GetRotation(objectid, w, x, y, z);
```

参数和返回值的含义由给出的参数数量决定。

对于 Set 也是如此：

```c
// 只设置 `z`。
Vehicle_SetRotation(vehicleid, z);
// 设置 x, y, 和 z 欧拉角。
Vehicle_SetRotation(vehicleid, x, y, z);
// 设置 w, x, y, 和 z 四元数角。
Vehicle_SetRotation(vehicleid, w, x, y, z);
```

## 结论

我们非常努力地尝试创建一个易于使用、易于学习，同时也向后兼容的 API。SA:MP 的成功很大程度上源于其易用性，我们希望保持这一点，但也知道有高级用户希望从代码中获得更多功能。达成这种平衡总是很困难的，尤其是当发表评论最多的人往往是最有经验的人——那些精通这门语言并希望进一步推动它的人。这会导致一个系统为了高级功能而自我选择，牺牲了初学者的利益。我们不希望这样，但我们仍然希望听到你的想法。

你喜欢哪些语言和 API 功能，不喜欢哪些？哪些函数能帮助你最大限度地利用你的代码？你认为新设计是简单，还是太复杂？你能接受当前函数名杂乱无章吗？它们能达到目的，为什么要改变它们？作为初学者，你希望有什么不同的处理方式吗？

请在下面 burgershot 主题中分享你可能有的任何反馈。我们很乐意听取你的意见：

https://forum.open.mp/showthread.php?tid=1036

[^1]: 有趣的旁注。得益于我们抽象脚本 API 代码的方式，Dialog_IsValid 的实现如下：

    ```c
    SCRIPT_API(Dialog_IsValid, bool(Dialog_s))
    {
        return true;
    }
    ```

    就这些。实际上不需要任何实现，因为要调用这个函数，实体查找必须成功，因此我们可以立即返回 true。
