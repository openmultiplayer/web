---
title: NetStats_ConnectionStatus
sidebar_label: NetStats_ConnectionStatus
description: 获取玩家当前连接状态
tags: ["网络监控"]
---

## 描述

用于获取玩家当前的网络连接状态

| 参数     | 说明            |
| -------- | --------------- |
| playerid | 要查询的玩家 ID |

## 返回值

以整数值形式返回玩家的[连接状态](../resources/connectionstatus)

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/connectionstatus"))
    {
        static ConnectionStatuses[9][48] =
        {
            "无操作",
            "立即断开连接",
            "静默立即断开",
            "无应答时断开",
            "已请求连接",
            "处理连接请求",
            "未验证发送方",
            "多包加密模式",
            "已连接"
        };

        new connectionStatus = NetStats_ConnectionStatus(playerid);

        new string[144];
        format(string, sizeof(string), "您当前的连接状态: %s", ConnectionStatuses[connectionStatus]);
        SendClientMessage(playerid, -1, string);
    }
    return 1;
}
```

## 相关函数

- [GetPlayerNetworkStats](GetPlayerNetworkStats): 获取玩家网络统计数据并存入字符串
- [GetNetworkStats](GetNetworkStats): 获取服务器网络统计数据并存入字符串
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): 获取玩家持续连接时间
- [NetStats_MessagesReceived](NetStats_MessagesReceived): 获取服务器接收的网络消息数量
- [NetStats_BytesReceived](NetStats_BytesReceived): 获取服务器接收的字节总数
- [NetStats_MessagesSent](NetStats_MessagesSent): 获取服务器发送的网络消息数量
- [NetStats_BytesSent](NetStats_BytesSent): 获取服务器发送的字节总数
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): 获取每秒接收的消息数量
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): 获取玩家丢包率百分比
- [NetStats_GetIpPort](NetStats_GetIpPort): 获取玩家 IP 地址与端口号
- [IsPlayerConnected](IsPlayerConnected): 检测玩家是否在线

## 相关回调

- [OnPlayerConnect](../callbacks/OnPlayerConnect): 玩家连接服务器时触发
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): 玩家断开连接时触发

## 相关资源

- [连接状态说明](../resources/connectionstatus)
