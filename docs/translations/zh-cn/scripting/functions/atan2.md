---
title: atan
description: 以度为单位求正切的多值倒数。
tags: ["math"]
---

<LowercaseNoteCN />

:::warning

请注意，y 值是第一个参数，x 值是第二个参数。这是因为数学符号是 y/x(即 y 除以 x)，而惯例是按照对它们执行的操作顺序写入操作数。

:::

## 描述

以度为单位求正切的多值倒数。在三角函数中，反正切是正切的逆运算。为了计算该值，该函数会考虑两个参数的符号以确定象限。

| 参数名  | 说明                  |
| ------- | --------------------- |
| Float:y | 表示 y 坐标比例的值。 |
| Float:x | 表示 x 坐标比例的值。 |

## 返回值

以度为单位的角度，在[-180.0，+180.0]的区间内。

## 案例

```c
// (x=-10.000000，y=10.000000)的反正切是135.000000度。

public OnGameModeInit()
{
    new Float:x, Float:y, Float:result;
    x = -10.0;
    y = 10.0;
    result = atan2(y, x);
    printf("(x=%f，y=%f)的反正切为%f度。", x, y, result);
    return 1;
}
```

## 相关函数

- [floatsin](floatsin): 从特定角度求正弦值。
- [floatcos](floatcos): 从特定角度求余弦值。
- [floattan](floattan): 从特定角度求正切值。
- [asin](asin): 以度为单位求正弦值的倒数。
- [acos](acos): 以度为单位求余弦函数的倒数。
- [atan](atan): 以度为单位求正切值的倒数。
