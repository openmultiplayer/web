---
title: NPC_GetPathPoint
sidebar_label: NPC_GetPathPoint
description: 获取 NPC 路径中特定点的坐标和停止范围。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 路径中特定点的坐标和停止范围。

| 参数        | 说明                   |
| ----------- | ---------------------- |
| pathid      | 路径的 ID              |
| point_index | 点的索引（从 0 开始）  |
| &x          | 用于存储 X 坐标的变量  |
| &y          | 用于存储 Y 坐标的变量  |
| &z          | 用于存储 Z 坐标的变量  |
| &stopRange  | 用于存储停止范围的变量 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new pathid = NPC_CreatePath();

    // 添加一些点
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 1.0);
    NPC_AddPointToPath(pathid, 1968.33, 1353.12, 15.36, 2.0);
    NPC_AddPointToPath(pathid, 1978.33, 1363.12, 15.36, 1.5);

    // 获取点0的信息
    new Float:x, Float:y, Float:z, Float:stopRange;
    if (NPC_GetPathPoint(pathid, 0, x, y, z, stopRange))
    {
        printf("点0: %.2f, %.2f, %.2f (停止范围: %.2f)", x, y, z, stopRange);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showpathpoints", true))
    {
        new pathid = 0; // 假设为第一个路径
        if (NPC_IsValidPath(pathid))
        {
            new pointCount = NPC_GetPathPointCount(pathid);

            new msg[128];
            format(msg, sizeof(msg), "路径%d有%d个点:", pathid, pointCount);
            SendClientMessage(playerid, 0x00FF00FF, msg);

            for (new i = 0; i < pointCount; i++)
            {
                new Float:x, Float:y, Float:z, Float:stopRange;
                if (NPC_GetPathPoint(pathid, i, x, y, z, stopRange))
                {
                    format(msg, sizeof(msg), "点%d: %.1f, %.1f, %.1f (范围: %.1f)",
                        i, x, y, z, stopRange);
                    SendClientMessage(playerid, 0xFFFFFFFF, msg);
                }
            }
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 所有坐标和停止范围参数都通过引用传递
- 点的索引从 0 开始
- 若路径或点索引无效则返回 false
- 使用此函数检查或修改路径配置

## 相关函数

- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): 从路径移除点
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取点的数量
- [NPC_IsValidPath](NPC_IsValidPath): 检查路径是否有效

## 相关回调

- [../callbacks/OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
