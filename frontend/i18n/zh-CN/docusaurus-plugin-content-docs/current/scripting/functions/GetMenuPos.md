---
title: GetMenuPos
sidebar_label: GetMenuPos
description: 获取菜单在屏幕上的X/Y坐标位置。
tags: ["菜单"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取菜单在屏幕上的 X/Y 坐标位置。

| 参数名      | 说明                                    |
| ----------- | --------------------------------------- |
| Menu:menuid | 要获取位置的菜单 ID                     |
| &Float:x    | 浮点变量（引用传递），用于存储 X 轴坐标 |
| &Float:y    | 浮点变量（引用传递），用于存储 Y 轴坐标 |

## 返回值

本函数始终返回 true。

## 示例代码

```c
new Float:x, Float:y;
GetMenuPos(menuid, x, y);  // 获取菜单位置坐标
```

## 相关函数

- [GetMenuColumnWidth](GetMenuColumnWidth): 获取菜单列宽
