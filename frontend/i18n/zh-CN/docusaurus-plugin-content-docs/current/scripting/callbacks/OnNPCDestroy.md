---
title: OnNPCDestroy
sidebar_label: OnNPCDestroy
description: 当 NPC 被销毁时调用此回调。
tags: ["npc"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 被销毁并从服务器移除时调用此回调。

| 参数  | 说明               |
| ----- | ------------------ |
| npcid | 被销毁的 NPC 的 ID |

## 示例

```c
public OnNPCDestroy(npcid)
{
    printf("[NPC] NPC %d 已被销毁", npcid);

    // 清除追踪此 NPC 的玩家并通知
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            PlayerNPC[playerid] = INVALID_NPC_ID;
            SendClientMessage(playerid, 0xFF0000FF, "你追踪的 NPC %d 已被销毁", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 已被销毁", npcid);
        }
    }
    return 1;
}
```

## 注意事项

- 此回调在 NPC 从服务器移除之前立即调用
- 在此回调之后，NPC 将断开连接并释放其玩家槽位

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_Create](../functions/NPC_Create): 创建新的 NPC
- [NPC_Destroy](../functions/NPC_Destroy): 销毁现有的 NPC
- [NPC_IsValid](../functions/NPC_IsValid): 检查 NPC ID 是否有效

## 相关回调

- [OnNPCCreate](OnNPCCreate): 当 NPC 被创建时调用
