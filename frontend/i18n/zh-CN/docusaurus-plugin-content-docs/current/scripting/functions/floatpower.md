---
title: floatpower
sidebar_label: floatpower
description: 对给定数值进行幂运算。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

对指定浮点数值进行幂运算，将其提升至给定指数次方。

| 参数           | 说明                               |
| -------------- | ---------------------------------- |
| Float:value    | 需要进行幂运算的浮点基数值         |
| Float:exponent | 指数值（浮点数类型，允许零或负值） |

## 返回值

返回基数的指数次方运算结果

## 示例

```c
printf("2的8次方结果是 %.1f", floatpower(2.0, 8.0));
// 输出结果: 256.0
```

## 相关函数

- [floatsqroot](floatsqroot): 计算浮点数的平方根
- [floatlog](floatlog): 计算浮点数的对数
- [floatmul](floatmul): 执行浮点数乘法运算
