---
title: GetMenuColumns
sidebar_label: GetMenuColumns
description: 获取菜单中当前激活的列数。
tags: ["菜单"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取菜单中当前激活的列数。

| 参数        | 说明                |
| ----------- | ------------------- |
| Menu:menuid | 要获取列数的菜单 ID |

## 返回值

返回激活的列数。

## 示例代码

```c
new columns = GetMenuColumns(menuid);  // 获取激活的列数
```

## 相关函数

- [GetMenuItems](GetMenuItems): 获取菜单项列表
- [GetMenuItem](GetMenuItem): 通过行列索引获取单元格文本
