---
title: NPC_SetSurfingVehicle
sidebar_label: NPC_SetSurfingVehicle
description: 设置 NPC 正在冲浪的车辆。
tags: ["npc", "冲浪", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 正在冲浪的车辆。

| 参数      | 说明      |
| --------- | --------- |
| npcid     | NPC 的 ID |
| vehicleid | 车辆 ID   |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("SurfingBot");
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);

    NPC_Spawn(npcid);
    NPC_SetPos(npcid, 1958.33, 1343.12, 17.36);
    NPC_SetSurfingVehicle(npcid, vehicleid);
    return 1;
}

// 让 NPC 在移动车辆的车顶冲浪
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (!ispassenger) // 驾驶员
    {
        new npcid = NPC_Create("RoofRider");
        NPC_Spawn(npcid);
        NPC_SetSurfingVehicle(npcid, vehicleid);
        NPC_SetSurfingOffset(npcid, 0.0, 0.0, 2.0); // 定位到车顶
    }
    return 1;
}
```

## 注意事项

- 此函数允许 NPC 在车辆上"冲浪"，意味着它们会随着车辆移动，同时保持相对于车辆的位置
- NPC 会跟随车辆的移动、旋转和位置变化
- 使用 `NPC_SetSurfingOffset` 将 NPC 定位到车辆的特定位置（车顶、引擎盖等）
- 车辆必须存在才能正常冲浪

## 相关函数

- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): 获取 NPC 正在冲浪的车辆
- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 正在冲浪的对象
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): 设置 NPC 正在冲浪的玩家对象
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): 设置 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
