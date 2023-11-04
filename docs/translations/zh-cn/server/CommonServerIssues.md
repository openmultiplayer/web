---
title: 常见问题
---

## 服务器启动时立即崩溃

最常见的是您的 server.cfg 文件中的错误或您的游戏模式 (主图文件) 丢失。检查 server_log.txt 文件，原因应该位于底部。如果没有，请检查 crashinfo.txt 文件。找出导致崩溃的原因的更好解决方案是使用 Zeex/0x5A656578 的崩溃检测插件 ([点击链接](https://github.com/Zeex/samp-plugin-crashdetect))，它将提供更多信息像行号、函数名、参数值等。如果脚本是在调试模式下编译的(-d3标志)，会使编译器将关于所有这些东西的额外信息放入output.amx。

## 服务器不起作用 - 防火墙被禁用

您需要转发您的端口以允许玩家加入您的服务器。 您可以使用 PF Port Checker 转发您的端口。 从以下网址下载：www.portforward.com 如果端口未转发，则意味着您必须在路由器中打开它们。 您可以在 [https://portforward.com/router.htm](https://portforward.com/router.htm "https://portforward.com/router.htm") 查看路由器列表。

它包含有关如何转发端口的所有信息。

## 'Packet was modified'

错误信息通常显示为:

```
[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```

当玩家超时或当前有连接问题时发生.

## 'Warning: client exceeded messageslimit'

错误信息通常显示为:

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```

当客户端每秒发送给服务器的消息数超过最大限制时发生.

## 'Warning: client exceeded ackslimit'

错误信息通常显示为:

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```

当 ack 超过最大限制时发生.

## 'Warning: client exceeded messageholelimit'

错误信息通常显示为:

```
Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x
```

当消息洞超过最大限制时发生.

## 'Warning: Too many out-of-order messages'

错误信息通常显示为:

```
Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)
```

当“乱序消息”复用 messageholelimit 设置时发生。

有关这方面的更多信息，请参阅 [此处](ControllingServer#rcon-commands)

## 玩家持续收到“Unacceptable NickName”错误，但游戏名是有效的

如果您确定使用了有效的游戏名并且服务器在 Windows 上运行，尝试将 samp-server.exe 的兼容性选项更改为 Windows 98，并且应该在服务器重新启动后修复它。

正常运行时间较长的 Windows 服务器也可能导致出现此问题。 已经注意到大约 50 天的服务器正常运行时间。如果要解决它，需要重新启动。

## `MSVCR___.dll`/`MSVCP___.dll` not found

当尝试加载使用比您计算机上当前安装的更高版本的 Visual C++ 运行时开发的插件时，Windows 服务器上经常会出现此问题。 要解决此问题，请下载相应的 Microsoft Visual C++ 运行库。 请注意，SA-MP 服务器是 32 位的，因此无论架构如何，您还需要下载 32 位 (x86) 版本的运行库。 您最需要的运行库版本由文件名中的数字表示（参见下表），尽管安装所有版本的运行库没有什么坏处。 这些库不会堆叠，换句话说：如果你只安装2015版本，2013年或更早版本的运行库仍需要安装。

| 版本号 | 运行库                                        |
| ------ | --------------------------------------------- |
| 10.0   | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0   | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0   | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0   | Microsoft Visual C++ 2015 x86 Redistributable |
