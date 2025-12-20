---
title: NPC_GetNodePointCount
sidebar_label: NPC_GetNodePointCount
description: 获取 NPC 节点中点的数量。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 节点中点的数量。

| 参数   | 说明      |
| ------ | --------- |
| nodeid | 节点的 ID |

## 返回值

返回节点中点的数量，若节点无效则返回 0。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepointcount ", true, 21))
    {
        new nodeid = strval(cmdtext[21]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的节点 ID。必须在 0 到 63 之间。");

        new count = NPC_GetNodePointCount(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "节点 %d 有 %d 个点", nodeid, count);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若节点无效或未打开则返回 0
- 点的数量表示节点内的导航路径点

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点以供使用
- [NPC_SetNodePoint](NPC_SetNodePoint): 设置当前节点点
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): 获取点的位置
- [NPC_IsNodeOpen](NPC_IsNodeOpen): 检查节点是否打开

## 相关回调

- [../callbacks/OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): NPC 完成节点点时调用
- [../callbacks/OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
