---
title: GetPlayerZAim
sidebar_label: GetPlayerZAim
description: 获取玩家的Z轴瞄准角度
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家的 Z 轴瞄准角度（与视角和瞄准机制相关）

| 名称     | 说明                           |
| -------- | ------------------------------ |
| playerid | 需要获取 Z 轴瞄准角度的玩家 ID |

## 返回值

玩家的 Z 轴瞄准角度（浮点数值）

## 示例代码

```c
new Float:zAim = GetPlayerZAim(playerid);

SendClientMessage(playerid, -1, "Z轴瞄准角度 = %f", zAim);
```

## 相关函数

- [GetPlayerCameraPos](GetPlayerCameraPos): 获取玩家视角三维坐标
