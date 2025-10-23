---
title: IsPlayerInRangeOfPoint
sidebar_label: IsPlayerInRangeOfPoint
description: 检测玩家是否处于指定坐标点范围内
tags: ["玩家"]
---

## 描述

快速检测玩家是否处于三维坐标点范围内（原生函数性能优于 PAWN 的距离公式计算）

| 参数名      | 说明                                   |
| ----------- | -------------------------------------- |
| playerid    | 目标玩家 ID                            |
| Float:range | 检测半径（最大有效距离，使用浮点数值） |
| Float:x     | 检测点 X 坐标（浮点数值）              |
| Float:y     | 检测点 Y 坐标（浮点数值）              |
| Float:z     | 检测点 Z 坐标（浮点数值）              |

## 返回值

**true** - 玩家坐标在检测范围内

**false** - 玩家坐标超出检测范围

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stadium", true))
    {
        if (IsPlayerInRangeOfPoint(playerid, 7.0, 2695.6880, -1704.6300, 11.8438))
        {
            SendClientMessage(playerid, 0xFFFFFFFF, "您位于体育馆入口区域！");
        }
        return 1;
    }
    return 0;
}
```

## 相关函数

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): 获取玩家与坐标点精确距离
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): 获取车辆与坐标点精确距离
- [GetPlayerPos](GetPlayerPos): 获取玩家当前三维坐标
