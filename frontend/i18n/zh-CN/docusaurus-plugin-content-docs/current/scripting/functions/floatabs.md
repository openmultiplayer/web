---
title: floatabs
sidebar_label: floatabs
description: 返回浮点数的绝对值。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

返回指定浮点数的绝对值。

| 参数        | 说明                   |
| ----------- | ---------------------- |
| Float:value | 要计算绝对值的浮点数值 |

## 返回值

浮点数的绝对值（以浮点数形式返回）

## 示例

```c
new Float:value;

value = floatabs(47.0); // 返回47.0

value = floatabs(-47.0); // 同样返回47.0
```

## 相关函数

- [float](float): 将整数转换为浮点数
- [floatround](floatround): 对浮点数进行四舍五入取整
- [floatsqroot](floatsqroot): 计算浮点数的平方根
