---
title: OnNPCCreate
sidebar_label: OnNPCCreate
description: 当 NPC 成功创建时调用此回调。
tags: ["npc"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 成功创建并添加到服务器时调用此回调。

| 参数  | 说明               |
| ----- | ------------------ |
| npcid | 已创建的 NPC 的 ID |

## 示例

```c
public OnNPCCreate(npcid)
{
    printf("[NPC] NPC %d 已创建", npcid);

    // 通知所有已连接的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 已创建", npcid);
    }
    return 1;
}
```

## 注意事项

- 此回调在 NPC 创建后立即调用，但在其生成之前
- NPC 需要使用 `NPC_Spawn` 生成才能在游戏世界中可见

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_Create](../functions/NPC_Create): 创建新的 NPC
- [NPC_Destroy](../functions/NPC_Destroy): 销毁现有的 NPC
- [NPC_Spawn](../functions/NPC_Spawn): 在游戏世界中生成 NPC

## 相关回调

- [OnNPCDestroy](OnNPCDestroy): 当 NPC 被销毁时调用
- [OnNPCSpawn](OnNPCSpawn): 当 NPC 被生成时调用
