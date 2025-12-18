---
title: NPC_ChangeNode
sidebar_label: NPC_ChangeNode
description: 更改 NPC 当前正在播放的节点。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

将 NPC 当前正在播放的节点更改为不同的节点。

| 参数   | 说明                  |
| ------ | --------------------- |
| npcid  | NPC 的 ID             |
| nodeid | 要更改到的新节点的 ID |
| linkid | 用于转换的链接 ID     |

## 返回值

返回节点中的新路径点 ID。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcchangenode ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new nodeid = strval(cmdtext[15]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "无效的节点 ID。必须在 0 到 63 之间。");

        new idx = 15;
        while (cmdtext[idx] != ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "用法：/npcchangenode [nodeid] [linkid]");

        new linkid = strval(cmdtext[idx]);

        NPC_ChangeNode(npcid, nodeid, linkid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 通过链接 %d 更改为节点 %d", npcid, nodeid, linkid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- NPC 必须当前正在播放节点才能更改
- 目标节点必须先使用 `NPC_OpenNode` 打开
- 链接 ID 决定节点之间的转换路径
- 使用此函数创建复杂的导航模式

## 相关函数

- [NPC_PlayNode](NPC_PlayNode): 开始播放节点
- [NPC_StopPlayingNode](NPC_StopPlayingNode): 停止播放当前节点
- [NPC_OpenNode](NPC_OpenNode): 打开节点供使用
- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查 NPC 是否正在播放节点

## 相关回调

- [OnNPCChangeNode](../callbacks/OnNPCChangeNode): 当 NPC 更改节点时调用
- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): 当 NPC 完成节点时调用
