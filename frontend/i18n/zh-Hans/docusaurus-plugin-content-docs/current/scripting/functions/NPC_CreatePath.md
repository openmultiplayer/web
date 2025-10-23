---
title: NPC_CreatePath
sidebar_label: NPC_CreatePath
description: 创建新的 NPC 路径。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

创建可用于 NPC 导航的新路径。

## 返回值

返回创建的路径的 ID。

## 示例

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();
    printf("路径已创建，ID: %d", pathid);

    // 向路径添加路径点
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.0);

    // 使 NPC 沿此路径移动
    new npcid = NPC_Create("PathFollower");
    NPC_Spawn(npcid);
    NPC_MoveByPath(npcid, pathid, NPC_MOVE_TYPE_WALK);

    return 1;
}
```

## 注意事项

- 路径创建时为空 - 使用 `NPC_AddPointToPath` 添加路径点
- 多个 NPC 可以同时使用同一路径
- 路径在使用 `NPC_DestroyPath` 销毁之前保持有效
- 同时可以存在的路径数量有最大限制

## 相关函数

- [NPC_DestroyPath](NPC_DestroyPath): 销毁路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加路径点
- [NPC_MoveByPath](NPC_MoveByPath): 使 NPC 沿路径移动
- [NPC_GetPathCount](NPC_GetPathCount): 获取路径总数

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): 当 NPC 完成路径时调用
