---
title: NPC_GetPlayerAimingAt
sidebar_label: NPC_GetPlayerAimingAt
description: 获取NPC当前瞄准的玩家ID
tags: ["npc", "玩家", "瞄准", "武器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前瞄准的玩家 ID。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回被瞄准的玩家 ID，若未瞄准任何玩家则返回 `INVALID_PLAYER_ID`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkwhonpcaiming", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new targetid = NPC_GetPlayerAimingAt(npcid);

        if (targetid == INVALID_PLAYER_ID)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 没有瞄准任何玩家", npcid);
        else
        {
            new targetName[MAX_PLAYER_NAME];
            GetPlayerName(targetid, targetName, sizeof(targetName));
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在瞄准玩家 %s（ID %d）", npcid, targetName, targetid);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 使用 [NPC_AimAtPlayer](NPC_AimAtPlayer) 瞄准玩家，则返回玩家 ID
- 若 NPC 未瞄准任何玩家，则返回 `INVALID_PLAYER_ID`

## 相关函数

- [NPC_AimAtPlayer](NPC_AimAtPlayer): 使 NPC 瞄准玩家
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): 检查 NPC 是否瞄准特定玩家
- [NPC_IsAiming](NPC_IsAiming): 检查 NPC 是否正在瞄准
- [NPC_GetPlayerMovingTo](NPC_GetPlayerMovingTo): 获取 NPC 正在移动向的玩家

## 相关回调

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): 当 NPC 开火时被调用
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): 当 NPC 对玩家造成伤害时被调用
