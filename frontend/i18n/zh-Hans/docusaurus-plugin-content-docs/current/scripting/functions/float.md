---
title: float
sidebar_label: float
description: 将整数转换为浮点数。
tags: ["浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

将整数转换为浮点数。

| 名称  | 描述               |
| ----- | ------------------ |
| value | 需要转换的整数数值 |

## 返回值

转换后的浮点数值

## 示例

```c
new Float:FloatValue;
new Value = 52;
FloatValue = float(Value);   // 将Value(52)转换为浮点数并存入'FloatValue'（结果为52.0）
```

## 相关函数

- [floatround](floatround): 将浮点数转换为整数（四舍五入）
- [floatstr](floatstr): 将字符串转换为浮点数
