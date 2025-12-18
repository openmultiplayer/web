---
title: NetStats_GetIpPort
sidebar_label: NetStats_GetIpPort
description: 获取玩家IP地址与端口号
tags: ["网络监控", "IP地址"]
---

## 描述

用于获取玩家的 IP 地址与端口信息

| 参数                   | 说明                                       |
| ---------------------- | ------------------------------------------ |
| playerid               | 目标玩家的 ID                              |
| output[]               | 用于存储 IP 和端口的字符串数组（引用传递） |
| size = sizeof (output) | 缓冲区最大容量。推荐设置为 22              |

## 返回值

玩家的 IP 地址与端口号将存入指定数组

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ipandport"))
    {
        new dest[22];
        NetStats_GetIpPort(playerid, dest, sizeof(dest));

        new szString[144];
        format(szString, sizeof(szString), "你当前的IP与端口：%s", dest);
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## 相关函数

- [GetPlayerIp](GetPlayerIp): 获取玩家 IP 地址
- [GetPlayerNetworkStats](GetPlayerNetworkStats): 获取玩家网络统计数据并存入字符串
- [GetNetworkStats](GetNetworkStats): 获取服务器网络统计数据并存入字符串
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): 获取玩家持续连接时间
- [NetStats_MessagesReceived](NetStats_MessagesReceived): 获取服务器接收的网络消息数量
- [NetStats_BytesReceived](NetStats_BytesReceived): 获取服务器接收的字节总数
- [NetStats_MessagesSent](NetStats_MessagesSent): 获取服务器发送的网络消息数量
- [NetStats_BytesSent](NetStats_BytesSent): 获取服务器发送的字节总数
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): 获取每秒接收的消息数量
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): 获取玩家丢包率百分比
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): 获取玩家连接状态
