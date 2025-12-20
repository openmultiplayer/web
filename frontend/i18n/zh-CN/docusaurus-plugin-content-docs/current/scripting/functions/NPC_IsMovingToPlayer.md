---
title: NPC_IsMovingToPlayer
sidebar_label: NPC_IsMovingToPlayer
description: 检查NPC是否正在向指定玩家移动
tags: ["npc", "玩家", "移动"]
---

<VersionWarn version='omp v1.5.8.3079' />

## 描述

检查 NPC 是否正在向指定玩家移动。

| 参数     | 说明            |
| -------- | --------------- |
| npcid    | NPC 的 ID       |
| playerid | 要检查的玩家 ID |

## 返回值

若 NPC 正在向指定玩家移动则返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmovingtowardme", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isMovingToPlayer = NPC_IsMovingToPlayer(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在朝你移动: %s", npcid, isMovingToPlayer ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 此函数检查 NPC 是否被命令使用 [NPC_MoveToPlayer](NPC_MoveToPlayer) 向指定玩家移动
- 若 NPC 未移动或正在向不同目标移动，则返回 false

## 相关函数

- [NPC_MoveToPlayer](NPC_MoveToPlayer): 使 NPC 向玩家移动
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否正在移动
- [NPC_StopMove](NPC_StopMove): 停止 NPC 移动
- [NPC_GetPlayerMovingTo](NPC_GetPlayerMovingTo): 获取 NPC 正移向的玩家 ID

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成移动时被调用
