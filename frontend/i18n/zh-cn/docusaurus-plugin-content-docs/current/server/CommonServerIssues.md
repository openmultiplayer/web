---
title: Common Server Issues
sidebar_label: Common Server Issues
---

## 服务器启动时立即崩溃

通常情况下，这是由于你的 `server.cfg` 文件出现错误或你的游戏模式缺失所致。检查 `server_log.txt` 文件，原因通常在文件底部。如果没有找到原因，请检查 `crashinfo.txt` 文件。更好的解决方案是使用 Zeex/0x5A656578 的 Crash Detect 插件（[点击这里获取链接](https://github.com/Zeex/samp-plugin-crashdetect)），它会提供更多信息，如行号、函数名称、参数值等。如果脚本是以调试模式编译的（使用 `-d3` 标志），编译器会将这些额外的信息放入输出的 `.amx` 文件中。

## 服务器无法工作 - 防火墙已禁用

你需要转发端口以允许玩家加入你的服务器。你可以使用 PF Port Checker 来转发端口。下载地址：www.portforward.com 如果端口未转发，说明你需要在路由器中打开它们。你可以在 [http://portforward.com/english/routers/port_forwarding/routerindex.htm](http://portforward.com/english/routers/port_forwarding/routerindex.htm "http://portforward.com/english/routers/port_forwarding/routerindex.htm") 查看路由器列表及其转发方法。

该网站提供了所有关于如何转发端口的信息。

## 'Packet was modified'

该错误通常显示为:

```
[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```

当玩家超时或当前连接出现问题时会发生此错误.

## 'Warning: client exceeded messageslimit'

该错误通常显示为:

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```

当客户端每秒发送给服务器的消息数量超过限制时会发生此错误.

## 'Warning: client exceeded ackslimit'

该错误通常显示为:

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```

当确认数限制超过时发生.

## 'Warning: client exceeded messageholelimit'

该错误通常显示为:

```
Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x
```

当消息孔限制超过时发生.

## 'Warning: Too many out-of-order messages'

该错误通常显示为:

```
Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)
```

当“消息顺序错误”重用了 `messageholelimit` 设置时会发生此错误.

有关更多信息，请参阅[此处](ControllingServer#RCON_Commands)

## 玩家不断出现“Unacceptable NickName”错误但昵称是有效的

如果你确定使用了一个可接受的昵称并且服务器运行在 Windows 上，请尝试将 `samp-server.exe` 的兼容性选项更改为 Windows 98，重启服务器后应该可以解决问题.

具有较长在线时间的 Windows 服务器可能也会导致此问题发生。观察到在大约 50 天的服务器在线时间后会出现此问题。解决此问题需要重启服务器.

## `MSVCR___.dll`/`MSVCP___.dll` not found

当尝试加载一个使用比当前计算机上安装的 Visual C++ Runtime版本更高的插件时，这个问题在 Windows 服务器上经常发生。要解决此问题，请下载适当的 Microsoft Visual C++ Runtime库。请注意，SA-MP 服务器是 32 位的，因此无论架构如何，你都需要下载 32 位（x86）版本的Runtime。你具体需要的Runtime版本由文件名中的数字表示（见下表），不过安装所有版本也不会有坏处。这些库不会堆叠，换句话说：如果你只安装 2015 版本，你不会得到 2013 及以前版本的Runtime.

| 版本号 | Runtime                                       |
| ------ | --------------------------------------------- |
| 10.0   | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0   | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0   | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0   | Microsoft Visual C++ 2015 x86 Redistributable |
