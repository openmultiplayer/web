---
title: OnNPCRespawn
sidebar_label: OnNPCRespawn
description: 当 NPC 重生时调用此回调。
tags: ["npc"]
---

<VersionWarnZH_Hans name='回调' version='omp v1.1.0.changemelater' />

## 描述

当 NPC 重生时调用此回调。

| 参数  | 说明             |
| ----- | ---------------- |
| npcid | 重生的 NPC 的 ID |

## 示例

```c
public OnNPCRespawn(npcid)
{
    printf("NPC %d 已重生", npcid);

    // 设置重生位置
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);
    NPC_SetFacingAngle(npcid, 0.0);

    return true;
}
```

## 注意事项

- 当 NPC 使用 `NPC_Respawn` 重生后调用此回调
- NPC 的生命值和护甲在重生期间会自动恢复
- 重生时任何正在进行的移动、回放等都会停止

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_Respawn](../functions/NPC_Respawn): 重生 NPC
- [NPC_Spawn](../functions/NPC_Spawn): 首次生成 NPC
- [NPC_SetHealth](../functions/NPC_SetHealth): 设置 NPC 的生命值
- [NPC_SetPosition](../functions/NPC_SetPosition): 设置 NPC 的位置

## 相关回调

- [OnNPCSpawn](OnNPCSpawn): 当 NPC 首次生成时调用
- [OnNPCDeath](OnNPCDeath): 当 NPC 死亡时调用
- [OnPlayerSpawn](OnPlayerSpawn): 当玩家生成时调用
