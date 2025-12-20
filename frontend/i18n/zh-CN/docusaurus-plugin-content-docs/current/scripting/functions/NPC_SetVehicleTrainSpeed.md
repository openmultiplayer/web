---
title: NPC_SetVehicleTrainSpeed
sidebar_label: NPC_SetVehicleTrainSpeed
description: 设置 NPC 火车的速度。
tags: ["npc", "车辆", "火车", "速度"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 火车的速度。

| 参数  | 说明             |
| ----- | ---------------- |
| npcid | NPC 的 ID        |
| speed | 要设置的火车速度 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/settrainspeed ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:speed = floatstr(cmdtext[15]);

        NPC_SetVehicleTrainSpeed(npcid, speed);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 火车车速设置为 to %.2f", npcid, speed);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅适用于火车（模型 537、538）
- 使用 NPC_GetVehicleTrainSpeed 检查当前速度
- 将速度设置为 0 会停止火车

## 相关函数

- [NPC_GetVehicleTrainSpeed](NPC_GetVehicleTrainSpeed): 获取火车速度
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [GetVehicleModel](GetVehicleModel): 获取车辆模型

## 相关回调

_此函数不会触发任何特定的回调。_
