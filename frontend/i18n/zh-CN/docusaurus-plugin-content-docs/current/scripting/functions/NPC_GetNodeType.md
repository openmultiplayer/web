---
title: NPC_GetNodeType
sidebar_label: NPC_GetNodeType
description: 获取 NPC 节点的类型。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 节点的类型。

| 参数   | 说明      |
| ------ | --------- |
| nodeid | 节点的 ID |

## 返回值

返回节点类型 ID，若节点无效则返回-1。

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

- 若节点无效或未打开则返回-1
- 不同的节点类型适用于不同的移动方式
- 行人节点适用于步行的 NPC
- 车辆节点适用于驾驶的 NPC
- 请为 NPC 的移动方式选择合适的节点类型

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点以供使用
- [NPC_IsNodeOpen](NPC_IsNodeOpen): 检查节点是否打开
- [NPC_GetNodeInfo](NPC_GetNodeInfo): 获取详细节点信息
- [NPC_PlayNode](NPC_PlayNode): 使 NPC 播放节点

## 相关回调

- [../callbacks/OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
- [../callbacks/OnNPCChangeNode](../callbacks/OnNPCChangeNode): NPC 更换节点时调用
