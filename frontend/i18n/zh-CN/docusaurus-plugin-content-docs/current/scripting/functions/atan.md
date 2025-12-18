---
title: atan
sidebar_label: atan
description: 计算单值反正切角度（以度为单位）
tags: ["数学"]
---

<LowercaseNoteZH_CN />

## 描述

计算指定正切值的单值反正切角度（以度为单位）。在三角函数中，反正切是正切的逆运算。注意由于符号歧义，此函数无法单独确定角度所在象限。建议需要精确判断时使用[atan2](多值反正切)函数。

| 参数        | 说明                   |
| ----------- | ---------------------- |
| Float:value | 需要计算反正切值的数值 |

## 返回值

以度为单位的反正切角度，取值范围[-90.0, +90.0]。

## 示例

```c
// 数值1.000000的反正切值为45.000000度

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param);
    printf("数值%f的反正切值为%f度", param, result);
    return 1;
}
```

## 相关函数

- [floatsin](正弦): 获取指定角度的正弦值
- [floatcos](余弦): 获取指定角度的余弦值
- [floattan](正切): 获取指定角度的正切值
- [asin](反正弦): 计算反正弦角度值
- [acos](反余弦): 计算反余弦角度值
- [atan2](多值反正切): 计算精确象限的多值反正切
