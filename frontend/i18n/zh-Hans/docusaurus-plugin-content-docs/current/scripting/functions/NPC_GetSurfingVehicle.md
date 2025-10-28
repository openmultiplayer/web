---
title: NPC_GetSurfingVehicle
sidebar_label: NPC_GetSurfingVehicle
description: 获取 NPC 正在冲浪的车辆。
tags: ["npc", "冲浪", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 正在冲浪的车辆。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回车辆 ID，若未在车辆上冲浪则返回 `INVALID_VEHICLE_ID`。

## 示例

```c
public OnNPCSpawn(npcid)
{
    new vehicleid = NPC_GetSurfingVehicle(npcid);
    if (vehicleid != INVALID_VEHICLE_ID)
    {
        printf("NPC %d正在车辆%d上冲浪", npcid, vehicleid);
    }
    else
    {
        printf("NPC %d未在任何车辆上冲浪", npcid);
    }
    return 1;
}
```

## 注意事项

- 若 NPC 未在任何车辆上冲浪则返回 `INVALID_VEHICLE_ID`
- 冲浪允许 NPC 在保持相对位置的同时随车辆移动

## 相关函数

- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 正在冲浪的车辆
- [NPC_GetSurfingObject](NPC_GetSurfingObject): 获取 NPC 正在冲浪的物体
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): 获取 NPC 正在冲浪的玩家物体
- [NPC_GetSurfingOffset](NPC_GetSurfingOffset): 获取 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
