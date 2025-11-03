---
title: GetMenuColumnWidth
sidebar_label: GetMenuColumnWidth
description: 获取菜单中一列或两列的宽度。
tags: ["菜单"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取菜单中一列或两列的宽度。

| 参数名              | 说明                                                 |
| ------------------- | ---------------------------------------------------- |
| Menu:menuid         | 要获取列宽的菜单 ID                                  |
| &Float:column1Width | 浮点变量（引用传递），用于存储第一列宽度             |
| &Float:column2Width | 浮点变量（引用传递），用于存储第二列宽度（可选参数） |

## 返回值

本函数始终返回 **true**。

## 示例代码

```c
new Float:column1Width, Float:column2Width;
GetMenuColumnWidth(menuid, column1Width, column2Width);  // 获取双列宽度

// 若只需获取第一列宽度
new Float:column1Width;
GetMenuColumnWidth(menuid, column1Width);
```

## 相关函数

- [GetMenuPos](GetMenuPos): 获取菜单在屏幕上的 X/Y 坐标位置
