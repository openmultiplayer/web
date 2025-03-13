---
title: IsPlayerSpawned
sidebar_label: IsPlayerSpawned
description: 检测玩家是否已重生。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定玩家是否处于重生状态。

| 参数名   | 说明            |
| -------- | --------------- |
| playerid | 要检测的玩家 ID |

## 返回值

**true** - 玩家已重生

**false** - 玩家未重生

## 示例代码

```c
public OnPlayerText(playerid, text[])
{
    if (!IsPlayerSpawned(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "错误：你必须重生后才能发送消息。");
        return 0;
    }
    return 1;
}
```

## 相关函数

- [SpawnPlayer](SpawnPlayer): 使玩家（重新）重生
