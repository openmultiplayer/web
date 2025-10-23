---
title: floatadd
sidebar_label: floatadd
description: 对两个浮点数进行加法运算。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

将两个浮点数相加。此函数功能与标准运算符(+)重复。

| 名称          | 描述         |
| ------------- | ------------ |
| Float:Number1 | 第一个浮点数 |
| Float:Number2 | 第二个浮点数 |

## 返回值

两个浮点数的和。

## 示例

```c
public OnGameModeInit()
{
    new Float:Number1 = 2, Float:Number2 = 3; // 声明两个浮点数 Number1(2) 和 Number2(3)
    new Float:Sum;
    Sum = floatadd(Number1, Number2); // 将两个数的和(=2+3=5)存入浮点变量"Sum"
    return 1;
}
```

## 相关函数

- [Floatsub](Floatsub): 浮点数减法运算
- [Floatmul](Floatmul): 浮点数乘法运算
- [Floatdiv](Floatdiv): 浮点数除法运算
