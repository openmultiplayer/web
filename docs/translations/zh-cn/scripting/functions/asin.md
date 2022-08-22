---
title: asin
description: 以度为单位求正弦值的倒数。
tags: ["math"]
---

<LowercaseNoteCN />

## 描述

以度为单位求正弦值的倒数。在三角函数中，反正弦是正弦的逆运算。

| 参数名      | 说明                               |
| ----------- | ---------------------------------- |
| Float:value | 以区间[-1，+1]为单位计算的正弦值。 |

## 返回值

以度为单位的角度，在区间[-90.0，+90.0]内。

## 案例

```c
// 0.500000的反正弦值是30.000000度。

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = asin(param);
    printf(" %f 的正弦是 %f 度。", param, result);
    return 1;
}
```

## 相关函数

- [floatsin](floatsin): 从特定角度求正弦值。
- [floatcos](floatcos): 从特定角度求余弦值。
- [floattan](floattan): 从特定角度求正切值。
- [acos](acos): 以度为单位求余弦函数的倒数。
- [atan](atan): 以度为单位求正切值的倒数。
- [atan2](atan2): 以度为单位求正切的多值倒数。
