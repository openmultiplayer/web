---
title: NPC_PausePlayingNode
sidebar_label: NPC_PausePlayingNode
description: 暂停 NPC 的节点导航。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

暂停 NPC 的节点导航，暂时停止其在节点中的移动。

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
    printf("NPC %d 节点导航已暂停", npcid);

    // 3秒后恢复
    SetTimerEx("ResumeNode", 3000, false, "i", npcid);
}

forward ResumeNode(npcid);
public ResumeNode(npcid)
{
    NPC_ResumePlayingNode(npcid);
    printf("NPC %d 节点导航已恢复", npcid);
}
```

## 注意事项

- 仅在 NPC 正在播放节点时有效
- 暂停的节点导航可以通过 NPC_ResumePlayingNode 恢复
- 使用 NPC_IsPlayingNodePaused 检查暂停状态

## 相关函数

- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): 恢复节点播放
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): 检查是否暂停
- [NPC_PlayNode](NPC_PlayNode): 开始播放节点
- [NPC_StopPlayingNode](NPC_StopPlayingNode): 停止播放节点

## 相关回调

_此函数不会触发任何特定的回调。_
