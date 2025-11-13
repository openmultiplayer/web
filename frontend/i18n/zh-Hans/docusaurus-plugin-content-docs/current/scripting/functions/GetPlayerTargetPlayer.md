---
title: GetPlayerTargetPlayer
sidebar_label: GetPlayerTargetPlayer
description: 检查玩家正在瞄准的目标玩家
tags: ["玩家"]
---

## 描述

检查指定玩家当前瞄准的目标玩家

| 参数     | 说明                  |
| -------- | --------------------- |
| playerid | 需要获取目标的玩家 ID |

## 返回值

被瞄准的玩家 ID，若无目标则返回 `INVALID_PLAYER_ID`

## 示例代码

```c
public OnPlayerUpdate(playerid)
{
    // 存储目标ID
    new playerTargetId = GetPlayerTargetPlayer(playerid);
    if (playerTargetId != INVALID_PLAYER_ID && GetPlayerTeam(playerTargetId) == GetPlayerTeam(playerid))
    {
        GameTextForPlayer(playerid, "~R~禁止攻击队友！", 5000, 3);
    }
}
```

## 注意事项

:::warning

不适用于游戏手柄/控制器，且存在有效距离限制。狙击步枪（Sniper Rifle）无法锁定目标，因此不会返回任何玩家。

:::

## 相关函数

- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量

## 相关回调

- [OnPlayerGiveDamage](../callbacks/OnPlayerGiveDamage): 当玩家造成伤害时触发
- [OnPlayerTakeDamage](../callbacks/OnPlayerTakeDamage): 当玩家受到伤害时触发
