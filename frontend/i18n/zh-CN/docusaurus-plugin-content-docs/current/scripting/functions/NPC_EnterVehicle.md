---
title: NPC_EnterVehicle
sidebar_label: NPC_EnterVehicle
description: 使 NPC 进入车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

使 NPC 通过走向车辆并进入其中。

| 参数      | 说明                 |
| --------- | -------------------- |
| npcid     | NPC 的 ID            |
| vehicleid | 要进入的车辆 ID      |
| seatid    | 要进入的座位         |
| moveType  | 接近时使用的移动类型 |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcenterbike ", true, 14))
    {
        new seatid = strval(cmdtext[14]);
        if (cmdtext[14] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "用法：/npcenterbike [座位ID]");

        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        new vehicleid = PlayerVehicles[playerid][0];
        if (vehicleid == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你的摩托车不可用。");

        if (NPC_EnterVehicle(npcid, vehicleid, seatid, NPC_MOVE_TYPE_JOG))
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在进入摩托车（座位 %d）。", npcid, seatid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d 进入摩托车失败（座位 %d）。", npcid, seatid);

        return 1;
    }
    return 0;
}
```

## 座位 ID

| ID  | 座位             |
| --- | ---------------- |
| 0   | 驾驶员           |
| 1   | 副驾驶座         |
| 2   | 后左座           |
| 3   | 后右座           |
| 4+  | 乘客座（大巴等） |

## 注意事项

- NPC 会尝试使用指定的移动类型到达车辆门，然后进入
- 如果座位已被占用，NPC 可能无法进入

## 相关函数

- [NPC_ExitVehicle](NPC_ExitVehicle): 使 NPC 退出车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 立即将 NPC 放入车辆
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): 检查 NPC 是否正在进入车辆

## 相关回调

_此函数不会触发特定的回调。_
