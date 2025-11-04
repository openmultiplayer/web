---
title: NPC_StopMove
sidebar_label: NPC_StopMove
description: 停止 NPC 的移动。
tags: ["npc", "移动"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

停止 NPC 向当前目标的移动。

| 参数  | 说明        |
| ----- | ----------- |
| npcid | NPC 的 ID。 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("Walker");
    NPC_Spawn(npcid);

    // 开始移动
    NPC_Move(npcid, 1958.33, 1343.12, 15.36, NPC_MOVE_TYPE_WALK);

    // 5 秒后停止移动
    SetTimerEx("StopNPCMovement", 5000, false, "i", npcid);

    return 1;
}

forward StopNPCMovement(npcid);
public StopNPCMovement(npcid)
{
    NPC_StopMove(npcid);
    printf("NPC %d 已停止移动", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/freeze", true))
    {
        // 停止 NPC 0 的移动
        NPC_StopMove(0);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 移动已停止");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- 这会让 NPC 在当前位置停止。
- 如果 NPC 没有在移动，此函数无效。
- NPC 将保持在停止的位置，直到收到新的移动命令。
- 使用 [NPC_IsMoving](NPC_IsMoving) 检查 NPC 当前是否在移动。

## 相关函数

- [NPC_Move](NPC_Move): 让 NPC 移动到位置。
- [NPC_IsMoving](NPC_IsMoving): 检查 NPC 是否在移动。
- [NPC_MoveByPath](NPC_MoveByPath): 让 NPC 沿路径移动。
- [NPC_SetPos](NPC_SetPos): 立即设置 NPC 位置。

## 相关回调

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用。
