---
title: atan
description: 以度为单位求正切值的倒数。
tags: ["math"]
---

<LowercaseNoteCN />

## 描述

以度为单位求正切值的倒数。在三角函数中，反正切是正切的逆运算。请注意，由于符号模糊，该函数无法仅通过正切值确定角度落在哪个象限。请参见[atan2](atan2)以了解采用分数参数的替代方案。

| 参数名      | 说明                 |
| ----------- | -------------------- |
| Float:value | 用于计算反正切的值。 |

## 返回值

以度为单位的角度，在区间[-90.0，+90.0]内。

## 案例

```c
// 1.000000的反正切值是45.000000度。

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param);
    printf("%f 的反正切是 %f 度。", param, result);
    return 1;
}
```

## 相关函数

- [floatsin](floatsin): 从特定角度求正弦值。
- [floatcos](floatcos): 从特定角度求余弦值。
- [floattan](floattan): 从特定角度求正切值。
- [asin](asin): 以度为单位求正弦值的倒数。
- [acos](acos): 以度为单位求余弦函数的倒数。
- [atan2](atan2): 以度为单位求正切的多值倒数。
