---
title: GetPlayerCameraAspectRatio
sidebar_label: GetPlayerCameraAspectRatio
description: 获取玩家视角的宽高比
tags: ["玩家", "视角"]
---

## 描述

获取玩家当前视角的宽高比参数。

| 名称     | 描述                          |
| -------- | ----------------------------- |
| playerid | 需要获取视角宽高比的玩家 ID |

## 返回值

返回玩家视角宽高比的浮点数值，可能为以下三种预设值：

- **4:3 标准比例** (1.3333334, Float:0x3FAAAAAB) - 当游戏设置中关闭宽屏模式时
- **5:4 信箱模式** (1.2470589, Float:0x3F9F9FA0) - 当启用电影黑边效果时
- **16:9 宽屏比例** (1.7764707, Float:0x3FE36364) - 当开启宽屏模式时（不受黑边设置影响）

## 示例代码

```c
new string[128];
format(string, sizeof(string), "当前宽高比: %f", GetPlayerCameraAspectRatio(playerid));
SendClientMessage(playerid, -1, string);
```

## 注意事项

:::tip
返回值反映的是游戏内"宽屏"设置的选项值，而非玩家显示设备的实际物理宽高比
:::

## 相关函数

- [GetPlayerCameraZoom](GetPlayerCameraZoom): 获取玩家视角缩放级别
- [GetPlayerCameraPos](GetPlayerCameraPos): 获取视角三维坐标
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取视角前向向量
