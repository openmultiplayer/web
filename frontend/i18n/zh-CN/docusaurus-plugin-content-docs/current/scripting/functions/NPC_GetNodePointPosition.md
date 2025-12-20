---
title: NPC_GetNodePointPosition
sidebar_label: NPC_GetNodePointPosition
description: 获取 NPC 节点中当前点的位置。
tags: ["npc", "节点", "导航", "位置"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodepointpos ", true, 19))
    {
        new nodeid = strval(cmdtext[19]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的节点 ID。必须在 0 到 63 之间。");

        new Float:x, Float:y, Float:z;
        new bool:success = NPC_GetNodePointPosition(nodeid, x, y, z);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "节点 %d 点位置：%.2f, %.2f, %.2f", nodeid, x, y, z);
        else
            SendClientMessage(playerid, 0xFF0000FF, "获取节点 %d 点位置失败", nodeid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 必须首先使用 `NPC_OpenNode` 打开节点
- 在获取位置前必须使用 `NPC_SetNodePoint` 设置一个点
- 所有坐标参数都通过引用传递

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点以供使用
- [NPC_SetNodePoint](NPC_SetNodePoint): 设置当前节点点
- [NPC_GetNodePointCount](NPC_GetNodePointCount): 获取点的数量
- [NPC_PlayNode](NPC_PlayNode): 使 NPC 播放节点

## 相关回调

- [../callbacks/OnNPCFinishNodePoint](../callbacks/OnNPCFinishNodePoint): NPC 完成节点点时调用
