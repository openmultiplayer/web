---
title: InterpolateCameraPos
sidebar_label: InterpolateCameraPos
description: 在设定时间内将玩家的视角从一个位置平滑移动到另一个位置
tags: ["玩家", "插值过渡"]
---

## 描述

在指定时间内平滑移动玩家视角的位置。常用于脚本控制的过场动画。

| 参数         | 说明                                                                                                       |
| ------------ | ---------------------------------------------------------------------------------------------------------- |
| playerid     | 需要移动视角的玩家 ID                                                                                      |
| Float:fromX  | 视角起始位置的 X 坐标                                                                                      |
| Float:fromY  | 视角起始位置的 Y 坐标                                                                                      |
| Float:fromZ  | 视角起始位置的 Z 坐标                                                                                      |
| Float:toX    | 视角目标位置的 X 坐标                                                                                      |
| Float:toY    | 视角目标位置的 Y 坐标                                                                                      |
| Float:toZ    | 视角目标位置的 Z 坐标                                                                                      |
| time         | 移动持续毫秒数                                                                                             |
| CAM_MOVE:cut | [视角切换样式](../resources/cameracutstyles)。默认 CAMERA_CUT（瞬间切换）。应设为 CAMERA_MOVE 实现平滑移动 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveme", true))
    {
        TogglePlayerSpectating(playerid, true);
        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);
        // 在10000毫秒(10秒)内将玩家视角从A点(0,0,10)平滑移动到B点(1000,1000,30)
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

- 使用[TogglePlayerSpectating](TogglePlayerSpectating)可在视角移动期间保持物体正常加载并隐藏 HUD 界面
- 使用[SetCameraBehindPlayer](SetCameraBehindPlayer)可重置视角至玩家背后视角

:::

## 相关函数

- [InterpolateCameraLookAt](InterpolateCameraLookAt): 平滑调整视角注视点
- [SetPlayerCameraPos](SetPlayerCameraPos): 直接设置视角位置
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): 直接设置视角注视方向

## 相关资源

- [视角切换样式](../resources/cameracutstyles)
