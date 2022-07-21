---
title: floatcos
description: 从特定角度求余弦值。
tags: ["math", "floating-point"]
---

<LowercaseNote />

## 描述

从特定角度求余弦值。输入的角度可以是弧度、角度或分数。

| 参数名      | 说明                                                          |
| ----------- | ------------------------------------------------------------- |
| Float:value | 求余弦的角度。                                                |
| anglemode   | 要使用的[角度模式](../resources/anglemodes)，取决于输入的值。 |

## 返回值

输入值的余弦值。

## 案例

```c
public OnGameModeInit()
{
    printf("90° 的余弦是 %f", floatcos(90.0, degrees));
    // 输出: 0
    return 1;
}
```

## 要点

:::warning

GTA/SA-MP 在大多数情况下使用角度来表示弧度，例如[GetPlayerFacingAngle](GetPlayerFacingAngle)。因此，你很可能想要使用“角度”模式，而不是弧度。还要注意 GTA 中的角度是逆时针的；270° 为东，90° 为西。南仍然是 180°，北仍然是 0°/360°。

:::

## 相关函数

- [floatsin](floatsin): 从特定角度求正弦值。
- [floattan](floattan): 从特定角度求正切值。
