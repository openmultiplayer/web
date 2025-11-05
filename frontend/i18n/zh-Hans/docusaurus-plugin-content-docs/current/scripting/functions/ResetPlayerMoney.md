---
title: ResetPlayerMoney
sidebar_label: ResetPlayerMoney
description: 将玩家的金钱重置为$0
tags: ["玩家"]
---

## 描述

将玩家的金钱重置为$0。

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要重置金钱的玩家 ID |

## 返回值

**1** - 函数执行成功

**0** - 函数执行失败（玩家未连接）

## 示例代码

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendClientMessage(playerid, 0xFFFFFFAA, "你已死亡，所有现金已被清空！");
    ResetPlayerMoney(playerid);
    return 1;
}
```

## 相关函数

- [GetPlayerMoney](GetPlayerMoney): 获取玩家当前金钱数额
- [GivePlayerMoney](GivePlayerMoney): 给予玩家金钱
