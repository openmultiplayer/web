---
title: GetMyFacingAngle
sidebar_label: GetMyFacingAngle
description: 获取NPC当前的面朝角度
tags: []
---

## 描述

获取 NPC 当前的面朝角度。

| 名称         | 描述                                     |
| ------------ | ---------------------------------------- |
| &Float:Angle | 用于存储角度的浮点数变量，通过引用传递。 |

## 返回值

面朝角度将存储在指定变量中。

## 示例代码

```c
public OnPlayerText(playerid, text[])
{
  new Float:Angle;
  GetMyFacingAngle(Angle);
  printf("我正面对着 %f!", Angle);
}
```

## 相关函数

- [SetMyFacingAngle](../functions/SetMyFacingAngle): 设置 NPC 的面朝角度
