---
title: GetPlayerCameraZoom
sidebar_label: GetPlayerCameraZoom
description: 获取指定玩家的游戏视角缩放级别
tags: ["玩家", "视角"]
---

## 描述

获取指定玩家当前使用的游戏视角缩放级别

| 参数名   | 说明                          |
| -------- | ----------------------------- |
| playerid | 需要获取视角缩放级别的玩家 ID |

## 返回值

玩家当前视角缩放级别（普通视角/狙击镜等），返回浮点数值

## 示例代码

```c
// 显示玩家当前视角缩放级别
new string[128];
format(string, sizeof(string), "你的视角缩放级别: %f", GetPlayerCameraZoom(playerid));
SendClientMessage(playerid, -1, string);
```

## 注意事项

:::tip

本函数获取的是游戏内置视角系统（包含狙击镜缩放）的缩放级别，与武器模型自带的缩放效果无关

:::

## 相关函数

- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRatio): 获取玩家视角宽高比
- [GetPlayerCameraPos](GetPlayerCameraPos): 获取玩家视角位置坐标
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
