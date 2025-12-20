---
title: NPC_AimAtPlayer
sidebar_label: NPC_AimAtPlayer
description: 使 NPC 瞄准玩家。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

使 NPC 瞄准指定玩家。

| 参数                | 说明                         |
| ------------------- | ---------------------------- |
| npcid               | NPC 的 ID                    |
| playerid            | 要瞄准的玩家 ID              |
| shoot               | 瞄准时是否开火               |
| shootDelay          | 射击间隔（毫秒）             |
| updateAngle         | 是否更新 NPC 的朝向角度      |
| offsetX             | 相对目标位置的 X 偏移量      |
| offsetY             | 相对目标位置的 Y 偏移量      |
| offsetZ             | 相对目标位置的 Z 偏移量      |
| offsetFromX         | 相对 NPC 射击位置的 X 偏移量 |
| offsetFromY         | 相对 NPC 射击位置的 Y 偏移量 |
| offsetFromZ         | 相对 NPC 射击位置的 Z 偏移量 |
| checkInBetweenFlags | 用于碰撞检测的实体检查标志   |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hostile", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        NPC_AimAtPlayer(npcid, playerid, true, 800, true, 0.0, 0.0, 0.8, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
        SendClientMessage(playerid, 0xFF0000FF, "NPC %d 现在对你怀有敌意！", npcid);
        return 1;
    }

    if (!strcmp(cmdtext, "/guard", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        NPC_AimAtPlayer(npcid, playerid, false, 0, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 现在正在守护你。", npcid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 在瞄准时会持续追踪玩家的移动
- 如果目标玩家断开连接或变为无效状态，NPC 将停止瞄准/射击
- 目标偏移参数允许瞄准特定身体部位（头部、躯干等）
- NPC 会随着玩家移动自动更新瞄准
- 使用 `NPC_IsAimingAtPlayer` 检查 NPC 是否正在瞄准特定玩家

## 相关函数

- [NPC_AimAt](NPC_AimAt): 使 NPC 瞄准位置
- [NPC_StopAim](NPC_StopAim): 停止 NPC 瞄准
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): 检查 NPC 是否正在瞄准玩家
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器精度

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对玩家造成伤害时调用
