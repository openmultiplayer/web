---
title: GetPVarNameAtIndex
sidebar_label: GetPVarNameAtIndex
description: 通过索引获取玩家变量的名称
tags: ["玩家变量", "pvar"]
---

## 描述

通过索引值获取玩家变量的名称

| 名称                   | 说明                               |
| ---------------------- | ---------------------------------- |
| playerid               | 需要获取变量名称的玩家 ID          |
| index                  | 玩家变量的索引编号（从 0 开始）    |
| output[]               | 存储变量名称的字符数组（引用传递） |
| size = sizeof (output) | 输出字符串的最大缓冲长度           |

## 返回值

本函数不直接返回值，变量名称将存储于指定字符数组中

## 相关函数

- [GetPVarType](GetPVarType): 获取玩家变量的数据类型
- [GetPVarInt](GetPVarInt): 获取玩家变量的整数值
- [GetPVarFloat](GetPVarFloat): 获取玩家变量的浮点数值
- [GetPVarString](GetPVarString): 获取玩家变量的字符串值
- [GetPVarsUpperIndex](GetPVarsUpperIndex): 获取玩家变量的最大索引值
