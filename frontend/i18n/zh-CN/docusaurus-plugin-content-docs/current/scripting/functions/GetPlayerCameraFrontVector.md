---
title: GetPlayerCameraFrontVector
sidebar_label: GetPlayerCameraFrontVector
description: 本函数将返回玩家当前在三维空间中的瞄准方向坐标，该坐标相对于视角位置，具体位置信息请参见[GetPlayerCameraPos](GetPlayerCameraPos)。
tags: ["玩家", "视角"]
---

## 描述

本函数将返回玩家当前在三维空间中的瞄准方向坐标，该坐标相对于视角位置，具体位置信息请参见[GetPlayerCameraPos](GetPlayerCameraPos)。

| 参数名   | 说明                                      |
| -------- | ----------------------------------------- |
| playerid | 需要获取视角前向向量的玩家 ID             |
| &Float:x | 用于存储 X 坐标的浮点变量（通过引用传递） |
| &Float:y | 用于存储 Y 坐标的浮点变量（通过引用传递） |
| &Float:z | 用于存储 Z 坐标的浮点变量（通过引用传递） |

## 返回值

坐标数据将存储在指定的变量中。

## 示例代码

```c
// 一个利用该向量的简单命令，使用GetPlayerCameraPos获取的位置数据。该命令将在玩家视线方向生成九头蛇导弹
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/test camera vector"))
    {
        new
            Float:fPX, Float:fPY, Float:fPZ,
            Float:fVX, Float:fVY, Float:fVZ,
            Float:object_x, Float:object_y, Float:object_z;

        // 修改此常量可调整缩放比例。数值越大，生成物体离视角越远
        // 使用负值将使向量反向，物体将在相反方向生成
        const
            Float:fScale = 5.0;

        GetPlayerCameraPos(playerid, fPX, fPY, fPZ);
        GetPlayerCameraFrontVector(playerid, fVX, fVY, fVZ);

        object_x = fPX + floatmul(fVX, fScale);
        object_y = fPY + floatmul(fVY, fScale);
        object_z = fPZ + floatmul(fVZ, fScale);

        CreateObject(345, object_x, object_y, object_z, 0.0, 0.0, 0.0);

        return 1;
    }

    return 0;
}
```

## 注意事项

:::tip

无论玩家处于车辆中还是步行状态，都可以获取视角数据

:::

## 相关函数

- [GetPlayerCameraPos](GetPlayerCameraPos): 获取玩家视角位置
