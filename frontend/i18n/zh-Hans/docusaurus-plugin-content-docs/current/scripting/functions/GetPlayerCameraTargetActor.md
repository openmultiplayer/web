---
title: GetPlayerCameraTargetActor
sidebar_label: GetPlayerCameraTargetActor
description: 允许你获取玩家当前正在注视的角色（若有）的ID。
tags: ["玩家", "视角", "角色"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取玩家当前正在注视的角色（若有）的 ID。

| 参数名   | 说明                          |
| -------- | ----------------------------- |
| playerid | 需要获取目标角色 ID 的玩家 ID |

## 返回值

玩家正在注视的角色 ID（若无可视角色则返回 INVALID_ACTOR_ID）

## 示例代码

```c
new bool:ActorHandsup[MAX_ACTORS];

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, true);
    return 1;
}

public OnPlayerUpdate(playerid)
{
    // 检测玩家当前注视的角色（若有）
    new playerTargetActor = GetPlayerCameraTargetActor(playerid);

    if (playerTargetActor != INVALID_ACTOR_ID)
    {
        // 获取玩家当前武器以检测是否持械
        new playerWeapon = GetPlayerWeapon(playerid);

        // 获取玩家按键状态以检测是否处于瞄准状态
        new KEY:keys, updown, leftright;
        GetPlayerKeys(playerid, keys, updown, leftright);

        // 若角色未举手且玩家持械瞄准
        if (!ActorHandsup[playerTargetActor] && playerWeapon >= 22 && playerWeapon <= 42 && keys & KEY_AIM)
        {
            // 应用举手动画
            ApplyActorAnimation(playerTargetActor, "SHOP", "SHP_HandsUp_Scr",4.1,0,0,0,1,0);

            // 标记角色已举手状态
            ActorHandsup[playerTargetActor] = true;
        }
    }
    return 1;
}
```

## 注意事项

:::tip

本函数仅返回玩家视角方向上的角色 ID，如需检测玩家是否正在瞄准该角色，请使用[GetPlayerTargetActor](GetPlayerTargetActor)

:::

:::warning

本功能默认禁用以节省带宽，需使用[EnablePlayerCameraTarget](EnablePlayerCameraTarget)为每个玩家单独启用

:::

## 相关函数

- [GetPlayerTargetActor](GetPlayerTargetActor): 获取指定玩家正在瞄准的角色 ID
- [GetPlayerCameraTargetPlayer](GetPlayerCameratargetPlayer): 获取玩家当前注视的玩家 ID
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): 获取玩家当前注视的车辆 ID
- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): 获取玩家当前注视的物体 ID
- [GetPlayerCameraFrontVector](GetPlayerCaemraFrontVector): 获取玩家视角前向向量
