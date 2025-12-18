---
title: NPC_IsEnteringVehicle
sidebar_label: NPC_IsEnteringVehicle
description: 检查 NPC 是否正在进入车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查 NPC 当前是否正在进入车辆的过程中。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在进入车辆则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkenteringvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new bool:isEntering = NPC_IsEnteringVehicle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在进入车辆: %s", npcid, isEntering ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在进入动画/过程中返回 true
- 一旦 NPC 完全进入车辆，此函数返回 false
- NPC 必须已通过 NPC_EnterVehicle 被指示进入车辆

## 相关函数

- [NPC_EnterVehicle](NPC_EnterVehicle): 让 NPC 进入车辆
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): 获取正在进入的车辆 ID
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): 获取正在进入的座位
- [NPC_GetVehicle](NPC_GetVehicle): 获取当前车辆

## 相关回调

_此函数不会触发任何特定的回调。_
