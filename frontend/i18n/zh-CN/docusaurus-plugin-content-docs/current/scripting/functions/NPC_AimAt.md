---
title: NPC_AimAt
sidebar_label: NPC_AimAt
description: 使 NPC 瞄准特定位置。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

使 NPC 瞄准指定的坐标位置。

| 参数                | 说明                         |
| ------------------- | ---------------------------- |
| npcid               | NPC 的 ID                    |
| Float:pointX        | 瞄准目标的 X 坐标            |
| Float:pointY        | 瞄准目标的 Y 坐标            |
| Float:pointZ        | 瞄准目标的 Z 坐标            |
| bool:shoot          | 瞄准时是否开火               |
| shootDelay          | 射击间隔（毫秒）             |
| bool:updateAngle    | 是否更新 NPC 的朝向角度      |
| Float:offsetFromX   | 相对 NPC 射击位置的 X 偏移量 |
| Float:offsetFromY   | 相对 NPC 射击位置的 Y 偏移量 |
| Float:offsetFromZ   | 相对 NPC 射击位置的 Z 偏移量 |
| checkInBetweenFlags | 用于碰撞检测的实体检查标志   |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/aim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_AimAt(npcid, x, y, z, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在瞄准你的位置。", npcid);
        return 1;
    }

    if (!strcmp(cmdtext, "/aimfire", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_AimAt(npcid, x, y, z, true, 800, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在向你的位置开火。", npcid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 将持续瞄准指定位置，直到调用 `NPC_StopAim` 为止
- 如果 `shoot` 为 `true`，NPC 将以指定间隔向目标位置开火
- `updateAngle` 参数控制 NPC 是否转向面对目标
- 偏移参数用于调整相对 NPC 位置的射击起始点

## 相关函数

- [NPC_AimAtPlayer](NPC_AimAtPlayer): 使 NPC 瞄准玩家
- [NPC_StopAim](NPC_StopAim): 停止 NPC 瞄准
- [NPC_IsAiming](NPC_IsAiming): 检查 NPC 是否正在瞄准
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): 设置武器精度

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
