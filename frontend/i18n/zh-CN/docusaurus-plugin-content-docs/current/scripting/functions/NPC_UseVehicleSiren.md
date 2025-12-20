---
title: NPC_UseVehicleSiren
sidebar_label: NPC_UseVehicleSiren
description: 让 NPC 使用或停止使用车辆警报器。
tags: ["npc", "车辆", "警报器"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

让 NPC 使用或停止使用车辆警报器。

| 参数  | 说明                                          |
| ----- | --------------------------------------------- |
| npcid | NPC 的 ID                                     |
| use   | `true` 使用警报器，`false` 停止（默认：true） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcusesiren ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new veh = NPC_GetVehicle(npcid);
        if (veh == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 不在任何车辆中。", npcid);

        new bool:use = strval(cmdtext[13]) ? true : false;

        new bool:success = NPC_UseVehicleSiren(npcid, use);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 车辆警报器%s：%s", npcid, use ? "启用" : "禁用", success ? "成功" : "失败");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 作为驾驶员在车辆中时有效
- 车辆必须支持警报器（紧急车辆）
- 警报器状态持续保持直到更改或 NPC 下车

## 相关函数

- [NPC_IsVehicleSirenUsed](NPC_IsVehicleSirenUsed): 检查警报器是否在使用
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_Move](NPC_Move): 让 NPC 驾驶到位置

## 相关回调

_此函数不会触发任何特定的回调。_
