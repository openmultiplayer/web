---
title: OnNPCChangeNode
sidebar_label: OnNPCChangeNode
description: 当 NPC 在基于节点的移动过程中尝试从一个导航节点切换到另一个节点时调用此回调。
tags: ["npc", "节点", "导航"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 在基于节点的移动过程中尝试从一个导航节点切换到另一个节点时调用此回调。这允许你控制是否应允许或拒绝节点切换。

| 参数      | 说明                        |
| --------- | --------------------------- |
| npcid     | 尝试切换节点的 NPC 的 ID    |
| newnodeid | NPC 想要移动到的新节点的 ID |
| oldnodeid | NPC 当前所在节点的 ID       |

## 返回值

返回 `true` 允许节点切换，或返回 `false` 拒绝切换。

## 示例

```c
public OnNPCChangeNode(npcid, newnodeid, oldnodeid)
{
    printf("[NPC] NPC %d 正在从节点 %d 切换到节点 %d", npcid, oldnodeid, newnodeid);

    // 通知跟踪此NPC的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在从节点 %d 切换到节点 %d", npcid, oldnodeid, newnodeid);
        }
    }
    return 1;
}
```

## 注意事项

- 此回调仅在 NPC 通过 `NPC_PlayNode` 使用基于节点的导航时调用
- 返回 `false` 将阻止 NPC 切换节点，并可能导致其停止导航
- NPC 必须先使用 `NPC_OpenNode` 加载节点文件，才能在节点之间导航

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_PlayNode](../functions/NPC_PlayNode): 开始 NPC 基于节点的导航
- [NPC_OpenNode](../functions/NPC_OpenNode): 打开导航节点文件
- [NPC_CloseNode](../functions/NPC_CloseNode): 关闭导航节点文件
- [NPC_StopPlayingNode](../functions/NPC_StopPlayingNode): 停止 NPC 节点导航

## 相关回调

- [OnNPCFinishNode](OnNPCFinishNode): 当 NPC 完成导航完整节点时调用
- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): 当 NPC 到达节点中的特定点时调用
