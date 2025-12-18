---
title: NPC_RemovePointFromPath
sidebar_label: NPC_RemovePointFromPath
description: 从 NPC 路径中移除路径点。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

从 NPC 路径中移除路径点。

| 参数        | 说明             |
| ----------- | ---------------- |
| pathid      | 路径的 ID        |
| point_index | 要移除的点的索引 |

## 返回值

成功时返回`true`，失败时返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strncmp(cmdtext, "/removepatrolpoint ", 19, true))
    {
        if (!NPC_IsValidPath(PlayerPatrolPath[playerid]))
        {
            SendClientMessage(playerid, 0xFF0000FF, "没有有效的巡逻路径。先使用/createpatrol。");
            return 1;
        }

        new pointIndex = strval(cmdtext[19]);
        new totalPoints = NPC_GetPathPointCount(PlayerPatrolPath[playerid]);

        if (pointIndex < 0 || pointIndex >= totalPoints)
        {
            SendClientMessage(playerid, 0xFF0000FF, "无效的点索引。有效范围：0-%d", totalPoints - 1);
            return 1;
        }

        if (NPC_RemovePointFromPath(PlayerPatrolPath[playerid], pointIndex))
        {
            SendClientMessage(playerid, 0x00FF00FF, "从路径 %d 中移除点 %d（现在有 %d 个点）", pointIndex, PlayerPatrolPath[playerid], totalPoints - 1);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "未能从路径中移除点%d", pointIndex);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 点索引从 0 开始
- 移除点会将所有后续点的索引向下移动一位
- 如果指定的索引超出范围，函数将返回`false`
- 不能从无效路径中移除点

## 相关函数

- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_ClearPath](NPC_ClearPath): 清除路径中的所有点
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取路径中的点数
- [NPC_GetPathPoint](NPC_GetPathPoint): 获取路径点信息

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成沿路径移动时调用
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成任何移动时调用
