---
title: NPC_PutInVehicle
sidebar_label: NPC_PutInVehicle
description: 将 NPC 放入车辆的指定座位。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

将 NPC 放入车辆的指定座位。

| 参数      | 说明                 |
| --------- | -------------------- |
| npcid     | NPC 的 ID            |
| vehicleid | 车辆的 ID            |
| seatid    | 要放入 NPC 的座位 ID |

## 返回值

如果 NPC 成功放入车辆则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, -1);

    if (NPC_PutInVehicle(npcid, vehicleid, 0)) // 驾驶座
    {
        printf("NPC %d 现在正在驾驶车辆 %d", npcid, vehicleid);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcride", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new vehicleid = CreateVehicle(411, x + 5.0, y, z, 0.0, -1, -1, -1);
        new npcid = NPC_Create("Passenger");
        NPC_Spawn(npcid);

        if (NPC_PutInVehicle(npcid, vehicleid, 1)) // 副驾驶座
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 乘客已创建！");
        }
        return 1;
    }
    return 0;
}
```

## 座位 ID

| ID  | 座位               |
| --- | ------------------ |
| 0   | 驾驶员             |
| 1   | 前排乘客           |
| 2   | 后排左侧乘客       |
| 3   | 后排右侧乘客       |
| 4+  | 乘客座位（大巴等） |

## 注意事项

- NPC 会立即出现在车辆中，没有进入动画
- 使用 NPC_GetVehicleID 检查 NPC 在哪辆车辆中
- 座位 0 始终是驾驶座
- 最大座位 ID 取决于车辆型号

## 相关函数

- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 将 NPC 从车辆中移出
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): 获取 NPC 的座位
- [NPC_EnterVehicle](NPC_EnterVehicle): 让 NPC 带动画进入车辆

## 相关回调

_此函数不会触发任何特定的回调。_
