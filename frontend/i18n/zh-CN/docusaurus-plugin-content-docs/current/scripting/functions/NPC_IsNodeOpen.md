---
title: NPC_IsNodeOpen
sidebar_label: NPC_IsNodeOpen
description: 检查 NPC 节点是否打开。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 节点是否打开并可供使用。

| 参数   | 说明      |
| ------ | --------- |
| nodeid | 节点的 ID |

## 返回值

如果节点打开则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknodeopen ", true, 15))
    {
        new nodeid = strval(cmdtext[15]);

        new bool:isNodeOpen = NPC_IsNodeOpen(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "节点 %d 是否打开: %s", nodeid, isNodeOpen ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 节点必须先通过 NPC_OpenNode 打开才能使用
- 只有打开的节点才能被 NPC 播放
- 在分配给 NPC 之前使用此函数检查节点可用性

## 相关函数

- [NPC_OpenNode](NPC_OpenNode): 打开节点供使用
- [NPC_CloseNode](NPC_CloseNode): 关闭节点
- [NPC_PlayNode](NPC_PlayNode): 让 NPC 播放节点
- [NPC_GetNodeType](NPC_GetNodeType): 获取节点类型

## 相关回调

_此函数不会触发任何特定的回调。_
