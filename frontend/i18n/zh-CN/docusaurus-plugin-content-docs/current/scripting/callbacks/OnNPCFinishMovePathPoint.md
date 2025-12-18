---
title: OnNPCFinishMovePathPoint
sidebar_label: OnNPCFinishMovePathPoint
description: 当NPC完成路径中特定点的移动时被调用
tags: ["npc", "移动", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

此回调函数在 NPC 完成路径中特定点的移动时被调用。

| 参数    | 说明                       |
| ------- | -------------------------- |
| npcid   | 完成路径点移动的 NPC 的 ID |
| pathid  | 正在遵循的路径的 ID        |
| pointid | 已到达的路径点的索引       |

## 示例

```c
public OnNPCFinishMovePathPoint(npcid, pathid, pointid)
{
    // 查找所有追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 到达路径 %d 上的点 %d", npcid, pointid, pathid);
        }
    }
    return 1;
}
```

## 注意事项

- 此回调函数会为路径中的每个点触发
- 使用 [OnNPCFinishMovePath](OnNPCFinishMovePath) 来检测整个路径何时完成
- NPC 必须使用 [NPC_MoveByPath](../functions/NPC_MoveByPath) 沿路径移动

## 相关函数

- [NPC_MoveByPath](../functions/NPC_MoveByPath): 使 NPC 遵循路径移动
- [NPC_CreatePath](../functions/NPC_CreatePath): 创建新路径
- [NPC_AddPointToPath](../functions/NPC_AddPointToPath): 向路径添加点
- [NPC_GetCurrentPathPointIndex](../functions/NPC_GetCurrentPathPointIndex): 获取当前路径点

## 相关回调

- [OnNPCFinishMovePath](OnNPCFinishMovePath): 当 NPC 完成整个路径时被调用
- [OnNPCFinishMove](OnNPCFinishMove): 当 NPC 完成任何移动时被调用
