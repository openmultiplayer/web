---
title: NPC_CloseNode
sidebar_label: NPC_CloseNode
description: 关闭 NPC 节点，使其无法使用。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

关闭 NPC 节点，使其无法被 NPC 使用。

| 参数   | 说明              |
| ------ | ----------------- |
| nodeid | 要关闭的节点的 ID |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodetype ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的节点 ID。必须在 0 到 63 之间。");

        new nodetype = NPC_GetNodeType(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "节点 %d 类型：%d", nodeid, nodetype);
        return 1;
    }
    return 0;

}
```

## 注意事项

- 关闭节点会阻止新的 NPC 使用它
- 当前正在使用该节点的 NPC 将继续直到完成
- 关闭的节点在重新使用 `NPC_OpenNode` 打开之前无法播放

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点供使用
- [NPC_IsNodeOpen](NPC_IsNodeOpen): 检查节点是否打开
- [NPC_PlayNode](NPC_PlayNode): 使 NPC 播放节点
- [NPC_GetNodeType](NPC_GetNodeType): 获取节点类型信息

## 相关回调

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): 当 NPC 完成节点时调用
- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): 当 NPC 更改节点时调用
