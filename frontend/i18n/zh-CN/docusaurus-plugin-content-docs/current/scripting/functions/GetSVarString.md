---
title: GetSVarString
sidebar_label: GetSVarString
description: 获取字符串型服务器变量的值。
tags: ["服务器变量", "svar"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7 R2' />

## 描述

获取字符串型服务器变量的值。

| 参数名                | 说明                                                                      |
| --------------------- | ------------------------------------------------------------------------- |
| const svar[]          | 服务器变量名称（不区分大小写）<br/>通过[SetSVarString](SetSVarString)设置 |
| output[]              | 存储字符串值的数组（通过引用传递）                                        |
| len = sizeof (output) | 返回字符串的最大长度                                                      |

## 返回值

返回字符串的长度。

## 示例

```c
// 设置版本号
SetSVarString("Version", "0.3.7");

// 打印服务器当前版本
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```

## 相关函数

- [SetSVarInt](SetSVarInt): 设置整型服务器变量
- [GetSVarInt](GetSVarInt): 获取整型服务器变量
- [SetSVarString](SetSVarString): 设置字符串型服务器变量
- [SetSVarFloat](SetSVarFloat): 设置浮点型服务器变量
- [GetSVarFloat](GetSVarFloat): 获取浮点型服务器变量
- [DeleteSVar](DeleteSVar): 删除服务器变量
