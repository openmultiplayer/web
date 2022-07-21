---
title: floatsin
description: 从特定角度求正弦值。
tags: ["math", "floating-point"]
---

<LowercaseNote />

## 描述

从给定角度求正弦值。输入的角度可以是弧度、角度或分数。

| 参数名      | 说明                                                          |
| ----------- | ------------------------------------------------------------- |
| Float:value | 求正弦的角度。                                                |
| anglemode   | 要使用的[角度模式](../resources/anglemodes)，取决于输入的值。 |

## 返回值

输入值的正弦值。

## 案例

```c
GetPosInFrontOfPlayer(playerid, Float:distance, &Float:x, &Float:y, &Float:z)
{
    if (GetPlayerPos(playerid, x, y, z)) // 如果玩家未连接，则此函数返回0
    {
        new Float:z_angle;
        GetPlayerFacingAngle(playerid, z_angle);

        x += distance * floatsin(-z_angle, degrees); // GTA中的角度是逆时针方向的，所以我们需要反转检索到的角度
        y += distance * floatcos(-z_angle, degrees);

        return 1; // 成功时返回1，通过引用返回实际坐标
    }
    return 0; // 如果玩家没有连接，返回0
}
```

## 要点

:::warning

GTA/SA-MP 在大多数情况下使用角度来表示弧度，例如[GetPlayerFacingAngle](GetPlayerFacingAngle)。因此，你很可能想要使用“角度”模式，而不是弧度。还要注意 GTA 中的角度是逆时针的；270° 为东，90° 为西。南仍然是 180°，北仍然是 0°/360°。

:::

## 相关函数

- [floattan](floattan): 从特定角度求正切值。
- [floatcos](floatcos): 从特定角度求余弦值。
