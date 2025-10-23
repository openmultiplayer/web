---
title: floatsub
sidebar_label: floatsub
description: 将一个浮点数减去另一个浮点数。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

执行浮点数减法运算。注意：此函数实际用途有限，因为可以直接使用标准减法运算符(-)替代。

| 名称        | 描述                   |
| ----------- | ---------------------- |
| Float:oper1 | 第一个浮点数（被减数） |
| Float:oper2 | 第二个浮点数（减数）   |

## 返回值

两个浮点数的差值

## 示例

```c
public OnGameModeInit()
{
    new Float:Number1 = 5.0, Float:Number2 = 2.0; // 声明两个浮点数 Number1(5.0) 和 Number2(2.0)
    new Float:Difference;
    Difference = floatsub(Number1, Number2); // 将两数的差值(=5.0-2.0=3.0)存入浮点变量"Difference"
    return 1;
}
```

## 相关函数

- [floatadd](floatadd): 将两个浮点数相加
- [floatmul](floatmul): 执行浮点数乘法运算
- [floatdiv](floatdiv): 执行浮点数除法运算
