---
slug: server-beta-9
title: 支持 SA-MP 0.3.DL 及其他新特性与错误修复 - 服务器测试版发布 9
authors: potassium
---

我们刚刚发布了 open.mp 服务器测试版 9，带来了重大改进、修复以及万众期待的 SA:MP 0.3.DL 支持！此次更新包含了新特性、更好的插件兼容性以及增强的服务器配置选项。

<!-- truncate -->

发布于我们的 Discord 服务器公告频道，作者 kseny ([discord.gg/samp](https://discord.gg/samp))

大家好，

我们刚刚发布了 open.mp 服务器测试版 9，修复了数个已报告的问题并新增了多项功能。最值得注意的变化是——**支持 SA:MP 0.3.DL**。你现在可以使用同一个二进制文件来运行兼容 0.3.7 和 0.3.DL 的服务器了。

## 其他变更

- **动态 Tick 率**。指定一个目标 tickrate，而非固定的休眠时间。
  - 使用 `tickrate` 控制台命令来设置速率。
  - `sleep` 现在可以是浮点数，以适应精确的 tick 率。
- **更强的插件兼容性** - fsutil, Discord connector（仅限非静态构建版本）。
- 修复了 `SetSpawnInfo` 的返回值。
- 修复了 GMX 后天气和时间不重置的问题。
- 修复了各种 GMX 相关错误。
- 修复了各种控制台命令。
- 修复了 `GetPlayerClass`。
- 修复了 `GetVehicleLastDriver`。
- 新增 `GetVehicles` 原生函数。
- 新增 `GetPlayers` 原生函数。
- 新增 `GetActors` 原生函数。
- 所有延迟补偿模式现在都可以通过配置启用。
- 修复了拖车同步。
- 修复了 `GetVehicleLastDriver`。
- 修复了 `GetPlayerRotationQuat`。
- 修复了车辆组件的崩溃问题。

## SA:MP DL

这显然是最大的新闻，并且附带了一系列全新的设置：

- 实现了所有 DL 原生函数和回调（`AddSimpleModel`、`AddSimpleModelTimed`、`GetPlayerCustomSkin`、`OnPlayerFinishedDownloading`、`OnPlayerRequestDownload`）：
  - `RedirectDownload` 原生函数和 `OnPlayerRequestDownload` 回调现在已被弃用，建议使用 CDN 配置选项替代。
- 新增 `artwork.enable`（旧版：`useartwork`）配置选项。
- 新增 `artwork.models_path`（旧版：`artpath`）配置选项。
  - 服务器可以像 SA:MP 一样从 `artconfig.txt` 文件加载自定义模型。
- 保留了 0.3.7 兼容性，可通过 `network.allow_037_clients` 配置选项进行配置（默认为 true）。
- open.mp 服务器现在内置了一个用于提供自定义模型的网络服务器
  - 该网络服务器使用 open.mp 服务器的绑定地址和端口。如果计划使用它，请在防火墙中允许该端口的 TCP 连接。
  - 如果你的公网 IP 地址与绑定地址不同（例如，在路由器后面），你需要在 `network.public_addr` 配置选项中设置你的公网 IP。

## 注意事项

- 由于一些更改，旧的 config.json 文件可能无法正常工作。请使用 `./omp-server --default-config` 来生成一个新的配置文件。
- 使用 server.cfg 的用户不受影响。
- 在仅允许 0.3.7 连接时，最多只能创建 1000 个物体。
- open.mp 服务器现在提供两种类型的 Linux 构建：标准版和静态版。我们鼓励尽可能使用标准版，这将最大限度地减少与各种插件的兼容性问题；但是，它需要系统上安装有 openssl 1.1。如果你的系统无法安装现代版本的 openssl（通常是非常旧的系统），可以使用静态版，但一些插件或组件可能加载失败并导致服务器崩溃。

## 官方包含文件

准备一个完整的版本不仅仅是一个可工作的服务器，还需要所有其他周边——库、工具、文档等。在 Pawn 方面，open.mp 是一个显著的升级，通过修复和新特性已经带来了许多生活质量提升，未来还会有更多。本次推动的一个重要部分是**通过更多的编译器诊断功能来提前发现代码问题**，主要是通过更多的标签和常量正确性来实现。虽然官方版本尚未发布，但你仍然可以通过使用以下包含文件和工具测试你的代码来提供帮助：

https://github.com/pawn-lang/samp-stdlib/tree/consistency-overhaul  
https://github.com/pawn-lang/pawn-stdlib/tree/backported-natives  
https://github.com/openmultiplayer/upgrade  
https://github.com/pawn-lang/compiler

这些项目最初是为了改进默认的 SA:MP 包含文件而开发的，但从未完全发布（即，尽管 PR 被接受，但从未合并到主分支）。open.mp 的包含文件建立在这些项目奠定的基础上，因此可以将它们视为通往完整的 open.mp 标签和常量安全的垫脚石；同时也是关于其发展方向的重要反馈。请参阅上面的链接，了解关于升级的更多信息和文档。

和以往一样，如果你不想升级，旧代码和包含文件仍然可以工作（至少在第一个版本中）。
