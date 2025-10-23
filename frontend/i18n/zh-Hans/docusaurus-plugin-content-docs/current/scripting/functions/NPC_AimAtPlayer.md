---
title: NPC_AimAtPlayer
sidebar_label: NPC_AimAtPlayer
description: 使 NPC 瞄准玩家。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

使 NPC 瞄准玩家。

| 名称                | 描述                       |
| ------------------- | -------------------------- |
| npcid               | NPC 的 ID                  |
| playerid            | 要瞄准的玩家的 ID          |
| shoot               | 瞄准时是否射击             |
| shootDelay          | 射击间隔（毫秒）           |
| updateAngle         | 是否更新 NPC 的朝向角度    |
| offsetX             | 目标位置的 X 偏移          |
| offsetY             | 目标位置的 Y 偏移          |
| offsetZ             | 目标位置的 Z 偏移          |
| offsetFromX         | NPC 射击位置的 X 偏移      |
| offsetFromY         | NPC 射击位置的 Y 偏移      |
| offsetFromZ         | NPC 射击位置的 Z 偏移      |
| checkInBetweenFlags | 用于碰撞检测的实体检查标志 |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Guard");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 300); // 给予 300 发弹药

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hostile", true))
    {
        // 使 NPC 瞄准并射击玩家
        NPC_AimAtPlayer(0, playerid, true, 800, true, 0.0, 0.0, 0.8, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);

        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 现在对您怀有敌意！");
        return 1;
    }

    if (!strcmp(cmdtext, "/guard", true))
    {
        // 和平追踪模式
        NPC_AimAtPlayer(0, playerid, false, 0, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 现在正在保护您");
        return 1;
    }

    if (!strcmp(cmdtext, "/ceasefire", true))
    {
        NPC_StopAim(0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 停止瞄准");
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 在瞄准时会持续追踪玩家的移动
- 如果目标玩家断开连接或变为无效，NPC 将停止瞄准
- 目标偏移参数允许瞄准特定身体部位（头部、躯干等）
- NPC 会随着玩家移动自动更新瞄准
- 使用 `NPC_IsAimingAtPlayer` 检查 NPC 是否正在瞄准特定玩家

## 相关函数

- [NPC_AimAt](NPC_AimAt): 使 NPC 瞄准位置
- [NPC_StopAim](NPC_StopAim): 停止 NPC 瞄准
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): 检查 NPC 是否正在瞄准玩家
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器精度

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 发射武器时调用
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): 当 NPC 对玩家造成伤害时调用
