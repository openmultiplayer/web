---
title: SetPlayerCameraLookAt
sidebar_label: SetPlayerCameraLookAt
description: 设置玩家视角的观察方向。
tags: ["玩家", "视角"]
---

## 描述

设置玩家视角的观察方向。通常需与 SetPlayerCameraPos 配合使用。

| 参数         | 说明                                                                              |
| ------------ | --------------------------------------------------------------------------------- |
| playerid     | 目标玩家 ID                                                                       |
| Float:x      | 视角观察点的 X 坐标                                                               |
| Float:y      | 视角观察点的 Y 坐标                                                               |
| Float:z      | 视角观察点的 Z 坐标                                                               |
| CAM_MOVE:cut | [视角切换风格](../resources/cameracutstyles)。可使用 CAMERA_MOVE 实现视角渐变效果 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例代码

```c
SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);
SetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);
```

## 注意事项

:::warning

在启用观察者模式后立即使用此函数将无法生效

:::

## 相关函数

- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家视角位置
- [SetCameraBehindPlayer](SetCameraBehindPlayer): 重置玩家至默认跟随视角
- [GetPlayerCameraPos](GetPlayerCameraPos): 获取玩家视角坐标
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取视角前向向量

## 相关资源

- [视角切换风格列表](../resources/cameracutstyles)
