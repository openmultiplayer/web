---
title: GetMyPos
sidebar_label: GetMyPos
description: 获取NPC的当前位置
tags: ["npc"]
---

:::warning

此函数已弃用，请使用 [NPC_GetPos](NPC_GetPos)。

:::

## 描述

获取 NPC 的当前位置。

| 参数     | 说明                                        |
| -------- | ------------------------------------------- |
| &Float:x | 用于存储 X 坐标的浮点数变量，通过引用传递。 |
| &Float:y | 用于存储 Y 坐标的浮点数变量，通过引用传递。 |
| &Float:z | 用于存储 Z 坐标的浮点数变量，通过引用传递。 |

## 返回值

此函数不返回特定值。

## 示例代码

```c
new Float:x, Float:y, Float:z;
GetMyPos(x,y,z);
printf("我现在位于 %f, %f, %f!",x,y,z);
```

## 相关函数

- [SetMyPos](SetMyPos): 设置 NPC 的当前位置
