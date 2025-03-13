---
title: floatfract
sidebar_label: floatfract
description: 获取浮点数的小数部分。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

获取浮点数的小数部分，即小数点后的数值部分。

| 名称        | 描述                       |
| ----------- | -------------------------- |
| Float:value | 需要获取小数部分的浮点数值 |

## 返回值

浮点数的小数部分（以浮点数形式返回）

## 示例

```c
new Float:fFract = floatfract(3.14159); // 返回0.14159
```

## 相关函数

- [floatround](floatround): 将浮点数转换为整数（四舍五入）
- [floatfloor](floatfloor): 获取浮点数的整数部分（向下取整）
- [floatceil](floatceil): 获取浮点数的整数部分（向上取整）
