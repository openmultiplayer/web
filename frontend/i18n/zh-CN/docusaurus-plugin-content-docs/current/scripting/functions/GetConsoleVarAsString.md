---
title: GetConsoleVarAsString
sidebar_label: GetConsoleVarAsString
description: 获取控制台变量的字符串类型值。
tags: []
---

## 描述

获取控制台变量的字符串类型值。

| 参数名          | 说明                             |
| --------------- | -------------------------------- |
| const cvar[]    | 要获取的字符串类型控制台变量名称 |
| buffer[]        | 存储值的数组变量（引用传递）     |
| len（数组长度） | 存储字符串的缓冲区长度           |

## 返回值

返回字符串的实际长度。若变量不存在或类型不符返回 0。

## 示例代码

```c
public OnGameModeInit()
{
    new hostname[64];
    GetConsoleVarAsString("hostname", hostname, sizeof(hostname));  // 获取服务器名称
    printf("服务器名称: %s", hostname);  // 输出字符串值
}
```

## 注意事项

:::tip

当变量名为"filterscripts"或"plugins"时，本函数仅返回第一个滤镜脚本/插件的名称。

:::

:::tip

在服务器控制台输入 `varlist` 可查看所有可用控制台变量及其类型。

:::

:::warning

- 在旧版本中，对非字符串类型变量（整型/布尔型/浮点型）使用本函数会导致服务器崩溃（open.mp 已修复）
- 在旧版本中，对不存在的变量使用本函数会导致服务器崩溃（open.mp 已修复）

:::

## 相关函数

- [GetConsoleVarAsInt](GetConsoleVarAsInt): 以整型形式获取控制台变量
- [GetConsoleVarAsBool](GetConsoleVarAsBool): 以布尔值形式获取控制台变量
