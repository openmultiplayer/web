---
title: NPC_GetPlayerMovingTo
sidebar_label: NPC_GetPlayerMovingTo
description: 获取NPC当前正移向的玩家ID
tags: ["npc", "玩家", "移动"]
---

<VersionWarn version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前正移向的玩家 ID。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回正移向的玩家 ID，若未向任何玩家移动则返回 `INVALID_PLAYER_ID`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkwhonpcmoving", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new targetid = NPC_GetPlayerMovingTo(npcid);

        if (targetid == INVALID_PLAYER_ID)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 没有向任何玩家移动", npcid);
        else
        {
            new targetName[MAX_PLAYER_NAME];
            GetPlayerName(targetid, targetName, sizeof(targetName));
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在向玩家 %s（ID %d）移动", npcid, targetName, targetid);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 使用 [NPC_MoveToPlayer](NPC_MoveToPlayer) 向玩家移动，则返回玩家 ID
- 若 NPC 未向任何玩家移动，则返回 `INVALID_PLAYER_ID`
- 这与使用 [NPC_Move](NPC_Move) 向固定位置移动不同

## 相关函数

- [NPC_MoveToPlayer](NPC_MoveToPlayer): 使 NPC 向玩家移动
- [NPC_IsMovingToPlayer](NPC_IsMovingToPlayer): 检查 NPC 是否向特定玩家移动
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否正在移动
- [NPC_GetPlayerAimingAt](NPC_GetPlayerAimingAt): 获取 NPC 正在瞄准的玩家

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成移动时被调用
