---
title: NetStats_GetConnectedTime
sidebar_label: NetStats_GetConnectedTime
description: 获取玩家已连接服务器的持续时间（单位：毫秒）
tags: ["网络监控"]
---

## 描述

用于获取玩家持续连接服务器的毫秒数

| 参数     | 说明            |
| -------- | --------------- |
| playerid | 要查询的玩家 ID |

## 返回值

玩家保持连接的毫秒数

若玩家未连接则返回 0

## 示例

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/connectedtime"))
    {
        new szString[144];
        format(szString, sizeof(szString), "你已连接服务器达 %i 毫秒", NetStats_GetConnectedTime(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## 注意事项

:::tip

该返回值在通过 RCON 命令"gmx"切换游戏模式时不会被重置

:::

## 相关函数

- [GetPlayerNetworkStats](GetPlayerNetworkStats): 获取玩家网络统计数据并存入字符串
- [GetNetworkStats](GetNetworkStats): 获取服务器网络统计数据并存入字符串
- [NetStats_MessagesReceived](NetStats_MessagesReceived): 获取服务器接收的网络消息数量
- [NetStats_BytesReceived](NetStats_BytesReceived): 获取服务器接收的字节总数
- [NetStats_MessagesSent](NetStats_MessagesSent): 获取服务器发送的网络消息数量
- [NetStats_BytesSent](NetStats_BytesSent): 获取服务器发送的字节总数
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): 获取每秒接收的消息数量
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): 获取玩家丢包率百分比
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): 获取玩家连接状态
- [NetStats_GetIpPort](NetStats_GetIpPort): 获取玩家 IP 地址与端口号
