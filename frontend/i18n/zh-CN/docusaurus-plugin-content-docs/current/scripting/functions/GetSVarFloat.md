---
title: GetSVarFloat
sidebar_label: GetSVarFloat
description: 获取浮点型服务器变量的值。
tags: ["服务器变量"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7 R2' />

## 描述

获取浮点型服务器变量的值。

| 参数         | 说明                                                                    |
| ------------ | ----------------------------------------------------------------------- |
| const svar[] | 服务器变量名称（不区分大小写）<br/>通过[SetSVarFloat](SetSVarFloat)设置 |

## 返回值

返回指定服务器变量的浮点值。

即使变量未设置仍会返回 0.0。

## 示例

```c
// 设置版本号
SetSVarFloat("Version", 0.37);

// 打印服务器当前版本
printf("Version: %.2f", GetSVarFloat("Version"));
```

## 相关函数

- [SetSVarInt](SetSVarInt): 设置整型服务器变量
- [GetSVarInt](GetSVarInt): 获取整型服务器变量
- [SetSVarString](SetSVarString): 设置字符串型服务器变量
- [GetSVarString](GetSVarString): 获取字符串型服务器变量
- [SetSVarFloat](SetSVarFloat): 设置浮点型服务器变量
- [DeleteSVar](DeleteSVar): 删除服务器变量
