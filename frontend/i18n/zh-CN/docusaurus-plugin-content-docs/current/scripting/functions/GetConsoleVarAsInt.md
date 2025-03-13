---
title: GetConsoleVarAsInt
sidebar_label: GetConsoleVarAsInt
description: 获取控制台变量的整数类型值。
tags: []
---

## 描述

获取控制台变量的整数类型值。

| 参数名       | 说明                       |
| ------------ | -------------------------- |
| const cvar[] | 要获取的整型控制台变量名称 |

## 返回值

返回指定控制台变量的整数值。若变量不存在或类型不符返回 0。

## 示例代码

```c
new serverPort = GetConsoleVarAsInt("network.port");
printf("服务器端口号: %i", serverPort);  // 输出整型端口数值
```

## 注意事项

:::tip

在服务器控制台输入 `varlist` 可查看所有可用控制台变量及其类型。

:::

## 相关函数

- [GetConsoleVarAsString](GetConsoleVarAsString.md): 以字符串形式获取控制台变量
- [GetConsoleVarAsBool](GetConsoleVarAsBool.md): 以布尔值形式获取控制台变量
