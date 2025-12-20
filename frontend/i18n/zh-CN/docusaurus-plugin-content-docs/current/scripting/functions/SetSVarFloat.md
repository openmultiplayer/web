---
title: SetSVarFloat
sidebar_label: SetSVarFloat
description: 设置浮点型服务器变量。
tags: ["服务器变量"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7 R2' />

## 描述

设置浮点型服务器变量。

| 参数         | 说明             |
| ------------ | ---------------- |
| const svar[] | 服务器变量名称   |
| Float:value  | 要设置的浮点数值 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（变量名为空或超过 40 字符）

## 示例代码

```c
// 设置版本号
SetSVarFloat("Version", 0.37);

// 打印服务器版本号
printf("当前版本: %.2f", GetSVarFloat("Version"));
```

## 相关函数

- [SetSVarInt](SetSVarInt): 设置整型服务器变量
- [GetSVarInt](GetSVarInt): 获取服务器变量的整数值
- [SetSVarString](SetSVarString): 设置字符串型服务器变量
- [GetSVarString](GetSVarString): 获取服务器变量的字符串值
- [GetSVarFloat](GetSVarFloat): 获取服务器变量的浮点数值
- [DeleteSVar](DeleteSVar): 删除服务器变量
