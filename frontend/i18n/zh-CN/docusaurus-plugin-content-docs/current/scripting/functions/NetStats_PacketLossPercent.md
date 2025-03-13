---
title: NetStats_PacketLossPercent
sidebar_label: NetStats_PacketLossPercent
description: 获取玩家网络丢包百分比
tags: ["网络监控"]
---

## 描述

用于获取玩家的网络丢包百分比。丢包率表示玩家发送至服务器的数据存在丢失（反之亦然）

| 参数     | 说明                |
| -------- | ------------------- |
| playerid | 要获取数据的玩家 ID |

## 返回值

以浮点数形式返回丢包百分比，若玩家未连接则返回 0

## 示例

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/packetloss"))
    {
        new szString[144];
        format(szString, sizeof(szString), "当前丢包率: %.2f%%", NetStats_PacketLossPercent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## 注意事项

:::tip

当前该函数的返回值可能存在偏差，实际结果与客户端显示数据存在差异。建议使用以下更精确的替代方案：

```c
stock GetPlayerPacketLoss(playerid, &Float:packetLoss)
{
    /* 返回指定玩家的丢包率百分比 - 由Fusez制作 */

    if(!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new nstats[400+1], nstats_loss[20], start, end;
    GetPlayerNetworkStats(playerid, nstats, sizeof (nstats));

    start = strfind(nstats, "packetloss", true);
    end = strfind(nstats, "%", true, start);

    strmid(nstats_loss, nstats, start+12, end, sizeof (nstats_loss));
    packetLoss = floatstr(nstats_loss);
    return 1;
}
```

:::

:::tip

请注意该函数反映的是服务器的丢包数据。客户端显示的数值**会**有所不同，并非数据错误，而是因为服务器与客户端各自仅能感知自身发送的数据包丢失情况

:::

:::tip

丢包率高于 0.0%时应当引起注意，超过 1.0%则表明网络状况非常糟糕

:::

## 相关函数

- [GetPlayerNetworkStats](GetPlayerNetworkStats): 获取玩家网络统计数据并存入字符串
- [GetNetworkStats](GetNetworkStats): 获取服务器网络统计数据并存入字符串
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): 获取玩家持续连接时间
- [NetStats_MessagesReceived](NetStats_MessagesReceived): 获取服务器接收的消息总数
- [NetStats_BytesReceived](NetStats_BytesReceived): 获取服务器接收的字节总数
- [NetStats_MessagesSent](NetStats_MessagesSent): 获取服务器发送的消息总数
- [NetStats_BytesSent](NetStats_BytesSent): 获取服务器发送的字节总数
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): 获取每秒接收的消息数量
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): 获取玩家连接状态
- [NetStats_GetIpPort](NetStats_GetIpPort): 获取玩家 IP 地址与端口号
