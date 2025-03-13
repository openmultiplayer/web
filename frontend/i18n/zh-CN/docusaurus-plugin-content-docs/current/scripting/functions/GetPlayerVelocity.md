---
title: GetPlayerVelocity
sidebar_label: GetPlayerVelocity
description: 获取玩家在X/Y/Z轴上的运动速度
tags: ["玩家"]
---

## 描述

获取玩家在三维坐标系中的运动速度（X/Y/Z 轴分量）

| 名称     | 说明                                |
| -------- | ----------------------------------- |
| playerid | 需要获取速度数据的玩家 ID           |
| &Float:x | 存储 X 轴速度的浮点变量（引用传递） |
| &Float:y | 存储 Y 轴速度的浮点变量（引用传递） |
| &Float:z | 存储 Z 轴速度的浮点变量（引用传递） |

## 返回值

本函数不直接返回值，三维速度分量将存储于指定的浮点变量中

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/velocity", true))
    {
        new
            Float:x, Float:y, Float:z,
            string[128];

        GetPlayerVelocity(playerid, x, y, z);

        format(string, sizeof(string), "您当前的运动速度：X轴 %.2f，Y轴 %.2f，Z轴 %.2f", x, y, z);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
}
```

## 相关函数

- [SetPlayerVelocity](SetPlayerVelocity): 设置玩家的运动速度
- [SetVehicleVelocity](SetVehicleVelocity): 设置车辆的运动速度
- [GetVehicleVelocity](GetVehicleVelocity): 获取车辆的运动速度
