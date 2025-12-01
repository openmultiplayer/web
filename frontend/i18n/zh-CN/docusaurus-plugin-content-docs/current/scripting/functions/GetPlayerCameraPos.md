---
title: GetPlayerCameraPos
sidebar_label: GetPlayerCameraPos
description: 获取玩家视角的三维坐标位置
tags: ["玩家", "视角"]
---

## 描述

获取玩家当前视角的三维空间坐标位置

| 参数名   | 说明                                      |
| -------- | ----------------------------------------- |
| playerid | 需要获取视角坐标的玩家 ID                 |
| &Float:x | 用于存储 X 坐标的浮点变量（通过引用传递） |
| &Float:y | 用于存储 Y 坐标的浮点变量（通过引用传递） |
| &Float:z | 用于存储 Z 坐标的浮点变量（通过引用传递） |

## 返回值

坐标数据将存储在指定的变量中。

## 示例代码

```c
public OnPlayerDisconnect(playerid, reason)
{
    new Float:x, Float:y, Float:z;
    GetPlayerCameraPos(playerid, x, y, z);

    printf("玩家断开连接时视角坐标为 %f, %f, %f", x, y, z);
    return 1;
}
```

## 注意事项

:::warning

玩家视角坐标每秒仅更新一次（瞄准状态除外）。如需依赖视角坐标进行操作，建议设置 1 秒间隔的定时器

:::

## 相关函数

- [SetPlayerCameraPos](SetPlayerCameraPos): 设置玩家视角位置
- [GetPlayerCameraZoom](GetPlayerCameraZoom): 获取玩家视角缩放级别
- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRatio): 获取玩家视角宽高比
- [GetPlayerCameraMode](GetplayerCameraMode): 获取玩家视角模式
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
- [GetPlayerZAim](GetPlayerZAim): 获取玩家垂直瞄准角度
