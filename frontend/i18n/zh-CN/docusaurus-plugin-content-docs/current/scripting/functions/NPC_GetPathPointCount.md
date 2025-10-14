---
title: NPC_GetPathPointCount
sidebar_label: NPC_GetPathPointCount
description: 获取NPC路径中点的数量。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 路径中点的数量。

| 名称   | 描述      |
| ------ | --------- |
| pathid | 路径的 ID |

## 返回值

返回路径中点的数量，若路径无效则返回 0。

## 示例

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();
    printf("初始点数量: %d", NPC_GetPathPointCount(pathid)); // 0

    // 添加一些点
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.0);

    printf("添加后的点数量: %d", NPC_GetPathPointCount(pathid)); // 3

    // 移除一个点
    NPC_RemovePointFromPath(pathid, 1);
    printf("移除后的点数量: %d", NPC_GetPathPointCount(pathid)); // 2

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pathinfo", true))
    {
        new totalPaths = NPC_GetPathCount();

        new msg[128];
        format(msg, sizeof(msg), "服务器总共有%d个路径", totalPaths);
        SendClientMessage(playerid, 0x00FF00FF, msg);

        return 1;
    }

    if (!strcmp(cmdtext, "/checkpath", true))
    {
        new pathid = 0; // 检查路径0
        new points = NPC_GetPathPointCount(pathid);

        new msg[64];
        format(msg, sizeof(msg), "路径0有%d个点", points);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    return 0;
}

forward ValidatePathBeforeUse(pathid);
public ValidatePathBeforeUse(pathid)
{
    new pointCount = NPC_GetPathPointCount(pathid);

    if (pointCount < 2)
    {
        printf("警告: 路径%d只有%d个点，移动需要至少2个点",
            pathid, pointCount);
        return 0;
    }

    printf("路径%d有效，有%d个点", pathid, pointCount);
    return 1;
}
```

## 注意事项

- 若路径无效或为空则返回 0
- 路径至少需要 2 个点才能用于 NPC 移动
- 在将路径分配给 NPC 之前使用此函数验证路径
- 点的索引范围从 0 到（数量-1）

## 相关函数

- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): 从路径移除点
- [NPC_GetPathPoint](NPC_GetPathPoint): 获取特定点数据
- [NPC_ClearPath](NPC_ClearPath): 从路径移除所有点

## 相关回调

- [../callbacks/OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
