---
title: OnNPCFinishMove
sidebar_label: OnNPCFinishMove
description: 当 NPC 完成移动到目标位置时调用此回调。
tags: ["npc", "移动"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 完成移动到目标位置时调用此回调。

| 参数  | 说明                 |
| ----- | -------------------- |
| npcid | 完成移动的 NPC 的 ID |

## 示例

```c
public OnNPCFinishMove(npcid)
{
    // 查找所有追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            new Float:x, Float:y, Float:z;
            NPC_GetPos(npcid, x, y, z);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 完成移动到位置 (%.2f, %.2f, %.2f)", npcid, x, y, z);
        }
    }
    return 1;
}
```

## 注意事项

- 此回调适用于所有类型的 NPC 移动（步行、跑步、冲刺、驾驶）
- 当 NPC 到达移动函数设置的目标位置时调用此回调
- 对于基于路径的移动，当整个路径完成时调用此回调（路径特定的回调请参见 `OnNPCFinishMovePath`）
- 对于跟随玩家，当 NPC 停止跟随时调用此回调（如果禁用了自动重启）

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_Move](../functions/NPC_Move): 使 NPC 移动到位置
- [NPC_MoveToPlayer](../functions/NPC_MoveToPlayer): 使 NPC 跟随玩家
- [NPC_StopMove](../functions/NPC_StopMove): 停止 NPC 移动
- [NPC_IsMoving](../functions/NPC_IsMoving): 检查 NPC 是否正在移动

## 相关回调

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): 当 NPC 到达节点点时调用
- [OnNPCFinishNode](OnNPCFinishNode): 当 NPC 完成节点导航时调用
- [OnNPCFinishMovePath](OnNPCFinishMovePath): 当 NPC 完成沿路径移动时调用
