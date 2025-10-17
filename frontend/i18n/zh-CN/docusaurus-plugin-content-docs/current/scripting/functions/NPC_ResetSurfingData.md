---
title: NPC_ResetSurfingData
sidebar_label: NPC_ResetSurfingData
description: 重置 NPC 的所有冲浪数据。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

重置 NPC 的所有冲浪数据。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetsurf", true))
    {
        // 重置 NPC 0 的冲浪数据
        NPC_ResetSurfingData(0);
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0 冲浪数据已重置");
        return 1;
    }
    return 0;
}

// 当 NPC 进入车辆时重置冲浪状态
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // 当 NPC 进入车辆时停止冲浪
    if(IsPlayerNPC(playerid)) {
        NPC_ResetSurfingData(playerid);
    }
    return 1;
}
```

## 注意事项

- 此函数清除 NPC 的所有冲浪相关数据，包括冲浪对象/车辆和偏移
- 调用此函数后，NPC 将不再附着在任何表面上
- NPC 的位置不会改变，只是重置其冲浪状态
- 当 NPC 需要独立移动时，可用于停止 NPC 冲浪

## 相关函数

- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 冲浪的对象
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 冲浪的车辆
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): 设置 NPC 冲浪的玩家对象
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): 设置 NPC 的冲浪偏移
- [NPC_GetSurfingObject](NPC_GetSurfingObject): 获取 NPC 冲浪的对象
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): 获取 NPC 冲浪的车辆

## 相关回调

_此函数不会触发任何特定的回调。_
