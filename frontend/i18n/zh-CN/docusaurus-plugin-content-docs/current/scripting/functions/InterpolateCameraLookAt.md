---
title: InterpolateCameraLookAt
sidebar_label: InterpolateCameraLookAt
description: 以指定速度平滑过渡玩家视角的注视点坐标
tags: ["玩家", "插值过渡"]
---

## 描述

以指定速度在两个坐标点之间平滑过渡玩家视角的注视点。可与[InterpolateCameraPos](InterpolateCameraPos)配合使用。

| 参数         | 说明                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| playerid     | 需要移动视角的玩家 ID                                                                                                    |
| Float:fromX  | 视角起始注视点的 X 坐标                                                                                                  |
| Float:fromY  | 视角起始注视点的 Y 坐标                                                                                                  |
| Float:fromZ  | 视角起始注视点的 Z 坐标                                                                                                  |
| Float:toX    | 视角目标注视点的 X 坐标                                                                                                  |
| Float:toY    | 视角目标注视点的 Y 坐标                                                                                                  |
| Float:toZ    | 视角目标注视点的 Z 坐标                                                                                                  |
| time         | 过渡完成所需的毫秒时间                                                                                                   |
| CAM_MOVE:cut | 使用的[视角切换样式](../resources/cameracutstyles)。默认 CAMERA_CUT（瞬间切换无意义）。应设为 CAMERA_MOVE 实现平滑过渡。 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rotateme", true))
    {
        TogglePlayerSpectating(playerid, true);
        InterpolateCameraLookAt(playerid, 50.0, 50.0, 10.0, -50.0, 50.0, 10.0, 10000, CAMERA_MOVE);
        //                                 x1    y1    z1     x2    y2    z2
        // 视角初始注视点(x1,y1,z1)，经过10000毫秒(10秒)后平滑过渡到注视点(x2,y2,z2)
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

- 使用[TogglePlayerSpectating](TogglePlayerSpectating)可在视角移动时保持物体正常加载
- 使用[SetCameraBehindPlayer](SetCameraBehindPlayer)可重置视角至玩家背后视角

:::

## 相关函数

- [InterpolateCameraPos](InterpolateCameraPos): 平滑移动玩家视角位置
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 设置视角注视点
- [SetPlayerCameraPos](SetPlayerCameraPos): 设置视角位置

## 相关资源

- [视角切换样式](../resources/cameracutstyles)
