---
title: GetPlayerCameraUpVector
sidebar_label: GetPlayerCameraUpVector
description: 此函数用于获取玩家视角垂直方向向量，即指向屏幕顶部中间的坐标向量
tags: ["玩家", "视角"]
---

## 描述

此函数返回玩家视角垂直方向向量，该向量指向屏幕顶部中心点的三维坐标方向

| 参数名   | 说明                                          |
| -------- | --------------------------------------------- |
| playerid | 需要获取视角垂直向量的玩家 ID                 |
| &Float:x | 用于存储 X 坐标分量的浮点变量（通过引用传递） |
| &Float:y | 用于存储 Y 坐标分量的浮点变量（通过引用传递） |
| &Float:z | 用于存储 Z 坐标分量的浮点变量（通过引用传递） |

## 返回值

三维向量数据将存储在指定的变量中

## 注意事项

:::warning

此函数已在 SA-MP 0.3b 版本中移除

:::

## 相关函数

- [GetPlayerCameraPos](GetPlayerCameraPos): 获取玩家视角位置坐标
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
