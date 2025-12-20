---
title: NPC_OpenNode
sidebar_label: NPC_OpenNode
description: 打开 NPC 节点供使用。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

打开 NPC 节点供使用，使其可供 NPC 导航通过。

| 参数   | 说明      |
| ------ | --------- |
| nodeid | 节点的 ID |

## 返回值

如果节点成功打开则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcopennode ", true, 13))
    {
        new nodeid = strval(cmdtext[13]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的节点ID。必须在 0 ~ 63 之间。");

        new bool:success = NPC_OpenNode(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "打开节点 %d: %s", nodeid, success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 节点 ID 范围为 0 到 63
- 节点必须先打开才能供 NPC 用于导航
- 打开节点会加载其数据并使其可访问
- 使用 NPC_IsNodeOpen 检查节点是否已打开

## 相关函数

- [NPC_CloseNode](NPC_CloseNode): 关闭节点
- [NPC_IsNodeOpen](NPC_IsNodeOpen): 检查节点是否打开
- [NPC_PlayNode](NPC_PlayNode): 让 NPC 播放节点
- [NPC_GetNodeInfo](NPC_GetNodeInfo): 获取节点信息

## 相关回调

_此函数不会触发任何特定的回调。_
