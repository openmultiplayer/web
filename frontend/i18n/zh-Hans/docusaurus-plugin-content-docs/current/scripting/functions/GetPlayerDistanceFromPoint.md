---
title: GetPlayerDistanceFromPoint
sidebar_label: GetPlayerDistanceFromPoint
description: 计算玩家与指定地图坐标点之间的距离
tags: ["玩家"]
---

## 描述

计算玩家当前位置与指定三维地图坐标点之间的直线距离

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要计算距离的玩家 ID |
| Float:x  | 目标点的 X 坐标       |
| Float:y  | 目标点的 Y 坐标       |
| Float:z  | 目标点的 Z 坐标       |

## 返回值

玩家与目标点之间的三维空间距离（浮点数值）

## 示例代码

```c
/* 当玩家在聊天框中输入'/vend'时触发 */
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/vend", true) == 0)
    {
        new
            Float:distance = GetPlayerDistanceFromPoint(playerid, 237.9, 115.6, 1010.2),
            string[64];

        format(string, sizeof(string), "你距离自动贩卖机还有 %0.2f 米", distance);
        SendClientMessage(playerid, 0xA9C4E4FF, string);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): 检测玩家是否在指定坐标点范围内
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): 计算车辆与坐标点之间的距离
- [GetPlayerPos](GetPlayerPos): 获取玩家当前位置坐标
