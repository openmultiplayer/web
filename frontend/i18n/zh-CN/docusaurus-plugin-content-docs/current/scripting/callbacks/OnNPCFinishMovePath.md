---
title: OnNPCFinishMovePath
sidebar_label: OnNPCFinishMovePath
description: 当 NPC 完成沿预定路径移动时调用此回调。
tags: ["npc", "移动", "路径"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 完成沿预定路径移动时调用此回调。

| 参数   | 说明                 |
| ------ | -------------------- |
| npcid  | 完成路径的 NPC 的 ID |
| pathid | 已完成的路径的 ID    |

## 示例

```c
public OnNPCFinishMovePath(npcid, pathid)
{
    // 查找所有追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 完成沿路径 %d 移动", npcid, pathid);
        }
    }
    return 1;
}
```

## 注意事项

- 当 NPC 到达路径的最终点时触发此回调
- 当调用此回调时，NPC 会自动停止移动

## 相关函数

- [NPC_MoveByPath](../functions/NPC_MoveByPath): 使 NPC 沿路径移动
- [NPC_CreatePath](../functions/NPC_CreatePath): 创建新的移动路径
- [NPC_IsValidPath](../functions/NPC_IsValidPath): 检查路径是否有效

## 相关回调

- [OnNPCFinishMove](OnNPCFinishMove): 当 NPC 完成任何移动时调用
- [OnNPCFinishNode](OnNPCFinishNode): 当 NPC 完成节点导航时调用
- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): 当 NPC 到达节点点时调用
