---
title: NPC_GetNodeInfo
sidebar_label: NPC_GetNodeInfo
description: 获取 NPC 节点的信息。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 节点的信息，包括车辆、行人导航数据。

| 参数      | 说明                       |
| --------- | -------------------------- |
| nodeid    | 节点的 ID                  |
| &vehnodes | 用于存储车辆节点数量的变量 |
| &pednodes | 用于存储行人节点数量的变量 |
| &navinode | 用于存储导航节点信息的变量 |

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodeinfo ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的节点 ID。必须在 0 到 63 之间。");

        new vehnodes, pednodes, navinode;
        new bool:success = NPC_GetNodeInfo(nodeid, vehnodes, pednodes, navinode);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "节点 %d 信息 - 车辆节点：%d，行人节点：%d，导航节点：%d", nodeid, vehnodes, pednodes, navinode);
        else
            SendClientMessage(playerid, 0xFF0000FF, "获取节点 %d 信息失败", nodeid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 在获取信息前必须使用 `NPC_OpenNode` 打开节点
- 车辆节点用于车辆导航路径
- 行人节点用于步行路径
- 所有计数参数都通过引用传递

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点以供使用
- [NPC_CloseNode](NPC_CloseNode): 关闭节点
- [NPC_IsNodeOpen](NPC_IsNodeOpen): 检查节点是否打开
- [NPC_GetNodeType](NPC_GetNodeType): 获取节点类型

## 相关回调

- [../callbacks/OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
- [../callbacks/OnNPCChangeNode](../callbacks/OnNPCChangeNode): NPC 更换节点时调用
