---
title: GetServerVarAsInt
sidebar_label: GetServerVarAsInt
description: 获取服务器整型变量的值
tags: []
---

:::warning

本函数自 0.3.7 R2 版本起已弃用，请使用[GetConsoleVarAsInt](GetConsoleVarAsInt)

:::

## 描述

获取服务器整型变量的当前数值

| 名称            | 说明             |
| --------------- | ---------------- |
| const varname[] | 目标整型变量名称 |

## 返回值

指定服务器变量的整型数值。若变量非整型或不存在返回 **0**

## 示例代码

```c
// 获取服务器端口配置
new serverPort = GetServerVarAsInt("port");
printf("服务器端口号：%i", serverPort); // 输出示例："服务器端口号：7777"
```

## 注意事项

:::tip

在服务器控制台输入'varlist'命令可查看所有可用变量及其类型

:::

## 相关函数

- [GetServerVarAsString](GetServerVarAsString): 以字符串形式获取服务器变量
- [GetServerVarAsBool](GetServerVarAsBool): 以布尔值形式获取服务器变量
