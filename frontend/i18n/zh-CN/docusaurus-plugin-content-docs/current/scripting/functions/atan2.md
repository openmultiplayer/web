---
title: atan2
sidebar_label: atan2
description: 计算多值反正切角度（以度为单位）
tags: ["数学"]
---

<LowercaseNoteZH_CN />

:::warning

注意参数顺序为 y 值在前，x 值在后。这是为了符合数学中 y/x 的运算顺序惯例。

:::

## 描述

计算基于两个坐标值的多值反正切角度（以度为单位）。此函数通过考虑 x 和 y 的符号来精确判断角度所在的象限。

| 参数名  | 说明                  |
| ------- | --------------------- |
| Float:y | 表示 y 坐标比例的数值 |
| Float:x | 表示 x 坐标比例的数值 |

## 返回值

以度为单位的反正切角度，取值范围[-180.0, +180.0]。

## 示例

```c
// 坐标(x=-10.000000, y=10.000000)的反正切值为135.000000度

public OnGameModeInit()
{
    new Float:x, Float:y, Float:result;
    x = -10.0;
    y = 10.0;
    result = atan2(y, x);
    printf("坐标(x=%f, y=%f)的反正切值为%f度", x, y, result);
    return 1;
}
```

## 相关函数

- [floatsin](正弦): 获取指定角度的正弦值
- [floatcos](余弦): 获取指定角度的余弦值
- [floattan](正切): 获取指定角度的正切值
- [asin](反正弦): 计算反正弦角度值
- [acos](反余弦): 计算反余弦角度值
- [atan](反正切): 计算单值反正切角度值
