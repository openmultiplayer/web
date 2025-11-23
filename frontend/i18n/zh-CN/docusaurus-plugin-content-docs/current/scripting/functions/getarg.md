---
title: getarg
sidebar_label: getarg
description: 获取传递给函数的参数。
tags: ["核心", "参数"]
---

<LowercaseNoteZH_CN />

## 描述

获取传递给函数的参数。

| 参数名 | 说明                             |
| ------ | -------------------------------- |
| arg    | 参数序号（0 表示第一个参数）     |
| index  | 数组参数的索引（可选，默认为 0） |

## 返回值

返回参数的对应值。

## 示例代码

```c
SomeFunc(...)
{
    printf("%i", getarg(3));  // 获取第四个参数的值
}

public OnFilterScriptInit()
{
    SomeFunc(1, 3, 3, 7);     // 传入四个参数
}

// 输出：7（第四个参数，索引3的值为7）
```

## 相关函数

- [numargs](numargs): 获取参数数量
- [setarg](setarg): 设置参数值
