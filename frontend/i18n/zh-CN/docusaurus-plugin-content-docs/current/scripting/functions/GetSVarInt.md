---
title: GetSVarInt
sidebar_label: GetSVarInt
description: 获取整型服务器变量的值。
tags: ["服务器变量", "svar"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7 R2' />

## 描述

获取整型服务器变量的值。

| 参数名       | 说明                                                                |
| ------------ | ------------------------------------------------------------------- |
| const svar[] | 服务器变量名称（不区分大小写）<br/>通过[SetSVarInt](SetSVarInt)设置 |

## 返回值

返回指定服务器变量的整型值。

即使变量未设置仍会返回 0。

## 示例

```c
// 设置版本号
SetSVarInt("Version", 37);

// 打印服务器当前版本
printf("Version: %d", GetSVarInt("Version"));
```

## 相关函数

- [SetSVarInt](SetSVarInt): 设置整型服务器变量
- [SetSVarString](SetSVarString): 设置字符串型服务器变量
- [GetSVarString](GetSVarString): 获取字符串型服务器变量
- [SetSVarFloat](SetSVarFloat): 设置浮点型服务器变量
- [GetSVarFloat](GetSVarFloat): 获取浮点型服务器变量
- [DeleteSVar](DeleteSVar): 删除服务器变量
