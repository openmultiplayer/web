---
title: NPC_GetPathPoint
sidebar_label: NPC_GetPathPoint
description: 获取 NPC 路径中特定点的坐标和停止范围。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpoint", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new pathid = PlayerPatrolPath[playerid];
        if (pathid == INVALID_PATH_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "未指定巡逻路径。");

        new pointindex = NPC_GetCurrentPathPointIndex(npcid);
        new Float:x, Float:y, Float:z, Float:stopRange;

        if (!NPC_GetPathPoint(pathid, pointindex, x, y, z, stopRange))
            return SendClientMessage(playerid, 0xFFFF00FF, "无法获取路径点。");

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 路径点 %d: %.2f, %.2f, %.2f", npcid, pointindex, x, y, z);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 所有坐标和停止范围参数都通过引用传递
- 点的索引从 0 开始
- 若路径或点索引无效则返回 false

## 相关函数

- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_RemovePointFromPath](NPC_RemovePointFromPath): 从路径移除点
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取点的数量
- [NPC_IsValidPath](NPC_IsValidPath): 检查路径是否有效

## 相关回调

- [../callbacks/OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成路径时调用
