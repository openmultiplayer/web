---
title: NPC_RemovePointFromPath
sidebar_label: NPC_RemovePointFromPath
description: 从 NPC 路径中移除路径点。
tags: ["npc", "路径"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

从 NPC 路径中移除路径点。

| 名称        | 描述             |
| ----------- | ---------------- |
| pathid      | 路径的 ID        |
| point_index | 要移除的点的索引 |

## 返回值

成功时返回`true`，失败时返回`false`。

## 示例

```c
new g_PatrolPath = -1;

public OnGameModeInit()
{
    // 创建巡逻路径
    g_PatrolPath = NPC_CreatePath();

    if (NPC_IsValidPath(g_PatrolPath))
    {
        // 添加巡逻点
        NPC_AddPointToPath(g_PatrolPath, 1958.33, 1343.12, 15.36, 1.0);
        NPC_AddPointToPath(g_PatrolPath, 1968.33, 1353.12, 15.36, 2.0);
        NPC_AddPointToPath(g_PatrolPath, 1978.33, 1363.12, 15.36, 1.5);
        NPC_AddPointToPath(g_PatrolPath, 1988.33, 1373.12, 15.36, 2.0);

        printf("巡逻路径已创建，包含 %d 个点", NPC_GetPathPointCount(g_PatrolPath));
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/removepoint", true))
    {
        if (NPC_IsValidPath(g_PatrolPath))
        {
            new pointCount = NPC_GetPathPointCount(g_PatrolPath);

            if (pointCount > 2 && NPC_RemovePointFromPath(g_PatrolPath, 1))
            {
                new msg[64];
                format(msg, sizeof(msg), "已移除点 1。路径现在有 %d 个点",
                    NPC_GetPathPointCount(g_PatrolPath));
                SendClientMessage(playerid, 0x00FF00FF, msg);
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "无法移除点");
            }
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/editpath", true))
    {
        // 用玩家位置替换最后一个点
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new pointCount = NPC_GetPathPointCount(g_PatrolPath);
        if (pointCount > 1)
        {
            NPC_RemovePointFromPath(g_PatrolPath, pointCount - 1);
            NPC_AddPointToPath(g_PatrolPath, x, y, z, 1.5);

            SendClientMessage(playerid, 0x00FF00FF, "已将路径终点更新为您的位置");
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
- 适用于动态路径编辑和优化

## 相关函数

- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点
- [NPC_ClearPath](NPC_ClearPath): 清除路径中的所有点
- [NPC_GetPathPointCount](NPC_GetPathPointCount): 获取路径中的点数
- [NPC_GetPathPoint](NPC_GetPathPoint): 获取路径点信息

## 相关回调

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): NPC 完成沿路径移动时调用
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成任何移动时调用
