---
title: InterpolateCameraLookAt
description: 以设定的速度在两个坐标之间插值玩家视角的朝向。可以与 InterpolateCameraPos 一起使用。
tags: []
---

<VersionWarnCN version='SA-MP 0.3e' />

## 描述

以设定的速度在两个坐标之间插值玩家视角的朝向。可以与 InterpolateCameraPos 一起使用。

| 参数名      | 说明                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| playerid    | 需要移动视角的玩家 ID                                                                                   |
| Float:FromX | 视角开始移动的 X 坐标                                                                                   |
| Float:FromY | 视角开始移动的 Y 坐标                                                                                   |
| Float:FromZ | 视角开始移动的 Z 坐标                                                                                   |
| Float:ToX   | 视角停止移动的 X 坐标                                                                                   |
| Float:ToY   | 视角停止移动的 Y 坐标                                                                                   |
| Float:ToZ   | 视角停止移动的 Z 坐标                                                                                   |
| time        | 以毫秒为单位的时间                                                                                      |
| cut         | 要使用的[跳切](../resources/cameracutstyles)。默认为 CAMERA_CUT（无意义）。设置为 CAMERA_MOVE 用于插值。 |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rotateme", true))
    {
        TogglePlayerSpectating(playerid, 1);
        InterpolateCameraLookAt(playerid, 50.0, 50.0, 10.0, -50.0, 50.0, 10.0, 10000, CAMERA_MOVE);
        //                                 x1    y1    z1     x2    y2    z2
        // 视角开始时朝向（x1，y1，z1）。然后它将旋转，在10000毫秒（10秒）之后，它将看向（x2, y2, z2）。
        return 1;
    }
    return 0;
}
```

## 要点

:::tip

使用 TogglePlayerSpectating 来使物体在视角移动时为玩家流入，并移除玩家的 HUD。可以用 SetCameraBehindPlayer 将玩家的视角重置到身后。

:::

## 相关函数

- [InterpolateCameraPos](InterpolateCameraPos): 将玩家的视角从一个位置移动到另一个位置。
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家的视角所看的方向。
- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家的视角位置。
