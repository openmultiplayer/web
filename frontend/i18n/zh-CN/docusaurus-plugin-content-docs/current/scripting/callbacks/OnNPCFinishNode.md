---
title: OnNPCFinishNode
sidebar_label: OnNPCFinishNode
description: 当 NPC 完成导航一个完整节点时调用此回调。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 在基于节点的移动过程中完成导航一个完整节点时调用此回调。

| 参数   | 说明                 |
| ------ | -------------------- |
| npcid  | 完成节点的 NPC 的 ID |
| nodeid | 已完成的节点的 ID    |

## 示例

```c
public OnNPCFinishNodePoint(npcid, nodeid, pointid)
{
    // 通知追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 到达节点 %d 的点 %d", npcid, nodeid, pointid);
        }
    }
    return 1;
}
```

## 注意事项

- 此回调仅在 NPC 通过 `NPC_PlayNode` 使用基于节点的导航时调用
- 当 NPC 完成节点中所有点的导航时调用此回调
- 当此回调触发时，节点导航会自动停止

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_PlayNode](../functions/NPC_PlayNode): 开始 NPC 基于节点的导航
- [NPC_StopPlayingNode](../functions/NPC_StopPlayingNode): 停止 NPC 节点导航
- [NPC_IsPlayingNode](../functions/NPC_IsPlayingNode): 检查 NPC 是否正在导航节点
- [NPC_OpenNode](../functions/NPC_OpenNode): 打开导航节点文件

## 相关回调

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): 当 NPC 到达节点中的特定点时调用
- [OnNPCChangeNode](OnNPCChangeNode): 当 NPC 尝试切换节点时调用
- [OnNPCFinishMove](OnNPCFinishMove): 当 NPC 完成任何类型的移动时调用
