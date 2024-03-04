---
title: GetPlayerCameraPos
description: 获取玩家视角的位置。
tags: ["player", "camera"]
---

## 描述

获取玩家视角的位置。

| 参数名   | 说明                                    |
| -------- | --------------------------------------- |
| playerid | 要获得视角位置的玩家 ID。               |
| Float:x  | 通过引用传递，存储 X 坐标的浮点型变量。 |
| Float:y  | 通过引用传递，存储 Y 坐标的浮点型变量。 |
| Float:z  | 通过引用传递，存储 Z 坐标的浮点型变量。 |

## 返回值

玩家的视角位置存储在引用传递的参数中。

## 案例

```c
public OnPlayerDisconnect(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerCameraPos(playerid, x, y, z);

    printf("玩家离开时，他的视角在 %f,%f,%f。", x, y, z);
    // 你可以把这个写到用户文件中。

    return 1;
}
```

## 要点

:::warning

玩家的视角位置每秒只更新一次，除非是瞄准。如果你想根据玩家的视角位置做点什么，建议设置 1 秒的计时器。

:::

## 相关函数

- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家的视角位置。
- [GetPlayerCameraZoom](GetPlayerCameraZoom): 获取玩家视角的缩放级别。
- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRatio): 获取玩家视角的纵横比。
- [GetPlayerCameraMode](GetplayerCameraMode): 获取玩家的视角模式。
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角的前向量。
