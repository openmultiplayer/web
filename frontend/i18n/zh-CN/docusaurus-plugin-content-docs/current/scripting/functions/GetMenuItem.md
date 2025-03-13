---
title: GetMenuItem
sidebar_label: GetMenuItem
description: 通过列和行索引获取指定单元格中的文本内容。
tags: ["菜单"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

通过列和行索引获取指定单元格中的文本内容。

| 参数名      | 说明                               |
| ----------- | ---------------------------------- |
| Menu:menuid | 要查询的菜单 ID                    |
| column      | 列索引（从 0 开始计数）            |
| row         | 行索引（从 0 开始计数）            |
| cell[]      | 存储文本内容的数组变量（引用传递） |
| len         | 存储数组的容量长度                 |

## 返回值

本函数始终返回 true。

## 示例代码

```c
new text[32];

// 获取第1列第2行的菜单项文本
GetMenuItem(menuid, 1, 2, text, sizeof(text));
```

## 相关函数

- [GetMenuItems](GetMenuItems.md): 获取菜单项列表
- [GetMenuColumns](GetMenuColumns.md): 获取菜单激活列数
