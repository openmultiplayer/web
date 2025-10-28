---
title: NPC_GetNodePointPosition
sidebar_label: NPC_GetNodePointPosition
description: 获取 NPC 节点中当前点的位置。
tags: ["npc", "节点", "导航", "位置"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 节点中当前点的位置。

| 参数   | 说明                  |
| ------ | --------------------- |
| nodeid | 节点的 ID             |
| &x     | 用于存储 X 坐标的变量 |
| &y     | 用于存储 Y 坐标的变量 |
| &z     | 用于存储 Z 坐标的变量 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    // 首先打开一个节点
    if (NPC_OpenNode(1))
    {
        // 设置到特定点
        if (NPC_SetNodePoint(1, 0))
        {
            new Float:x, Float:y, Float:z;
            if (NPC_GetNodePointPosition(1, x, y, z))
            {
                printf("节点1，点0位置: %.2f, %.2f, %.2f", x, y, z);
            }
        }
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/gotonode", true))
    {
        new nodeid = 1; // 示例节点
        if (NPC_IsNodeOpen(nodeid))
        {
            new Float:x, Float:y, Float:z;
            if (NPC_GetNodePointPosition(nodeid, x, y, z))
            {
                SetPlayerPos(playerid, x, y, z + 1.0);

                new msg[128];
                format(msg, sizeof(msg), "已传送到节点%d位置", nodeid);
                SendClientMessage(playerid, 0x00FF00FF, msg);
            }
        }
        return 1;
    }
    return 0;
}

forward ShowNodePath(nodeid);
public ShowNodePath(nodeid)
{
    if (NPC_IsNodeOpen(nodeid))
    {
        new pointCount = NPC_GetNodePointCount(nodeid);

        for (new i = 0; i < pointCount; i++)
        {
            if (NPC_SetNodePoint(nodeid, i))
            {
                new Float:x, Float:y, Float:z;
                if (NPC_GetNodePointPosition(nodeid, x, y, z))
                {
                    printf("节点%d点%d: %.2f, %.2f, %.2f", nodeid, i, x, y, z);
                }
            }
        }
    }
}
```

## 注意事项

- 必须首先使用 `NPC_OpenNode` 打开节点
- 在获取位置前必须使用 `NPC_SetNodePoint` 设置一个点
- 所有坐标参数都通过引用传递
- 使用此函数可创建视觉标记或传送到节点位置

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点以供使用
- [NPC_SetNodePoint](NPC_SetNodePoint): 设置当前节点点
- [NPC_GetNodePointCount](NPC_GetNodePointCount): 获取点的数量
- [NPC_PlayNode](NPC_PlayNode): 使 NPC 播放节点

## 相关回调

- [../callbacks/OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): NPC 完成节点点时调用
