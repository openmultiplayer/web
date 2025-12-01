---
title: GetMenuItems
sidebar_label: GetMenuItems
description: 获取指定列中的行数。
tags: ["菜单"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定列中的行数。

| 参数名      | 说明                    |
| ----------- | ----------------------- |
| Menu:menuid | 要查询的菜单 ID         |
| column      | 列索引（从 0 开始计数） |

## 返回值

返回指定列中的行数。

## 示例代码

```c
// 获取菜单第1列的行数
new items = GetMenuItems(menuid, 1);
```

## 相关函数

- [GetMenuColumns](GetMenuColumns): 获取菜单激活列数
- [GetMenuItem](GetMenuItem): 通过行列索引获取单元格文本
