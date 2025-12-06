---
title: argindex
sidebar_label: argindex
description: 获取在--之后指定索引位置的参数名称
tags: ["参数", "命令行参数"]
---

## 描述

获取通过双破折号(--)传递的指定索引位置的参数名称。

| 参数                  | 说明                              |
| --------------------- | --------------------------------- |
| index                 | 基于零的偏移索引（从 0 开始计数） |
| value[]               | 用于存储参数名称的字符串缓冲区    |
| size = sizeof (value) | 目标缓冲区的大小                  |
| bool:pack = false     | 是否对返回值进行打包              |

## 返回值

**true** - 参数存在，**false** - 参数不存在。

## 注意事项

独立参数同样计入索引计数。例如：

在 `--load test --run` 中，参数 `--run` 的索引值为 `2`。

## 相关函数

- [argcount](argcount): 获取命令行参数数量
- [argstr](argstr): 通过参数名获取字符串值
- [argvalue](argvalue): 获取命令行参数的数值形式
