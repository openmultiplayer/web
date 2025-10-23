---
title: GetServerVarAsBool
sidebar_label: GetServerVarAsBool
description: 获取服务器布尔型变量的值
tags: []
---

:::warning

本函数自 0.3.7 R2 版本起已弃用，请使用[GetConsoleVarAsBool](GetConsoleVarAsBool)

:::

## 描述

获取服务器布尔型变量（true/false）的当前值

| 名称            | 说明               |
| --------------- | ------------------ |
| const varname[] | 目标布尔型变量名称 |

## 返回值

指定服务器变量的布尔值。若变量非布尔类型或不存在返回 **0**

## 示例代码

```c
public OnGameModeInit()
{
    // 检测服务器query功能是否启用
    new queryEnabled = GetServerVarAsBool("query");
    if (!queryEnabled)
    {
        print("警告：查询功能已禁用，服务器将不会显示在服务器列表中");
    }
    return 1;
}
```

## 注意事项

:::tip

在服务器控制台输入'varlist'命令可查看所有可用变量及其类型

:::

## 相关函数

- [GetServerVarAsString](GetServerVarAsString): 以字符串形式获取服务器变量
- [GetServerVarAsInt](GetServerVarAsInt): 以整型数值获取服务器变量
