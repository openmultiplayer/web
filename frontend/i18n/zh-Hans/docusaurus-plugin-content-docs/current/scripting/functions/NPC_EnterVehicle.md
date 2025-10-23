---
title: NPC_EnterVehicle
sidebar_label: NPC_EnterVehicle
description: 使 NPC 进入车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

使 NPC 通过走向车辆并进入来乘坐车辆。

| 名称      | 描述                 |
| --------- | -------------------- |
| npcid     | NPC 的 ID            |
| vehicleid | 要进入的车辆的 ID    |
| seatid    | 要进入的座位         |
| moveType  | 接近时使用的移动类型 |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);

    // 使 NPC 走向车辆并作为驾驶员进入
    NPC_EnterVehicle(npcid, vehicleid, 0, NPC_MOVE_TYPE_WALK);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcride", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new vehicleid = CreateVehicle(411, x + 5.0, y, z, 0.0, -1, -1, 300);
        new npcid = NPC_Create("Passenger");
        NPC_Spawn(npcid);

        // 使 NPC 作为乘客进入
        NPC_EnterVehicle(npcid, vehicleid, 1, NPC_MOVE_TYPE_JOG);

        return 1;
    }
    return 0;
}
```

## 座位 ID

| ID  | 座位               |
| --- | ------------------ |
| 0   | 驾驶员             |
| 1   | 副驾驶             |
| 2   | 后左乘客           |
| 3   | 后右乘客           |
| 4+  | 乘客座位（大巴等） |

## 注意事项

- NPC 在进入前会寻路到车辆门
- NPC 将使用指定的移动类型到达车辆
- 如果座位被占用，NPC 可能无法进入
- 座位 0 始终是驾驶员座位
- 最大座位 ID 取决于车辆模型

## 相关函数

- [NPC_ExitVehicle](NPC_ExitVehicle): 使 NPC 退出车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 立即将 NPC 放入车辆
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): 检查 NPC 是否正在进入车辆

## 相关回调

_此函数不会触发特定的回调。_
