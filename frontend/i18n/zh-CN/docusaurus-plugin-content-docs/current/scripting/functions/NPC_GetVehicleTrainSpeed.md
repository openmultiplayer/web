---
title: NPC_GetVehicleTrainSpeed
sidebar_label: NPC_GetVehicleTrainSpeed
description: 获取 NPC 驾驶的火车的速度。
tags: ["npc", "车辆", "火车"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 驾驶的火车的速度。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回火车速度（浮点数），若不在火车中则返回 0.0。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicletrainspeed", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没在任何车辆中。", npcid);

        new Float:speed = NPC_GetVehicleTrainSpeed(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 驾驶的火车的速度: %.2f", npcid, speed);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 驾驶火车车辆时有效
- 若 NPC 不在火车中或不是驾驶员则返回 0.0

## 相关函数

- [NPC_SetVehicleTrainSpeed](NPC_SetVehicleTrainSpeed): 设置火车速度
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆

## 相关回调

_此函数不会触发任何特定的回调。_
