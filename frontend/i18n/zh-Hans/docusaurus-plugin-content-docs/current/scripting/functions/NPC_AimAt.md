---
title: NPC_AimAt
sidebar_label: NPC_AimAt
description: 使 NPC 瞄准特定位置。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

使 NPC 瞄准特定位置。

| 名称                | 描述                       |
| ------------------- | -------------------------- |
| npcid               | NPC 的 ID                  |
| Float:pointX        | 瞄准的 X 坐标              |
| Float:pointY        | 瞄准的 Y 坐标              |
| Float:pointZ        | 瞄准的 Z 坐标              |
| bool:shoot          | 瞄准时是否射击             |
| shootDelay          | 射击间隔（毫秒）           |
| bool:updateAngle    | 是否更新 NPC 的朝向角度    |
| Float:offsetFromX   | NPC 射击位置的 X 偏移      |
| Float:offsetFromY   | NPC 射击位置的 Y 偏移      |
| Float:offsetFromZ   | NPC 射击位置的 Z 偏移      |
| checkInBetweenFlags | 用于碰撞检测的实体检查标志 |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_SNIPER); // 狙击步枪
    NPC_SetAmmo(npcid, 100); // 给予 100 发弹药

    // 使 NPC 瞄准并射击建筑物
    NPC_AimAt(npcid, 1958.33, 1343.12, 15.36, true, 500, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcaim", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 使 NPC 瞄准玩家位置（不射击）
        NPC_AimAt(0, x, y, z, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 现在正在瞄准您的位置");
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 将持续瞄准指定位置，直到调用 `NPC_StopAim`
- 如果 `shoot` 为 `true`，NPC 将以指定间隔向目标位置射击
- `updateAngle` 参数控制 NPC 是否转向面对目标
- 偏移参数调整相对于 NPC 位置的射击原点

## 相关函数

- [NPC_AimAtPlayer](NPC_AimAtPlayer): 使 NPC 瞄准玩家
- [NPC_StopAim](NPC_StopAim): 停止 NPC 瞄准
- [NPC_IsAiming](NPC_IsAiming): 检查 NPC 是否正在瞄准
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器精度

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 发射武器时调用
