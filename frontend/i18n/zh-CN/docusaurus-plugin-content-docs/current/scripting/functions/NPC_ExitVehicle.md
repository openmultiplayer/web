---
title: NPC_ExitVehicle
sidebar_label: NPC_ExitVehicle
description: 使 NPC 退出其当前车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

使 NPC 退出其当前车辆。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 10 秒后，使 NPC 退出车辆
    SetTimerEx("ExitNPCVehicle", 10000, false, "i", npcid);

    return 1;
}

forward ExitNPCVehicle(npcid);
public ExitNPCVehicle(npcid)
{
    if (NPC_GetVehicle(npcid) != INVALID_VEHICLE_ID)
    {
        NPC_ExitVehicle(npcid);
        printf("NPC %d 已退出车辆", npcid);
    }
}
```

## 注意事项

- NPC 必须在车辆中此函数才能工作
- NPC 将执行退出动画
- 退出后，NPC 将在车辆附近步行
- 如果 NPC 不在车辆中，此函数无效

## 相关函数

- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 立即将 NPC 放入车辆
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 立即从车辆中移除 NPC
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆

## 相关回调

_此函数不会触发特定的回调。_
