---
title: NPC_ResumePlayingNode
sidebar_label: NPC_ResumePlayingNode
description: 恢复 NPC 的暂停节点导航。
tags: ["npc", "节点"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

恢复 NPC 的暂停节点导航。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Navigator");
    NPC_Spawn(npcid);

    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);

        // 5秒后暂停
        SetTimerEx("PauseNode", 5000, false, "i", npcid);
    }

    return 1;
}

forward PauseNode(npcid);
public PauseNode(npcid)
{
    NPC_PausePlayingNode(npcid);

    // 3秒后恢复
    SetTimerEx("ResumeNode", 3000, false, "i", npcid);
}

forward ResumeNode(npcid);
public ResumeNode(npcid)
{
    NPC_ResumePlayingNode(npcid);
    printf("NPC %d 节点导航已恢复", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resume", true))
    {
        NPC_ResumePlayingNode(0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 节点导航已恢复");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 的节点导航之前被暂停时有效
- NPC 将从暂停的位置继续
- 与 `NPC_PausePlayingNode` 配合使用以控制节点导航

## 相关函数

- [NPC_PausePlayingNode](NPC_PausePlayingNode): 暂停节点导航
- [NPC_PlayNode](NPC_PlayNode): 开始播放节点
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): 检查是否暂停
- [NPC_IsPlayingNode](NPC_IsPlayingNode): 检查是否正在播放节点

## 相关回调

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): NPC 完成节点时调用
