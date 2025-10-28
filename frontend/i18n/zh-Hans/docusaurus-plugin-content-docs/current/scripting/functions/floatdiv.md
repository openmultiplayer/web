---
title: floatdiv
sidebar_label: floatdiv
description: 将一个浮点数除以另一个浮点数。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

将一个浮点数除以另一个浮点数。此函数功能与除法运算符(/)重复。

| 参数           | 说明             |
| -------------- | ---------------- |
| Float:dividend | 被除数的浮点数值 |
| Float:divisor  | 除数的浮点数值   |

## 返回值

两个浮点数相除的商。

## 示例

```c
public OnGameModeInit()
{
    new Float:Number1 = 8.05, Float:Number2 = 3.5; // 声明两个浮点数 Number1(8.05) 和 Number2(3.5)
    new Float:Quotient;
    Quotient = floatdiv(Number1, Number2); // 将两数的商(=8.05/3.5=2.3)存入浮点变量"Quotient"
    return 1;
}
```

## 相关函数

- [floatadd](floatadd): 将两个浮点数相加
- [floatsub](floatsub): 浮点数减法运算
- [floatmul](floatmul): 浮点数乘法运算
