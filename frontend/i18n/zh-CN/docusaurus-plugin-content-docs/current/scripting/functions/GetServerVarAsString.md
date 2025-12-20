---
title: GetServerVarAsString
sidebar_label: GetServerVarAsString
description: 获取服务器变量的字符串值。
tags: []
---

:::warning

此函数自 0.3.7 R2 版本起已弃用，请使用 GetConsoleVarAsString

:::

## 描述

获取服务器变量的字符串值。

| 参数            | 说明                             |
| --------------- | -------------------------------- |
| const varname[] | 要获取值的字符串变量名称         |
| buffer[]        | 用于存储值的数组（通过引用传递） |
| len             | 应存储的字符串长度               |

## 返回值

返回字符串的长度。如果指定服务器变量不是字符串类型或不存在则返回 0。

## 示例

```c
public OnGameModeInit()
{
    new hostname[64];
    GetServerVarAsString("hostname", hostname, sizeof(hostname));
    printf("Hostname: %s", hostname);
}
```

## 注意事项

:::tip

当变量名为 filterscripts 或 plugins 时，此函数仅返回第一个滤镜脚本或插件的名称。这是一个已知缺陷。

:::

:::tip

在服务器控制台输入 'varlist' 可显示可用服务器变量及其类型列表。

:::

:::warning

在非字符串类型变量（整型/布尔型/浮点型）或不存在变量上使用此函数将导致服务器崩溃！这是一个已知缺陷。

:::

## 相关函数

- [GetServerVarAsInt](GetServerVarAsInt): 以整型获取服务器变量
- [GetServerVarAsBool](GetServerVarAsBool): 以布尔值获取服务器变量
