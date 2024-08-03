---
title: OnPlayerDeath
description: 当一个玩家自杀或被另一个玩家杀死时，这个回调函数会被调用。
tags: ["player"]
---

## 描述

当一个玩家自杀或被另一个玩家杀死时，这个回调函数会被调用。

| 参数名   | 描述                                                            |
| -------- | --------------------------------------------------------------- |
| playerid | 死亡玩家的 ID。                                                 |
| killerid | 杀死死亡玩家的玩家的 ID，如果没有的话，则为 INVALID_PLAYER_ID。 |
| WEAPON:reason   | 玩家死亡原因的 ID。                                             |

## 返回值

0 - 将阻止其他过滤脚本接收到这个回调。

1 - 表示这个回调函数将被传递给下一个过滤脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // 杀戮信息显示在死亡反馈中

    // 在对killerid进行任何操作之前，检查它是否有效
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // 检查之外，处理playerid的内容(它总是有效的)
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## 要点

:::tip

任何火源(如土制燃烧弹，18)，reason 参数都会返回 37(火焰喷射器)。

任何制造爆炸的武器(如 RPG，手榴弹)，reason 参数都会返回 51。

无需检查 killerid 是否在 SendDeathMessage 中使用之前是否有效，因为 INVALID_PLAYER_ID 是函数中有效的 killerid ID 参数。

只有 playerid 可以调用回调函数。(它有助于防假死)。

:::

:::warning

您必须首先检查'killerid'是否有效(它不能是 INVALID_PLAYER_ID)，然后才可以在数组(或任何地方)使用它，否则这会导致 OnPlayerDeath 脚本崩溃(而不是整个脚本)。

因为 INVALID_PLAYER_ID 被定义为 65535，如果一个数组中只有‘MAX_PLAYERS’个元素，比如 500 个，那么当您尝试访问一个高于 499 的索引，它就超出了上限，导致越界。

:::

## 相关函数

- [SendDeathMessage](../functions/SendDeathMessage): 添加一个杀戮信息到死亡反馈。
- [SetPlayerHealth](../functions/SetPlayerHealth): 设置玩家的生命值。
