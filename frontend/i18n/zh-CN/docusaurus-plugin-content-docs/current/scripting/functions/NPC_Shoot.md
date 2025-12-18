---
title: NPC_Shoot
sidebar_label: NPC_Shoot
description: 让 NPC 开火射击。
tags: ["npc", "武器", "射击", "战斗"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

让 NPC 开火射击。

| 参数                | 说明                                       |
| ------------------- | ------------------------------------------ |
| npcid               | NPC 的 ID                                  |
| weapon              | 用于射击的武器 ID                          |
| hitId               | 被射击目标实体的 ID                        |
| hitType             | 被击中的实体类型（玩家、NPC、车辆等）      |
| endPointX           | 子弹终点的 X 坐标                          |
| endPointY           | 子弹终点的 Y 坐标                          |
| endPointZ           | 子弹终点的 Z 坐标                          |
| offsetX             | 距离击中点的 X 偏移                        |
| offsetY             | 距离击中点的 Y 偏移                        |
| offsetZ             | 距离击中点的 Z 偏移                        |
| isHit               | 射击是否实际击中目标                       |
| checkInBetweenFlags | 实体检查标志（默认：NPC_ENTITY_CHECK_ALL） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcshoot", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new weapon = NPC_GetWeapon(npcid);
        NPC_Shoot(npcid, WEAPON:weapon, playerid, 1, x, y, z, 0.0, 0.0, 0.0, true, NPC_ENTITY_CHECK_ALL);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 向你开了一枪。", npcid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 在射击前必须使用 `NPC_SetWeapon` 设置武器
- 使用 `isHit = false` 进行警告射击或压制火力
- `checkInBetweenFlags` 参数决定哪些实体会阻挡射击

## 相关函数

- [NPC_SetWeapon](NPC_SetWeapon): 设置 NPC 武器
- [NPC_GetWeapon](NPC_GetWeapon): 获取 NPC 当前武器
- [NPC_IsShooting](NPC_IsShooting): 检查 NPC 是否正在射击
- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准位置

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): NPC 对其他实体造成伤害时调用
