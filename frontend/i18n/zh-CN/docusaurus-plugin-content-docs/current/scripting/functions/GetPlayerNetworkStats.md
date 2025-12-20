---
title: GetPlayerNetworkStats
sidebar_label: GetPlayerNetworkStats
description: 获取玩家的网络统计信息并保存到字符串中
tags: ["玩家", "网络监控"]
---

## 描述

获取玩家的网络统计信息并保存到字符串中

| 参数                   | 说明                                     |
| ---------------------- | ---------------------------------------- |
| playerid               | 需要获取网络统计数据的玩家 ID            |
| output[]               | 存储网络统计数据的字符串（通过引用传递） |
| size = sizeof (output) | 存储字符串的缓冲区长度                   |

## 返回值

此函数总是返回 1

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mynetstats"))
    {
        new stats[400+1];
        GetPlayerNetworkStats(playerid, stats, sizeof(stats));
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "我的网络统计", stats, "确定", "");
    }
    return 1;
}
```

## 注意事项

:::tip

当在[OnPlayerDisconnect](OnPlayerDisconnect)回调中使用时，若玩家正常退出可能返回不准确数据。通常在玩家被踢出或超时的情况下数据准确

:::

## 相关函数

- [GetNetworkStats](GetNetworkStats): 获取服务器的网络统计信息并保存到字符串
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): 获取玩家已连接的时间
- [NetStats_MessagesReceived](NetStats_MessagesReceived): 获取服务器从玩家接收的网络消息数量
- [NetStats_BytesReceived](NetStats_BytesReceived): 获取服务器从玩家接收的数据量（字节）
- [NetStats_MessagesSent](NetStats_MessagesSent): 获取服务器发送给玩家的网络消息数量
- [NetStats_BytesSent](NetStats_BytesSent): 获取服务器发送给玩家的数据量（字节）
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): 获取服务器最近一秒从玩家接收的消息数量
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): 获取玩家的丢包率百分比
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): 获取玩家的连接状态
- [NetStats_GetIpPort](NetStats_GetIpPort): 获取玩家的 IP 地址和端口号
