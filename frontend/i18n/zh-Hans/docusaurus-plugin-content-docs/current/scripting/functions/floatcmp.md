---
title: floatcmp
sidebar_label: floatcmp
description: 用于比较两个浮点数值以验证比较结果。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

该函数用于比较两个浮点数值，验证它们的比较关系。

| 名称        | 描述                   |
| ----------- | ---------------------- |
| Float:oper1 | 要比较的第一个浮点数值 |
| Float:oper2 | 要比较的第二个浮点数值 |

## 返回值

- **0**：数值相等
- **1**：第一个值更大
- **-1**：第二个值更大

## 示例

```c
new value;

value = floatcmp(2.0, 2.0); // 返回0，因为数值相等

value = floatcmp(1.0, 2.0); // 返回-1，因为第二个值更大

value = floatcmp(2.0, 1.0); // 返回1，因为第一个值更大
```

## 相关函数

- [float](float): 将整数转换为浮点数
- [floatround](floatround): 浮点数四舍五入取整
- [floatsqroot](floatsqroot): 计算浮点数的平方根
