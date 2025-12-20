---
title: floatsin
sidebar_label: floatsin
description: 获取指定角度的正弦值
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

获取指定角度的正弦值。输入角度可使用弧度、角度或梯度单位。

| 参数           | 说明                                                                          |
| -------------- | ----------------------------------------------------------------------------- |
| Float:value    | 需要计算正弦值的角度                                                          |
| anglemode:mode | 使用的[角度模式](../resources/anglemodes)，根据输入值的单位而定（默认：弧度） |

## 返回值

输入值的正弦值。

## 示例

```c
GetPosInFrontOfPlayer(playerid, Float:distance, &Float:x, &Float:y, &Float:z)
{
    if (GetPlayerPos(playerid, x, y, z)) // 如果玩家未连接，此函数返回0
    {
        new Float:z_angle;
        GetPlayerFacingAngle(playerid, z_angle);

        x += distance * floatsin(-z_angle, degrees); // GTA中的角度采用逆时针方向，因此需要反转获取的角度值
        y += distance * floatcos(-z_angle, degrees);

        return 1; // 成功时返回1，实际坐标通过引用返回
    }
    return 0; // 玩家未连接时返回0
}
```

## 注意事项

:::warning

在大多数情况下，GTA/SA-MP 使用角度制表示方向，例如[GetPlayerFacingAngle](GetPlayerFacingAngle)。因此建议优先使用'degrees'角度模式而非弧度制。同时注意 GTA 的角度系统采用逆时针方向：270° 为东方，90° 为西方，南方仍为 180°，北方仍为 0°/360°。

:::

## 相关函数

- [floattan](floattan): 获取指定角度的正切值
- [floatcos](floatcos): 获取指定角度的余弦值

## 相关资源

- [角度模式](../resources/anglemodes): 测量角度的国际单位常量
