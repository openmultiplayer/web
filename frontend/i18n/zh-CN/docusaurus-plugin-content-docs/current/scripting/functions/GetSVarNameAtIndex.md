---
title: GetSVarNameAtIndex
sidebar_label: GetSVarNameAtIndex
description: 通过索引获取服务器变量名称
tags: ["服务器变量"]
---

## 描述

通过索引获取服务器变量的名称

| 参数                   | 说明                             |
| ---------------------- | -------------------------------- |
| index                  | 服务器变量的索引值               |
| output[]               | 存储变量名的数组（通过引用传递） |
| size = sizeof (output) | 返回字符串的最大长度             |

## 返回值

此函数不返回特定值。

## 相关函数

- [GetSVarType](GetSVarType): 获取服务器变量类型
- [GetSVarInt](GetSVarInt): 获取整型服务器变量
- [GetSVarFloat](GetSVarFloat): 获取浮点型服务器变量
- [GetSVarString](GetSVarString): 获取字符串型服务器变量
