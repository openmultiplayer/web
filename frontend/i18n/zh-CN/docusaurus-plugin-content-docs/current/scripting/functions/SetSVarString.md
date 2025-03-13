---
title: SetSVarString
sidebar_label: SetSVarString
description: 设置字符串型服务器变量。
tags: ["服务器变量", "svar"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7 R2' />

## 描述

设置字符串型服务器变量。

| 名称             | 说明                       |
| ---------------- | -------------------------- |
| const svar[]     | 服务器变量名称             |
| const value[]    | 要设置的字符串值           |
| OPEN_MP_TAGS:... | 不定数量的任意标签类型参数 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。变量名为空或超过 40 字符。

## 示例

```c
// 设置版本号
SetSVarString("Version", "0.3.7");

// 打印服务器版本
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("版本号: %s", string);
```

## 相关函数

- [SetSVarInt](SetSVarInt): 设置整型服务器变量
- [GetSVarInt](GetSVarInt): 获取整型服务器变量值
- [GetSVarString](GetSVarString): 获取字符串型服务器变量值
- [SetSVarFloat](SetSVarFloat): 设置浮点型服务器变量
- [GetSVarFloat](GetSVarFloat): 获取浮点型服务器变量值
- [DeleteSVar](DeleteSVar): 删除服务器变量
