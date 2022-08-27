---
title: acos
description: 以度为单位求余弦函数的倒数。
tags: ["math"]
---

<LowercaseNoteCN />

## 描述

以度为单位求余弦函数的倒数。在三角函数中，反余弦是余弦的逆运算。

| 参数名      | 说明                            |
| ----------- | ------------------------------- |
| Float:value | 在区间内计算其反余弦值 [-1,+1]. |

## 返回值

以度为单位的角度，在区间[0.0,180.0]内。

## 案例

```c
// 余弦0.500000是60.000000度。

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("反余弦 %f 等于 %f 度。", param, result);
    return 1;
}
```

## 相关函数

- [floatsin](floatsin): 从特定角度求正弦值。
- [floatcos](floatcos): 从特定角度求余弦值。
- [floattan](floattan): 从特定角度求正切值。
- [asin](asin): 以度为单位求正弦值的倒数。
- [atan](atan): 以度为单位求正切值的倒数。
- [atan2](atan2): 以度为单位求正切的多值倒数。
