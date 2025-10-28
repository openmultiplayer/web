---
title: NPC_GetNodePointCount
sidebar_label: NPC_GetNodePointCount
description: 获取 NPC 节点中点的数量。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 节点中点的数量。

| 参数   | 说明      |
| ------ | --------- |
| nodeid | 节点的 ID |

## 返回值

返回节点中点的数量，若节点无效则返回 0。

## 示例

```c
public OnGameModeInit()
{
    // 首先打开一个节点
    if (NPC_OpenNode(1))
    {
        new pointCount = NPC_GetNodePointCount(1);
        printf("节点1有%d个点", pointCount);

        // 设置到特定点
        if (pointCount > 0)
        {
            NPC_SetNodePoint(1, 0); // 设置到第一个点
        }
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/nodepointcounts", true))
    {
        for (new nodeid = 0; nodeid < 10; nodeid++)
        {
            if (NPC_IsNodeOpen(nodeid))
            {
                new pointCount = NPC_GetNodePointCount(nodeid);

                new msg[128];
                format(msg, sizeof(msg), "节点%d有%d个点", nodeid, pointCount);
                SendClientMessage(playerid, 0xFFFFFFFF, msg);
            }
        }

        return 1;
    }
    return 0;
}

forward CheckNodeProgress(npcid, nodeid);
public CheckNodeProgress(npcid, nodeid)
{
    if (NPC_IsPlayingNode(npcid))
    {
        new totalPoints = NPC_GetNodePointCount(nodeid);
        printf("NPC %d正在导航节点%d，共有%d个点",
            npcid, nodeid, totalPoints);
    }
}
```

## 注意事项

- 若节点无效或未打开则返回 0
- 点的数量表示节点内的导航路径点
- 在设置点之前使用此函数验证点索引
- 点的索引范围从 0 到（数量-1）

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点以供使用
- [NPC_SetNodePoint](NPC_SetNodePoint): 设置当前节点点
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): 获取点的位置
- [NPC_IsNodeOpen](NPC_IsNodeOpen): 检查节点是否打开

## 相关回调

- [../callbacks/OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): NPC 完成节点点时调用
- [../callbacks/OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
