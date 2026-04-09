---
slug: release-candidate-1
title: 候选版本 1
authors: y_less
---

终于来了！🎉

经过多年的开发、重写和各种挑战，我们非常激动地向大家介绍服务器的发布候选版本 1 (RC1)。这是我们迈向官方 1.0 版本的一个重要里程碑，带来了显著的更新、新特性和改进。

<!-- truncate -->

来了！它终于来了！经过四年时间，两次重写，争论与波折，以及无数的其他障碍；它终于来了！服务器的发布候选版本 1 (RC1)。这，希望代表着我们 1.0 发布的最终代码版本。如果此版本的运行一切顺利，我们将在几天后最终**开放**所谓的 **open**.mp。

在深入介绍本次发布的具体内容之前，我首先要诚挚地感谢团队的每一位成员，是他们的帮助让这款模组走到了今天。这并不容易，主要是因为每个人都真正地投入其中——我们都希望这款模组、社区、SA:MP、我们的服务器以及我们的玩家能获得最好的体验；如果不是这样，我们当初就不会开始这段旅程。不幸的是，对于什么才是“最好”的强大而不同的看法有时会导致摩擦。但现在，我们终于走到了这一步。

所以，对所有人，致以衷心的感谢：

- Amir
- Cheaterman
- Freaksken
- Graber
- Hual
- Josh
- JustMichael
- kseny
- Nexius
- pkfin
- Potassium
- Southclaws
- TommyB
- Y_Less
- Zeex
- 以及更多可能遗漏的人……

好了，现在是你真正关心的部分……

既然我们已经离开了 Beta 测试阶段，并且（如果这周一切顺利的话）我们会按时发布。因此，除了你之前见过很多次的服务器本身，我们还有一些新的好东西给你：

## Pawn

下载包中包含了官方的包含文件，不再需要用 `omp.inc` 来修补旧的 SA:MP 包含文件了，现在我们正在以正确的方式做事！它还包含了一个新的编译器。是不是在想 3.10.11 什么时候发布？现在不用再等了（如果你自己构建过，可以把这个当作 3.10.12！）！有了这个组合，你可能会看到很多新的警告，但不用担心——我们也有一个工具来处理这个问题，可以自动升级大量代码，在适当的地方添加定义良好的符号名、`const` 等。

也许你已经注意到了，你已经用了好几个月了，但虚拟机（服务器内部的部分）也已经更新了！哦，还有那些你熟知和喜爱的字符串原生函数，比如 `SendClientMessage` 和 `AddMenuItem`？它们现在都支持格式化了。所有都支持！[^1]

以下是可用功能的完整列表：

- 符号长度限制增加到 64 个字符，不再需要为了塞下名字而用 `OnPlyrDoTheTing` 这样的缩写了。这也导致了……
- 多个原生函数名称不再压缩——`Col` 是 `Colour` 还是 `Collision` 的缩写？现在你知道了！
- 标签。到处是标签。请参阅附带的文档。
- 官方包含文件终于具备 const 正确性。不再需要抱怨某些人可能没有它们了。
- 编译器版本已更新：`__nameof`、`__addressof`、修复，以及太多这里无法详述的内容。
- `switch` 语句速度大幅提升。
- 针对以前无法检测到的问题增加了更多警告。编译器能找到的问题越多，你需要找的就越少。
- 一个*升级*工具，用于向用户代码添加标签和 `const`，并修复几个新警告。
- 命名更加一致。每个原生函数都经过仔细检查和比较，以确保命名的最大相似度和直观性。
- 到处都添加了 `{Float, _}:...`。这意味着什么？意味着基本不需要 `format()` 了[^2]——想象一下原生的 y_va。
- 在使用新编译器和虚拟机时，`-O2` 这个最高的 pawn 优化级别可以工作。一些包含文件可能需要更新，但有些已经更新了。为了帮助解决这个问题……
- 添加了 `__optimisation` 宏，以便代码在通过 -O2 编译时可以配置自身。

更新后的包含文件的文档：

[https://github.com/openmultiplayer/omp-stdlib](https://github.com/openmultiplayer/omp-stdlib)

新编译器的文档：

[https://github.com/openmultiplayer/compiler](https://github.com/openmultiplayer/compiler)

[https://pawn-lang/compiler](https://pawn-lang/compiler)

qawno 的文档：

[https://github.com/openmultiplayer/qawno](https://github.com/openmultiplayer/qawno)

升级工具的文档：

[https://github.com/openmultiplayer/upgrade](https://github.com/openmultiplayer/upgrade)

[^1]: 几乎是所有的。

[^2]: 几乎不需要 `format()` 了。

## SDK

Pawn 是长期以来（并且仍然是）为你的服务器编写模式的官方方式。它不会消失，但对于那些想要更多控制权的朋友，我们终于发布了完整的 SDK（*S*oftware *D*evelopment *K*it，软件开发工具包）。这是一个通往服务器的 C++ 接口，与构成核心代码的所有组件使用的接口相同。它们能做的任何事情，你也能做（相比之下，插件仅设计为向 pawn 提供函数，而不是编写模式）。

我们正在编写一些文档，但不幸的是这需要时间。但与此同时，我们为那些想直接上手的朋友提供了几个示例组件。这些都是你可以构建的模板，可以从几乎零开始，到一个具备最常见功能的完全可运行的组件：

[https://github.com/openmultiplayer/empty-template](https://github.com/openmultiplayer/empty-template)

[https://github.com/openmultiplayer/basic-template](https://github.com/openmultiplayer/basic-template)

[https://github.com/openmultiplayer/pawn-template](https://github.com/openmultiplayer/pawn-template)

[https://github.com/openmultiplayer/full-template](https://github.com/openmultiplayer/full-template)

一些术语让你入门，帮助你理解正在阅读的内容：

- _组件_ - 服务器的一个逻辑独立部分，比如物体或拾取物。你不需要的部分可以不用加载。
- _扩展_ - 扩展另一段代码的代码。你可以编写组件扩展，但最常见的是玩家扩展，它定义了一些数据结构，用于在玩家所有正常数据（如生命值和武器）之外，与玩家关联。
- _UID_ - 唯一标识符，一个代表你且仅代表你组件的数字。这总是必需的，可以在这里获取：[https://open.mp/uid](https://open.mp/uid)
- _实体_ - 一个东西，通常是玩家可以与之交互的东西，并且你可能有很多这样的东西。物体是实体，但其他玩家也是实体，甚至处理器中的命令也可以称为实体。
- _池_ - 容纳实体的东西。当你有大量实体时，你需要能够通过名称或 ID 以某种方式访问它们，这就是池的作用。
- _接口_ - 组件使用一个抽象基类作为接口。这声明了组件具有哪些方法，但不包含这些方法的代码。接口被传递，以便组件之间可以相互通信，但实现是私有的。
- _SDK_ - 核心服务器定义的所有接口的集合。
- _ABI_ - 应用程序二进制接口，是编译后的代码与其他编译代码通信的方式。SDK 导出的接口是 _ABI 稳定的_，这意味着使用在不同时间编译的两个组件仍然可以协同工作。
- _pawn-natives_ - 所有原生函数声明构建于其上的库。围绕此库使用一个名为 _SCRIPT_API_ 的包装器：[https://github.com/openmultiplayer/pawn-natives](https://github.com/openmultiplayer/pawn-natives)
- _事件_ - 外部发生的某些事情。比如玩家连接和输入命令就是事件。任何组件都可以定义事件，并告诉其他组件这些事件何时发生。
- _处理器_ - 想知道事件何时发生的组件。

如果你有任何问题，最好的地方可能是这个全新的（复兴的）论坛：
[https://forum.open.mp/](https://forum.open.mp/)

## 新特性

除了为 pawn 宣布的所有新特性外，服务器中还有几个新的（以及新宣布的）特性：

- 每个玩家的帮派区域，类似于 YSF 中那样。
- 每个玩家的拾取物，也类似于 YSF 中那样。
- `AttachPlayerObjectToPlayer`。
- 更好的 PawnPlus 支持。
- `:memory:` 以及其他特殊名称在 SQLite 中的支持。
- SQLite 打开标志。
- `exclude` 配置选项，用于不加载特定组件。
- 显示配置解析错误，而不是默默地失败。
- SDK 主版本检查，以防我们将来对服务器进行重大更改（希望我们不会）。

## 修复

在 beta 11 中引入了一些新 bug，以及之前遗留的一些小问题。修复的问题包括：

- `funcidx` 已注册的警告。
- GDK 插件（例如 streamer 等）缺少原生函数。
- GMX 时随机崩溃。
- 有时不调用 GDK 回调。
- SQLite 组件在请求时没有记录日志。
- 某些设置在 GMX 时未重置。
- 当一次性创建大量 NPC 时，NPC 连接出现问题。
- Linux 遗留插件名称中仍然需要 `.so` 后缀。

## 链接

首先，当然是新服务器版本：

[https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases)

其次，论坛重新上线了。有任何问题请前往：
[https://forum.open.mp](https://forum.open.mp)
或者
[https://vk.com/open_mp](https://vk.com/open_mp)如果你喜欢。

接下来，尽管我们多次拒绝，但到目前为止我们明确抵制任何金钱资助；因为在我们通过发布版本来证明自己之前，我们认为这不合适。随着这篇文章的发布，这个时刻现在已经到来，所以如果有人想帮助我们（所有捐款将用于基础设施和未来的客户端开发工作），我们将不胜感激：
[https://opencollective.com/openmultiplayer](https://opencollective.com/openmultiplayer)

[https://www.patreon.com/open_mp](https://www.patreon.com/open_mp)

当然，一切仍在积极开发中，所以请务必定期查看以上所有链接，看看我们又有了什么新东西。
