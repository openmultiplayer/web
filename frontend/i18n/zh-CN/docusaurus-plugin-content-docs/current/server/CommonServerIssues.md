---
title: 常见服务器问题
sidebar_label: 常见服务器问题
---

## 服务器启动后立即崩溃

最常见的原因是 server.cfg 文件存在错误或游戏模式文件缺失。请检查 server_log.txt 文件，崩溃原因通常位于文件末尾。若未找到，请检查 crashinfo.txt 文件。更有效的排查方式是使用 Zeex/0x5A656578 开发的 Crash detect 插件（[点击获取链接](https://github.com/AmyrAhmady/samp-plugin-crashdetect)），该插件可提供行号、函数名、参数值等详细信息。建议在调试模式（-d3 参数）下编译脚本，使编译器在输出的.amx 文件中包含额外调试信息。

## 服务器无法运行 - 防火墙已关闭

您需要进行端口转发以允许玩家加入服务器。推荐使用 [PF Port Checker](https://portforward.com) 进行端口转发。若端口未转发，需在路由器中开启端口。可参考[路由器列表](https://portforward.com/router.htm)。

该网站包含完整的端口转发教程。

## '数据包被篡改'

典型错误提示：

```
[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```

当玩家连接超时或存在网络问题时会出现此提示。

## '警告：客户端超出消息限制'

典型错误提示：

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```

当客户端每秒发送给服务器的消息数量超过限制时触发。

## '警告：客户端超出确认包限制'

典型错误提示：

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```

当确认包（ACK）数量超过限制时触发。

## '警告：客户端超出消息空洞限制'

典型错误提示：

```
Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x
```

当消息空洞（message hole）数量超过限制时触发。

## '警告：过多乱序消息'

典型错误提示：

```
Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)
```

当乱序消息数量触发 messageholelimit 设置时出现。

更多信息请参阅[此文档](ControllingServer#rcon-commands)

## 玩家持续收到"昵称不合法"错误但实际有效

若确认使用合法昵称且服务器运行于 Windows 系统，请尝试将 samp-server.exe 的兼容性模式设置为 Windows 98，重启服务器后生效。

Windows 服务器长时间运行（约 50 天以上）也可能引发此问题，需重启服务器解决。

## 缺少`MSVCR___.dll`/`MSVCP___.dll`文件

此问题常见于 Windows 服务器加载使用高版本 Visual C++运行时开发的插件时。解决方案是安装对应版本的 Microsoft Visual C++运行时库。注意 SA-MP 服务器为 32 位程序，因此无论系统架构如何都必须安装 x86 版本。所需版本由文件名中的数字决定（见下表），建议安装所有版本。运行时库不向下兼容（例如安装 2015 版不会包含 2013 及更早版本）。

| 版本号 | 运行时库                                      |
| ------ | --------------------------------------------- |
| 10.0   | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0   | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0   | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0   | Microsoft Visual C++ 2015 x86 Redistributable |
