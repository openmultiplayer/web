---
title: GetPlayerTargetActor
sidebar_label: GetPlayerTargetActor
description: 获取指定玩家正在瞄准的角色ID
tags: ["玩家"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取指定玩家当前瞄准的角色（Actor）ID

| 参数     | 说明                  |
| -------- | --------------------- |
| playerid | 需要获取目标的玩家 ID |

## 返回值

被瞄准的角色 ID，若无目标则返回 `INVALID_ACTOR_ID`

## 示例代码

```c
public OnPlayerUpdate(playerid)
{
    new
        targetActorId = GetPlayerTargetActor(playerid),
        string[32];

    format(string, sizeof(string), "你正在瞄准角色ID %d", targetActorId);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## 注意事项

:::warning

不适用于游戏手柄/控制器，且存在有效距离限制。狙击步枪（Sniper Rifle）无法锁定目标，因此不会返回任何角色。

:::

## 相关函数

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): 获取玩家视角目标角色（若存在）
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量

## 相关回调

- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): 当玩家对角色造成伤害时触发
