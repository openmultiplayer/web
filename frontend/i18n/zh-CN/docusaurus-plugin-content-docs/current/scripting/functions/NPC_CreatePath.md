---
title: NPC_CreatePath
sidebar_label: NPC_CreatePath
description: 创建新的 NPC 路径。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

创建一个可用于 NPC 导航的新路径。

## 返回值

返回创建的路径 ID。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/createpatrol", true))
    {
        new pathid = NPC_CreatePath();
        g_PatrolPath = pathid;

        // 如果需要，你可以在这里向路径添加点
        // NPC_AddPointToPath(g_PatrolPath, x, y, z, 1.5)
        // NPC_AddPointToPath(g_PatrolPath, x1, y1, z1, 1.5)
        // NPC_AddPointToPath(g_PatrolPath, x2, y2, z2, 1.5)

        SendClientMessage(playerid, 0x00FF00FF, "已创建巡逻路径 %d", g_PatrolPath);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 路径始终创建为空，使用 `NPC_AddPointToPath` 添加路径点
- 多个 NPC 可以同时使用同一路径
- 路径在使用 `NPC_DestroyPath` 销毁之前保持有效

## 相关函数

- [NPC_DestroyPath](NPC_DestroyPath): 销毁路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加路径点
- [NPC_MoveByPath](NPC_MoveByPath): 使 NPC 沿路径移动
- [NPC_GetPathCount](NPC_GetPathCount): 获取路径总数

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
