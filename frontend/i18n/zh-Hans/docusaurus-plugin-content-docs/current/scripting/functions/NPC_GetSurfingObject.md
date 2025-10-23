---
title: NPC_GetSurfingObject
sidebar_label: NPC_GetSurfingObject
description: 获取NPC正在冲浪的物体。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 正在冲浪的物体。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回物体 ID，若未在物体上冲浪则返回 `INVALID_OBJECT_ID`。

## 示例

```c
public OnNPCSpawn(npcid)
{
    new objectid = NPC_GetSurfingObject(npcid);
    if (objectid != INVALID_OBJECT_ID)
    {
        printf("NPC %d正在物体%d上冲浪", npcid, objectid);
    }
    else
    {
        printf("NPC %d未在任何物体上冲浪", npcid);
    }
    return 1;
}
```

## 注意事项

- 若 NPC 未在任何物体上冲浪则返回 INVALID_OBJECT_ID
- 此函数仅检查全局物体，不检查玩家物体

## 相关函数

- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 正在冲浪的物体
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): 获取 NPC 正在冲浪的车辆
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): 获取 NPC 正在冲浪的玩家物体
- [NPC_GetSurfingOffset](NPC_GetSurfingOffset): 获取 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
