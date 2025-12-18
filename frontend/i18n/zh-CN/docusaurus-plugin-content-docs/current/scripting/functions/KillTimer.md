---
title: KillTimer
sidebar_label: KillTimer
description: 终止（停止）正在运行的定时器。
tags: ["定时器"]
---

## 描述

终止（停止）正在运行的定时器。

## 参数说明

| 参数名  | 说明                                                |
| ------- | --------------------------------------------------- |
| timerid | 要终止的定时器 ID（由 SetTimer 或 SetTimerEx 返回） |

## 返回值

此函数总是返回 0。

## 示例代码

```c
new gConnectTimer[MAX_PLAYERS] = {0, ...}; // 玩家定时器存储数组

public OnPlayerConnect(playerid)
{
    print("启动定时器...");
    // 创建5秒循环定时器
    gConnectTimer[playerid] = SetTimerEx("WelcomeTimer", 5000, true, "i", playerid);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    // 终止玩家关联的定时器
    KillTimer(gConnectTimer[playerid]);
    gConnectTimer[playerid] = 0; // 重置定时器ID
    return 1;
}

forward WelcomeTimer(playerid);
public WelcomeTimer(playerid)
{
    SendClientMessage(playerid, -1, "欢迎加入服务器！");
}
```

## 相关函数

- [SetTimer](SetTimer): 创建基础定时器
- [SetTimerEx](SetTimerEx): 创建带参数的定时器
- [IsValidTimer](IsValidTimer): 检测定时器有效性
- [IsRepeatingTimer](IsRepeatingTimer): 检测定时器循环状态
- [GetTimerInterval](GetTimerInterval): 获取定时器间隔时长
- [GetTimerRemaining](GetTimerRemaining): 获取定时器剩余时间
- [CountRunningTimers](CountRunningTimers): 统计运行中的定时器数量
