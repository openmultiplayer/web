---
title: SetCameraBehindPlayer
sidebar_label: SetCameraBehindPlayer
description: 将玩家的视角重置到其身后（在使用类似SetPlayerCameraPos的函数后使用）。
tags: ["玩家", "视角"]
---

## 描述

在使用类似[SetPlayerCameraPos](SetPlayerCameraPos)的函数后，将玩家的视角重置到其身后。

| 参数     | 说明                  |
| -------- | --------------------- |
| playerid | 需要重置视角的玩家 ID |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的玩家不存在）

## 示例代码

```c
SetCameraBehindPlayer(playerid);
```

## 相关函数

- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家的视角位置
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家视角的观察点
