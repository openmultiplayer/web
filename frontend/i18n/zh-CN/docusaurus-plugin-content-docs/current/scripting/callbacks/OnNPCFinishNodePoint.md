---
title: OnNPCFinishNodePoint
sidebar_label: OnNPCFinishNodePoint
description: 当 NPC 在基于节点的导航过程中到达特定点时调用此回调。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 在基于节点的导航过程中到达特定点时调用此回调。

| 参数    | 说明                   |
| ------- | ---------------------- |
| npcid   | 到达节点点的 NPC 的 ID |
| nodeid  | 正在导航的节点的 ID    |
| pointid | 到达的特定点的 ID      |

## 示例

```c
public OnNPCFinishNode(npcid, nodeid)
{
    printf("[NPC] NPC %d 完成节点 %d", npcid, nodeid);

    // 通知追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 完成节点 %d", npcid, nodeid);
        }
    }
    return 1;
}
```

## 注意事项

- 此回调仅在 NPC 通过 `NPC_PlayNode` 使用基于节点的导航时调用
- 每次 NPC 到达节点内的路径点时都会调用此回调
- `pointid` 对应节点文件中特定路径点的索引

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_PlayNode](../functions/NPC_PlayNode): 开始 NPC 基于节点的导航
- [NPC_PausePlayingNode](../functions/NPC_PausePlayingNode): 暂停 NPC 节点导航
- [NPC_ResumePlayingNode](../functions/NPC_ResumePlayingNode): 恢复暂停的节点导航
- [NPC_StopPlayingNode](../functions/NPC_StopPlayingNode): 停止 NPC 节点导航

## 相关回调

- [OnNPCFinishNode](OnNPCFinishNode): 当 NPC 完成导航完整节点时调用
- [OnNPCChangeNode](OnNPCChangeNode): 当 NPC 尝试切换节点时调用
- [OnNPCFinishMove](OnNPCFinishMove): 当 NPC 完成任何类型的移动时调用
