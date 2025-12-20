---
title: GetMenuColumnHeader
sidebar_label: GetMenuColumnHeader
description: 获取指定列标题中的文本内容。
tags: ["菜单"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定列标题中的文本内容。

| 参数                  | 说明                               |
| --------------------- | ---------------------------------- |
| Menu:menuid           | 要查询的菜单 ID                    |
| column                | 列索引（从 0 开始计数）            |
| header[]              | 存储标题文本的数组变量（引用传递） |
| len = sizeof (header) | 存储文本的数组容量长度             |

## 返回值

此函数始终返回 **true**。

## 示例代码

```c
new text[32];

// 获取菜单第1列的标题文本
GetMenuColumnHeader(menuid, 1, text, sizeof(text));
```

## 相关函数

- [CreateMenu](CreateMenu): 创建新菜单
