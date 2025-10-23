---
title: setarg
sidebar_label: setarg
description: 设置传递给函数的参数。
tags: ["核心", "参数", "args"]
---

<LowercaseNoteZH_CN />

## 描述

设置传递给函数的参数。

| 参数名 | 描述                                     |
| ------ | ---------------------------------------- |
| arg    | 参数序号（0 表示第一个参数）             |
| index  | 索引（若参数是数组）_（可选，默认为 0）_ |
| value  | 要设置的参数值                           |

## 返回值

成功返回**1**，若参数或索引无效则返回**0**。

## 相关函数

- [getarg](getarg): 从可变参数列表中获取参数
- [numargs](numargs): 返回参数数量
