---
title: NPC_GetVehicleTrainSpeed
sidebar_label: NPC_GetVehicleTrainSpeed
description: 获取 NPC 驾驶的火车的速度。
tags: ["npc", "车辆", "火车"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 驾驶的火车的速度。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回火车速度（浮点数），若不在火车中则返回 0.0。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Conductor");
    NPC_Spawn(npcid);

    // 创建火车
    new vehicleid = CreateVehicle(537, 1700.0, -1953.0, 14.0, 0.0, -1, -1, 300); // 货运火车
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 设置火车速度
    NPC_SetVehicleTrainSpeed(npcid, 50.0);

    new Float:speed = NPC_GetVehicleTrainSpeed(npcid);
    printf("NPC %d火车速度: %.2f", npcid, speed);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/trainspeed", true))
    {
        new Float:speed = NPC_GetVehicleTrainSpeed(0);
        if (speed > 0.0)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0火车速度: %.2f", speed);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0不在火车中");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 驾驶火车车辆时有效
- 若 NPC 不在火车中或不是驾驶员则返回 0.0
- 火车速度影响火车在轨道上的移动速度

## 相关函数

- [NPC_SetVehicleTrainSpeed](NPC_SetVehicleTrainSpeed): 设置火车速度
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆

## 相关回调

_此函数不会触发任何特定的回调。_
