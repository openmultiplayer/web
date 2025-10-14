---
title: NPC_ClearPath
sidebar_label: NPC_ClearPath
description: 清除 NPC 路径中的所有路径点。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

清除 NPC 路径中的所有路径点，使其变为空路径。

| 名称   | 描述              |
| ------ | ----------------- |
| pathid | 要清除的路径的 ID |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();

    // 向路径添加一些路径点
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.0);

    printf("路径中的路径点: %d", NPC_GetPathPointCount(pathid)); // 3

    // 清除所有路径点
    if (NPC_ClearPath(pathid))
    {
        printf("路径清除成功");
        printf("路径中的路径点: %d", NPC_GetPathPointCount(pathid)); // 0
    }

    return 1;
}
```

## 注意事项

- 此函数从指定路径中移除所有路径点
- 路径本身保持有效并可以重复使用
- 当前正在沿此路径移动的任何 NPC 将停止移动
- 在添加新路径点之前使用此功能重置路径

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加路径点
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): 移除特定路径点
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取路径中的路径点数量

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): 当 NPC 完成路径时调用
