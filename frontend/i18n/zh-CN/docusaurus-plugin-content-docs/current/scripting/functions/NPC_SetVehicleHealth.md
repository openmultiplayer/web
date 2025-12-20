---
title: NPC_SetVehicleHealth
sidebar_label: NPC_SetVehicleHealth
description: 设置 NPC 车辆的生命值。
tags: ["npc", "车辆", "生命值"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 车辆的生命值。

| 参数   | 说明                 |
| ------ | -------------------- |
| npcid  | NPC 的 ID            |
| health | 生命值（0.0-1000.0） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvehiclehealth ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new Float:health = floatstr(cmdtext[18]);

        NPC_SetVehicleHealth(npcid, health);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 车辆生命值设置为 %.2f", npcid, health);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 在车辆中时有效
- 生命值范围从 0.0（已摧毁）到 1000.0（完美状态）
- Vehicles explode when health drops below 250

## 相关函数

- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): 获取车辆生命值
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [SetVehicleHealth](SetVehicleHealth): 直接设置车辆生命值

## 相关回调

_此函数不会触发任何特定的回调。_
