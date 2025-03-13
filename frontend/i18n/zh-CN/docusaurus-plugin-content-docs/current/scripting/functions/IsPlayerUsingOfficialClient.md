---
title: IsPlayerUsingOfficialClient
sidebar_label: IsPlayerUsingOfficialClient
description: 检测玩家是否使用官方SA-MP客户端。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家是否使用官方 SA-MP 客户端。

| 参数名   | 说明            |
| -------- | --------------- |
| playerid | 要检测的玩家 ID |

## 返回值

当玩家使用官方客户端时返回 1，否则返回 0

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerUsingOfficialClient(playerid) == 0)
    {
        SendClientMessage(playerid, 0xFF0000FF, "[踢出]: 检测到您未使用官方SA-MP客户端！");
        Kick(playerid);
    }

    return 1;
}
```

## 相关函数

- [IsPlayerUsingOmp](IsPlayerUsingOmp): 检测玩家是否使用 open.mp 启动器
- [SendClientCheck](SendClientCheck): 执行客户端内存校验
