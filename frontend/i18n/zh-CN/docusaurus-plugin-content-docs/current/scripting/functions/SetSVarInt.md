---
title: SetSVarInt
sidebar_label: SetSVarInt
description: 设置整型服务器变量。
tags: ["服务器变量"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7 R2' />

## 描述

设置整型服务器变量。

| 参数         | 说明           |
| ------------ | -------------- |
| const svar[] | 服务器变量名称 |
| value        | 要设置的整数值 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（变量名为空或超过 40 字符）

## 示例

```c
// 设置版本号
SetSVarInt("Version", 37);

// 打印服务器当前版本
printf("版本号: %d", GetSVarInt("Version"));
```

## 相关函数

- [GetSVarInt](GetSVarInt): 获取整型服务器变量值
- [SetSVarString](SetSVarString): 设置字符串类型服务器变量
- [GetSVarString](GetSVarString): 获取字符串类型服务器变量值
- [SetSVarFloat](SetSVarFloat): 设置浮点型服务器变量
- [GetSVarFloat](GetSVarFloat): 获取浮点型服务器变量值
- [DeleteSVar](DeleteSVar): 删除服务器变量
