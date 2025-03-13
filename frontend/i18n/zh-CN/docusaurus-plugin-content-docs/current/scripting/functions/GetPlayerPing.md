---
title: GetPlayerPing
sidebar_label: GetPlayerPing
description: 获取玩家的网络延迟（Ping）
tags: ["玩家"]
---

## 描述

获取玩家的网络延迟（Ping）。Ping 值表示服务器与客户端之间通信的往返时间。

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取 Ping 值的玩家 ID |

## 返回值

返回玩家当前的 Ping 值（单位：毫秒）

## 示例代码

```c
new string[24];
format(string, sizeof(string), "你的Ping值: %d", GetPlayerPing(playerid));
SendClientMessage(playerid, -1, string);
```

<br />

**自动踢出高延迟玩家示例:**

```c
// 声明定时器ID数组，默认值为0
new gPlayerPingTimer[MAX_PLAYERS] = {0, ...};

// 定义最大允许Ping值
const MAX_ACCEPTED_PING = 500;

public OnPlayerConnect(playerid)
{
    // 创建定时器检测玩家Ping值
    gPlayerPingTimer[playerid] = SetTimerEx("Ping_Timer", 3 * 1000, true, "i", playerid);
}

public OnPlayerDisconnect(playerid, reason)
{
    // 清除定时器
    KillTimer(gPlayerPingTimer[playerid]);
    gPlayerPingTimer[playerid] = 0;
}

// 转发函数（回调）
forward Ping_Timer(playerid);
public Ping_Timer(playerid)
{
    // 如果玩家的ping值超过通常接受的高ping值，则踢出玩家
    if (ping > MAX_ACCEPTED_PING)
    {
        new string[128];
        format(string, sizeof(string), "你因高延迟被踢出（当前Ping值：%d）", ping);
        SendClientMessage(playerid, -1, string);

        Kick(playerid);
    }
    return 1;
}
```

## 注意事项

:::warning

玩家刚连接时，Ping 值可能暂时显示为 65535

:::

## 相关函数

- [GetPlayerIp](GetPlayerIp): 获取玩家 IP 地址
- [GetPlayerName](GetPlayerName): 获取玩家昵称
- [GetPlayerVersion](GetPlayerVersion): 获取玩家客户端版本
