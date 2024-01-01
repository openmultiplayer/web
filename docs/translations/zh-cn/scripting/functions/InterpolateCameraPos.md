---
title: InterpolateCameraPos
description: 在设定的时间内，将玩家的视角从一个位置移动到另一个位置。
tags: []
---

<VersionWarnCN version='SA-MP 0.3e' />

## 描述

在设定的时间内，将玩家的视角从一个位置移动到另一个位置。

| 参数名      | 说明                                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| playerid    | 需要移动视角的玩家 ID                                                                                 |
| Float:FromX | 视角开始移动的 X 坐标                                                                                 |
| Float:FromY | 视角开始移动的 Y 坐标                                                                                 |
| Float:FromZ | 视角开始移动的 Z 坐标                                                                                 |
| Float:ToX   | 视角停止移动的 X 坐标                                                                                 |
| Float:ToY   | 视角停止移动的 Y 坐标                                                                                 |
| Float:ToZ   | 视角停止移动的 Z 坐标                                                                                 |
| time        | 以毫秒为单位的时间                                                                                    |
| cut         | 要使用的[跳切](../resources/cameracutstyles)。默认为 CAMERA_CUT。设置为 CAMERA_MOVE 以获得平滑的运动。 |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveme", true))
    {
        TogglePlayerSpectating(playerid, 1);
        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);
        // 在10000毫秒（10秒）内将玩家的视角从A点移动到B点。
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

- [InterpolateCameraLookAt](InterpolateCameraLookAt): 在设定的时间内，将玩家视角的朝向从一个位置移动到另一个位置。
- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家的视角位置。
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置玩家的视角所看的方向。
