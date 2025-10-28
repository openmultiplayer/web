---
title: NPC_SetNodePoint
sidebar_label: NPC_SetNodePoint
description: 在 NPC 节点中设置一个点。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

为 NPC 节点设置当前点索引。

| 参数    | 说明           |
| ------- | -------------- |
| nodeid  | 节点的 ID      |
| pointid | 节点中的点索引 |

## 返回值

如果点设置成功则返回`true`，否则返回`false`。

## 示例

```c
new g_PatrolNode = -1;

public OnGameModeInit()
{
    // 打开节点用于巡逻路线
    g_PatrolNode = NPC_OpenNode(1);

    if (g_PatrolNode != -1)
    {
        // 创建巡逻周界
        CreatePatrolRoute();

        printf("巡逻路线已创建，使用节点 %d", g_PatrolNode);
    }

    return 1;
}

CreatePatrolRoute()
{
    if (g_PatrolNode == -1) return;

    // 在区域周围设置巡逻点
    NPC_SetNodePoint(g_PatrolNode, 0, 1958.33, 1343.12, 15.36);  // 起点
    NPC_SetNodePoint(g_PatrolNode, 1, 2058.33, 1343.12, 15.36);  // 东
    NPC_SetNodePoint(g_PatrolNode, 2, 2058.33, 1443.12, 15.36);  // 东北
    NPC_SetNodePoint(g_PatrolNode, 3, 1958.33, 1443.12, 15.36);  // 北
    NPC_SetNodePoint(g_PatrolNode, 4, 1958.33, 1343.12, 15.36);  // 回到起点

    printf("巡逻路线已配置，包含 5 个点");
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/addwaypoint", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        if (g_PatrolNode != -1)
        {
            new pointCount = NPC_GetNodePointCount(g_PatrolNode);

            if (NPC_SetNodePoint(g_PatrolNode, pointCount, x, y, z))
            {
                new msg[64];
                format(msg, sizeof(msg), "已在您的位置添加路径点 %d", pointCount);
                SendClientMessage(playerid, 0x00FF00FF, msg);
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "添加路径点失败");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "没有可用的巡逻节点");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/customroute", true))
    {
        // 在玩家周围创建自定义路线
        new Float:px, Float:py, Float:pz;
        GetPlayerPos(playerid, px, py, pz);

        new customNode = NPC_OpenNode(10);
        if (customNode != -1)
        {
            // 在玩家周围创建方形路线
            NPC_SetNodePoint(customNode, 0, px - 20.0, py - 20.0, pz);  // 西南
            NPC_SetNodePoint(customNode, 1, px + 20.0, py - 20.0, pz);  // 东南
            NPC_SetNodePoint(customNode, 2, px + 20.0, py + 20.0, pz);  // 东北
            NPC_SetNodePoint(customNode, 3, px - 20.0, py + 20.0, pz);  // 西北
            NPC_SetNodePoint(customNode, 4, px - 20.0, py - 20.0, pz);  // 回到起点

            // 让 NPC 开始自定义路线
            NPC_PlayNode(0, customNode, NPC_MOVE_TYPE_WALK);

            SendClientMessage(playerid, 0x00FF00FF, "已在您的位置周围创建自定义路线");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/nodeinfo", true))
    {
        if (g_PatrolNode != -1)
        {
            new pointCount = NPC_GetNodePointCount(g_PatrolNode);
            new msg[64];
            format(msg, sizeof(msg), "巡逻节点已配置 %d 个点", pointCount);
            SendClientMessage(playerid, 0xFFFF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "没有可用的巡逻节点");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 在设置点之前必须打开节点
- 点索引通常从 0 开始
- 使用 NPC_GetNodePointPosition 检索点坐标
- 点定义了 NPC 的导航路径

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点进行编辑
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): 获取点坐标
- [NPC_GetNodePointCount](NPC_GetNodePointCount): 获取点数量
- [NPC_UpdateNodePoint](NPC_UpdateNodePoint): 更新现有点

## 相关回调

_此函数不会触发任何特定的回调。_
