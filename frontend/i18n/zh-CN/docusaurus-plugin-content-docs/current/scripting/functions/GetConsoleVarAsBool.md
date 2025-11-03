---
title: GetConsoleVarAsBool
sidebar_label: GetConsoleVarAsBool
description: 获取控制台变量的布尔类型值。
tags: []
---

## 描述

获取控制台变量的布尔类型值。

| 参数名       | 说明                           |
| ------------ | ------------------------------ |
| const cvar[] | 要获取的布尔类型控制台变量名称 |

## 返回值

返回指定控制台变量的布尔值。若变量不存在或类型不符返回 0。

## 示例代码

```c
public OnGameModeInit()
{
    new queryEnabled = GetConsoleVarAsBool("enable_query");
    if (!queryEnabled)
    {
        print("警告：查询功能已禁用，服务器将不会显示在服务器列表中。");
    }
    return 1;
}
```

## 注意事项

:::tip

在服务器控制台输入 `varlist` 可查看所有可用控制台变量及其类型。

:::

## 相关函数

- [GetConsoleVarAsString](GetConsoleVarAsString): 以字符串形式获取控制台变量
- [GetConsoleVarAsInt](GetConsoleVarAsInt): 以整型形式获取控制台变量
