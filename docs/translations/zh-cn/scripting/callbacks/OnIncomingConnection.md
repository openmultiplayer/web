---
title: OnIncomingConnection
description: 当IP地址尝试连接到服务器时，将调用这个回调函数。要阻止传入的连接，使用BlockIpAddress函数。
tags: []
---

## 描述

当 IP 地址尝试连接到服务器时，将调用这个回调函数。要阻止传入的连接，请使用 BlockIpAddress 函数。

| 参数名       | 描述                     |
| ------------ | ------------------------ |
| playerid     | 试图连接的玩家的 ID      |
| ip_address[] | 试图连接的玩家的 IP 地址 |
| port         | 试图连接的端口           |

## 返回值

1 - 将阻止其他过滤脚本接收到这个回调。

0 - 表示这个回调函数将被传递给下一个过滤脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("传入的连接为玩家ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## 相关函数

- [BlockIpAddress](../functions/BlockIpAddress): 在一定时间内阻止一个 IP 地址连接到服务器。
- [UnBlockIpAddress](../functions/UnBlockIpAddress): 解除先前阻止的 IP。
