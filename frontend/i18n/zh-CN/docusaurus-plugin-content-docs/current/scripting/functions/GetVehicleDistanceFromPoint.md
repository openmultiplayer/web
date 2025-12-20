---
title: GetVehicleDistanceFromPoint
sidebar_label: GetVehicleDistanceFromPoint
description: 计算车辆与指定坐标点之间的距离（浮点型）
tags: ["车辆"]
---

## 描述

此函数用于计算车辆与指定地图坐标点之间的距离（浮点型），适用于检测车辆与某位置的间距。

| 参数      | 说明                |
| --------- | ------------------- |
| vehicleid | 要计算距离的车辆 ID |
| Float:x   | 目标点的 X 坐标     |
| Float:y   | 目标点的 Y 坐标     |
| Float:z   | 目标点的 Z 坐标     |

## 返回值

返回车辆到指定坐标点的距离（浮点型）

## 示例

```c
/* 当玩家在聊天框输入'vendingmachine'时触发此函数 */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "vendingmachine", true) == 0)
    {
        new
            string[64],
            vehicleid = GetPlayerVehicleID(playerid);

        new
            Float:distance = GetVehicleDistanceFromPoint(vehicleid, 237.9, 115.6, 1010.2);

        format(string, sizeof(string), "你距离自动售货机还有%.2f米。", distance);
        SendClientMessage(playerid, 0xA9C4E4FF, string);
    }
    return 0;
}
```

## 相关函数

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): 获取玩家到点的距离
- [GetVehiclePos](GetVehiclePos): 获取车辆坐标位置
