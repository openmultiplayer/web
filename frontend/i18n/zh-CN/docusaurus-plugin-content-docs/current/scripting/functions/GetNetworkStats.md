---
title: GetNetworkStats
sidebar_label: GetNetworkStats
description: 获取服务器的网络统计数据并存储到字符串中
tags: []
---

## 描述

获取服务器的网络统计数据并存储到字符串中。

| 名称                   | 描述                                         |
| ---------------------- | -------------------------------------------- |
| output[]               | 用于存储网络统计数据的字符串，通过引用传递。 |
| size = sizeof (output) | 待存储字符串的长度                           |

## 返回值

本函数固定返回 1。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/netstats"))
    {
        new stats[400+1];
        GetNetworkStats(stats, sizeof(stats)); // 获取服务器网络统计数据
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "服务器网络状态", stats, "关闭", "");
    }
    return 1;
}
```

**输出结果:**

```
(服务器时钟周期) Server Ticks: 200
(发送缓冲区中的消息) Messages in Send buffer: 0
(已发送消息) Messages sent: 142
(已发送字节) Bytes sent: 8203
(已发送确认) Acks sent: 11
(发送缓冲区中的确认) Acks in send buffer: 0
(等待确认的消息) Messages waiting for ack: 0
(重新发送的消息) Messages resent: 0
(重新发送的字节) Bytes resent: 0
(数据包丢失率) Packetloss: 0.0%
(已接收消息) Messages received: 54
(已接收字节) Bytes received: 2204
(已接收确认) Acks received: 0
(重复确认接收) Duplicate acks received: 0
(瞬时KBits每秒) Inst. KBits per second: 28.8
(发送KBits每秒) KBits per second sent: 10.0
(接收KBits每秒) KBits per second received: 2.7
```

## 相关函数

- [GetPlayerNetworkStats](GetPlayerNetworkStats): 获取玩家网络统计数据并存储到字符串中
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): 获取玩家持续连接时间
- [NetStats_MessagesReceived](NetStats_MessagesReceived): 获取服务器从玩家接收的网络消息数量
- [NetStats_BytesReceived](NetStats_BytesReceived): 获取服务器从玩家接收的数据量（字节）
- [NetStats_MessagesSent](NetStats_MessagesSent): 获取服务器发送给玩家的网络消息数量
- [NetStats_BytesSent](NetStats_BytesSent): 获取服务器发送给玩家的数据量（字节）
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): 获取服务器每秒从玩家接收的消息数量
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): 获取玩家的数据包丢失率
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): 获取玩家的连接状态
- [NetStats_GetIpPort](NetStats_GetIpPort): 获取玩家的 IP 地址和端口
