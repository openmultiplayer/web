---
title: floatsqroot
sidebar_label: floatsqroot
description: 计算指定浮点数的平方根。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

计算指定浮点数的平方根。

| 名称       | 描述                     |
| ---------- | ------------------------ |
| Float:数值 | 需要计算平方根的浮点数值 |

## 返回值

输入值的平方根（以浮点数形式返回）

## 示例

```c
new Float:sqroot = floatsqroot(25.0); // 返回5.0，因为5x5=25
```

## 注意事项

:::tip

当输入值为负数时，该函数会引发"定义域(domain)"错误。建议使用 [floatabs](floatabs) 获取绝对值（正数值）。

:::

## 相关函数

- [floatpower](floatpower): 对指定数值进行幂运算
- [floatlog](floatlog): 计算浮点数的对数
- [floatabs](floatabs): 获取浮点数的绝对值
