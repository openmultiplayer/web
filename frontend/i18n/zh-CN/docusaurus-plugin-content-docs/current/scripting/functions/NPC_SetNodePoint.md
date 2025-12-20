---
title: NPC_SetNodePoint
sidebar_label: NPC_SetNodePoint
description: 在 NPC 节点中设置一个点。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcsetnodepoint ", true, 17))
    {
        new nodeid = strval(cmdtext[17]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的节点ID。必须在 0 ~ 63 之间。");

        new idx = 17;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "用法：/npcsetnodepoint [节点id] [点id]");

        new pointid = strval(cmdtext[idx]);

        new bool:success = NPC_SetNodePoint(nodeid, pointid);

        SendClientMessage(playerid, 0x00FF00FF, "设置节点 %d 为点 %d: %s", nodeid, pointid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 在设置点之前必须打开节点
- 点索引通常从 0 开始
- 使用 NPC_GetNodePointPosition 检索点坐标

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点进行编辑
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): 获取点坐标
- [NPC_GetNodePointCount](NPC_GetNodePointCount): 获取点数量
- [NPC_UpdateNodePoint](NPC_UpdateNodePoint): 更新现有点

## 相关回调

_此函数不会触发任何特定的回调。_
