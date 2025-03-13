---
title: acos
sidebar_label: acos
description: 获取余弦值的反函数角度（以度为单位）
tags: ["数学"]
---

<LowercaseNoteZH_CN />

## 描述

获取余弦值的反函数角度（以度为单位）。在三角函数中，反余弦是余弦的逆运算。

| 参数名      | 说明                                      |
| ----------- | ----------------------------------------- |
| Float:value | 需要计算反余弦的数值，取值范围为[-1,+1]。 |

## 返回值

以度为单位的角度值，取值范围[0.0,180.0]。

## 示例

```c
// 数值0.500000的反余弦值为60.000000度

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("数值%f的反余弦值为%f度", param, result);
    return 1;
}
```

## 相关函数

- [floatsin](floatsin): 获取指定角度的正弦值
- [floatcos](floatcos): 获取指定角度的余弦值
- [floattan](floattan): 获取指定角度的正切值
- [asin](asin): 获取正弦值的反函数角度（以度为单位）
- [atan](atan): 获取正切值的反函数角度（以度为单位）
- [atan2](atan2): 获取多值正切的反函数角度（以度为单位）
