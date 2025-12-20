---
title: numargs
sidebar_label: numargs
description: 获取函数接收的参数数量
tags: ["核心", "参数"]
---

<LowercaseNoteZH_CN />

## 描述

用于获取函数接收的参数数量

## 示例

```c
SomeFunction(...)
{
    printf("numargs(): %i", numargs());
}

public OnFilterScriptInit()
{
    SomeFunction(1, 2, 3);
}

// 输出: "numargs(): 3"
// 因为传递了三个参数（1, 2, 3）
```

## 相关函数

- [getarg](getarg): 从可变参数列表获取指定参数
- [setarg](setarg): 设置可变参数的值
