---
title: GetConsoleVarAsFloat
sidebar_label: GetConsoleVarAsFloat
description: 获取控制台变量的浮点类型值。
tags: []
---

## 描述

获取控制台变量的浮点类型值。

| 参数         | 说明                           |
| ------------ | ------------------------------ |
| const cvar[] | 要获取的浮点类型控制台变量名称 |

## 返回值

返回指定控制台变量的浮点数值。若变量不存在或类型不符返回 0.0。

## 示例代码

```c
new Float:radius = GetConsoleVarAsFloat("game.nametag_draw_radius");
printf("玩家名牌绘制半径: %.2f", radius);  // 输出浮点数值保留两位小数
```

## 注意事项

:::tip

在服务器控制台输入 `varlist` 可查看所有可用控制台变量及其类型。

:::

## 相关函数

- [GetConsoleVarAsInt](GetConsoleVarAsInt): 以整型形式获取控制台变量
- [GetConsoleVarAsString](GetConsoleVarAsString): 以字符串形式获取控制台变量
- [GetConsoleVarAsBool](GetConsoleVarAsBool): 以布尔值形式获取控制台变量
