---
title: asin
sidebar_label: asin
description: 获取正弦值的反正弦角度（以度为单位）
tags: ["数学"]
---

<LowercaseNoteZH_CN />

## 描述

计算指定正弦值的反正弦角度（以度为单位）。在三角函数中，反正弦是正弦的逆运算。

| 参数        | 说明                                     |
| ----------- | ---------------------------------------- |
| Float:value | 需要计算反正弦值的数值，取值范围[-1, +1] |

## 返回值

以度为单位的反正弦角度，取值范围[-90.0, +90.0]。

## 示例

```c
// 数值0.500000的反正弦值为30.000000度

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = asin(param);
    printf("数值%f的反正弦值为%f度", param, result);
    return 1;
}
```

## 相关函数

- [floatsin](floatsin): 获取指定角度的正弦值
- [floatcos](floatcos): 获取指定角度的余弦值
- [floattan](floattan): 获取指定角度的正切值
- [acos](acos): 计算反余弦角度值
- [atan](atan): 计算反正切角度值
- [atan2](atan2): 计算多值反正切角度值
