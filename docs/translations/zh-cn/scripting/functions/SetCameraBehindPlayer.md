---
title: SetCameraBehindPlayer
description: 使用SetPlayerCameraPos等函数后，将视角重置到玩家的后面。
tags: ["player", "camera"]
---

## 描述

使用 SetPlayerCameraPos 等函数后，将视角重置到玩家的后面。

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 要重置视角的玩家 ID。 |

## 返回值

1:函数执行成功。

0:函数执行失败。 这意味着指定的玩家不存在。

## 案例

```c
SetCameraBehindPlayer(playerid);
```

## 相关函数

- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家的视角位置。
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家的视角所看的方向。
