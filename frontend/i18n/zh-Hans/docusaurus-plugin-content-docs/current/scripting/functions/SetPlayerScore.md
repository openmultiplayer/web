---
title: SetPlayerScore
sidebar_label: SetPlayerScore
description: 设置玩家的分数。
tags: ["玩家"]
---

## 描述

设置玩家的分数。玩家的分数会显示在积分板中（通过按住 TAB 键查看）。

| 参数名   | 描述                |
| -------- | ------------------- |
| playerid | 要设置分数的玩家 ID |
| score    | 要设置的分数值      |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的玩家不存在）

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 给击杀者的分数加1。需先验证有效性
    if (killerid != INVALID_PLAYER_ID)
    {
        SetPlayerScore(killerid, GetPlayerScore(killerid) + 1);
    }
    return 1;
}
```

## 相关函数

- [GetPlayerScore](GetPlayerScore): 获取玩家的分数
