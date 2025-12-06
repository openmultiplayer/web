---
title: IsVehicleStreamedIn
sidebar_label: IsVehicleStreamedIn
description: 检测玩家是否加载了指定车辆
tags: ["车辆"]
---

## 描述

检测指定车辆是否在玩家的游戏世界中已加载（流加载）。只有玩家附近的车辆才会被加载（可见）。

| 参数      | 说明            |
| --------- | --------------- |
| vehicleid | 要检测的车辆 ID |
| playerid  | 要检测的玩家 ID |

## 返回值

**true** - 车辆已加载至玩家游戏

**false** - 车辆未加载或执行失败（玩家/车辆不存在）

## 示例代码

```c
new streamedVehicleCount; // 已加载车辆计数器

// 遍历所有车辆ID
for(new i = 1; i < MAX_VEHICLES; i++)
{
    if (IsVehicleStreamedIn(i, playerid))
    {
        streamedVehicleCount++; // 统计已加载车辆
    }
}

new string[144];
format(string, sizeof(string), "你当前已加载了 %i 辆车辆。", streamedVehicleCount);
SendClientMessage(playerid, -1, string); // 发送统计结果给玩家
```

## 相关函数

- [IsPlayerStreamedIn](IsPlayerStreamedIn): 检测玩家是否已加载至其他玩家的游戏

## 相关回调

- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): 当车辆加载时触发
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): 当车辆卸载时触发
- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): 当玩家加载至他人游戏时触发
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): 当玩家从他人游戏卸载时触发
