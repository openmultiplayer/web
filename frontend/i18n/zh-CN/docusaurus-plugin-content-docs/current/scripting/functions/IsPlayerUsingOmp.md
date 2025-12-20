---
title: IsPlayerUsingOmp
sidebar_label: IsPlayerUsingOmp
description: 检测玩家是否使用open.mp启动器。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp 1.4.0.2779' />

## 描述

检测指定玩家是否正在使用 open.mp 启动器。

| 参数名   | 说明            |
| -------- | --------------- |
| playerid | 要检测的玩家 ID |

## 返回值

当玩家使用 open.mp 启动器时返回 1，否则返回 0

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    // 玩家正在使用open.mp启动器
    if(IsPlayerUsingOmp(playerid))
    {
        SendClientMessage(playerid, -1, "你正在使用open.mp启动器。");
    }

    // 玩家未使用open.mp启动器
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "[踢出]: 检测到你未使用open.mp启动器");
        Kick(playerid);
    }

    return 1;
}
```

## 相关函数

- [IsPlayerUsingOfficialClient](IsPlayerUsingOfficialClient): 检测玩家是否使用官方 SA-MP 客户端
- [SendClientCheck](SendClientCheck): 执行客户端内存校验
