---
title: floatmul
sidebar_label: floatmul
description: 将两个浮点数相乘。
tags: ["数学", "浮点数"]
---

<LowercaseNoteZH_CN />

## 描述

将两个浮点数相乘。

| 参数        | 说明                   |
| ----------- | ---------------------- |
| Float:oper1 | 第一个浮点数（被乘数） |
| Float:oper2 | 第二个浮点数（乘数）   |

## 返回值

两个浮点数的乘积

## 示例

```c
public OnGameModeInit()
{
    new Float:Number1 = 2.3, Float:Number2 = 3.5; // 声明两个浮点数 Number1(2.3) 和 Number2(3.5)
    new Float:Product;
    Product = floatmul(Number1, Number2); // 将乘积结果(=2.3*3.5=8.05)存入浮点变量"Product"
    return 1;
}
```

## 注意事项

:::tip

此函数功能与乘法运算符(\*)重复，建议直接使用运算符。

:::

## 相关函数

- [floatadd](floatadd): 将两个浮点数相加
- [floatsub](floatsub): 浮点数减法运算
- [floatdiv](floatdiv): 浮点数除法运算
