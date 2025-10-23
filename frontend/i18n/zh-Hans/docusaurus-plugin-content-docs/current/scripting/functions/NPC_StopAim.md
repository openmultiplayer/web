---
title: NPC_StopAim
sidebar_label: NPC_StopAim
description: 停止 NPC 的瞄准状态。
tags: ["npc", "武器", "瞄准"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

停止 NPC 对任何目标的瞄准。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Marksman");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_SNIPER);
    NPC_SetAmmo(npcid, 50); // 给予 50 发弹药

    // 开始瞄准目标位置
    NPC_AimAt(npcid, 2000.0, 1500.0, 20.0, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);

    // 15 秒后自动停火
    SetTimerEx("CeaseFire", 15000, false, "i", npcid);

    return 1;
}

forward CeaseFire(npcid);
public CeaseFire(npcid)
{
    if (NPC_IsAiming(npcid))
    {
        NPC_StopAim(npcid);
        printf("NPC %d 已停火并停止瞄准", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ceasefire", true))
    {
        if (NPC_IsAiming(0))
        {
            NPC_StopAim(0);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已停火");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 没有在瞄准");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/standdown", true))
    {
        // 完整的解除战斗程序
        if (NPC_IsShooting(0))
        {
            NPC_StopShoot(0);
        }

        if (NPC_IsAiming(0))
        {
            NPC_StopAim(0);
        }

        // 回到被动姿态
        NPC_SetWeapon(0, WEAPON_FIST);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已解除战斗状态");
        return 1;
    }

    if (!strcmp(cmdtext, "/combatmode", true))
    {
        // 在战斗和和平模式之间切换
        if (NPC_IsAiming(0))
        {
            // 切换到和平模式
            NPC_StopAim(0);
            NPC_SetWeapon(0, WEAPON_FIST);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已切换到和平模式");
        }
        else
        {
            // 切换到战斗模式
            NPC_SetWeapon(0, WEAPON_M4);
            NPC_SetAmmo(0, 300); // 给予 300 发弹药

            new Float:px, Float:py, Float:pz;
            GetPlayerPos(playerid, px, py, pz);
            NPC_AimAt(0, px, py, pz + 1.0, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);

            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 已切换到战斗模式");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 如果 NPC 同时在瞄准和射击，这将停止两者
- NPC 在停止瞄准后将回到正常姿态
- 使用此函数来控制 NPC 的战斗行为
- 如果 NPC 当前没有瞄准，则此函数无效

## 相关函数

- [NPC_AimAt](NPC_AimAt): 让 NPC 瞄准位置
- [NPC_AimAtPlayer](NPC_AimAtPlayer): 让 NPC 瞄准玩家
- [NPC_IsAiming](NPC_IsAiming): 检查 NPC 是否在瞄准
- [NPC_Shoot](NPC_Shoot): 让 NPC 射击

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): NPC 开火时调用
