---
title: NPC_GetCurrentPathPointIndex
sidebar_label: NPC_GetCurrentPathPointIndex
description: 获取 NPC 当前正在移动的路径点索引。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前正在移动的路径点索引。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 当前正在移动的路径点索引。

## 示例

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.0);

    new npcid = NPC_Create("PathWalker");
    NPC_Spawn(npcid);
    NPC_MoveByPath(npcid, pathid, NPC_MOVE_TYPE_WALK);

    SetTimer("CheckPathProgress", 2000, true);

    return 1;
}

forward CheckPathProgress();
public CheckPathProgress()
{
    new pointIndex = NPC_GetCurrentPathPointIndex(0);
    if (pointIndex != -1)
    {
        printf("NPC 0 正在移动到路径点 %d", pointIndex);
    }
}
```

## 注意事项

- 如果 NPC 没有跟随路径，返回 -1
- 索引从第一个点的 0 开始
- 这表示 NPC 当前正在移动的点，不一定是已到达的点
- 用于跟踪 NPC 沿路径的进度

## 相关函数

- [NPC_MoveByPath](NPC_MoveByPath): 使 NPC 跟随路径
- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取路径中的总点数

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): 当 NPC 完成路径时调用
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): 当 NPC 完成移动时调用
