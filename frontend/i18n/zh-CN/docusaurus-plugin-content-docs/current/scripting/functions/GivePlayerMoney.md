---
title: GivePlayerMoney
sidebar_label: GivePlayerMoney
description: 给予或扣除玩家的资金。
tags: ["玩家"]
---

## 描述

对指定玩家进行资金增减操作。

| 参数名   | 说明                                   |
| -------- | -------------------------------------- |
| playerid | 目标玩家的 ID 编号                     |
| money    | 资金数额（正数表示给予，负数表示扣除） |

## 返回值

**1** - 操作成功执行

**0** - 操作执行失败（玩家未连接）

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
       // 给予击杀者1000美元奖励
       GivePlayerMoney(killerid, 1000);
       SendClientMessage(killerid, -1, "你因击杀获得1000美元奖励");
    }

    // 扣除死亡玩家500美元
    GivePlayerMoney(playerid, -500);
}
```

## 相关函数

- [ResetPlayerMoney](ResetPlayerMoney): 重置玩家资金至\$0
- [GetPlayerMoney](GetPlayerMoney): 获取玩家当前资金总额
