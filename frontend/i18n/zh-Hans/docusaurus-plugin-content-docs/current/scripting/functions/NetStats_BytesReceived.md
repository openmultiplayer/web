---
title: NetStats_BytesReceived
sidebar_label: NetStats_BytesReceived
description: 获取服务器从玩家接收的数据量（单位：字节）
tags: ["网络监控"]
---

## 描述

用于获取服务器从指定玩家接收的数据总量（以字节为单位）

| 参数     | 说明                |
| -------- | ------------------- |
| playerid | 要获取数据的玩家 ID |

## 返回值

服务器从该玩家接收的字节总数

若玩家未连接则返回 0

## 示例

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/bytesreceived"))
    {
        new szString[144];
        format(szString, sizeof(szString), "你已向服务器发送了 %i 字节的数据", NetStats_BytesReceived(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## 相关函数

- [GetPlayerNetworkStats](GetPlayerNetworkStats): 获取玩家网络统计数据并存入字符串
- [GetNetworkStats](GetNetworkStats): 获取服务器网络统计数据并存入字符串
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): 获取玩家持续连接时间
- [NetStats_MessagesReceived](NetStats_MessagesReceived): 获取服务器接收的网络消息数量
- [NetStats_MessagesSent](NetStats_MessagesSent): 获取服务器发送的网络消息数量
- [NetStats_BytesSent](NetStats_BytesSent): 获取服务器发送的字节总数
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): 获取每秒接收的消息数量
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): 获取玩家丢包率百分比
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): 获取玩家连接状态
- [NetStats_GetIpPort](NetStats_GetIpPort): 获取玩家 IP 地址与端口号
