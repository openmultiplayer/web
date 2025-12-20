---
title: SetPlayerCameraPos
sidebar_label: SetPlayerCameraPos
description: 设置玩家的视角到指定位置
tags: ["玩家", "视角"]
---

## 描述

设置玩家的视角到指定位置

| 参数名   | 说明                        |
| -------- | --------------------------- |
| playerid | 要设置的目标玩家 ID         |
| Float:x  | 视角设定的 X 坐标（浮点型） |
| Float:y  | 视角设定的 Y 坐标（浮点型） |
| Float:z  | 视角设定的 Z 坐标（浮点型） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例

```c
SetPlayerCameraPos(playerid, 652.23, 457.21, 10.84);
```

## 注意事项

:::tip

- 需配合使用 SetPlayerCameraLookAt 以确保功能正常
- 使用 SetCameraBehindPlayer 可重置视角至玩家身后视角

:::

:::warning

在启用观战模式后立即调用此函数无效

:::

## 相关函数

- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家视角的观察焦点
- [SetCameraBehindPlayer](SetCameraBehindPlayer): 将视角重置至玩家身后视角
