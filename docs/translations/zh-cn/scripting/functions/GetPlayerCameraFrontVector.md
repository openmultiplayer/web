---
title: GetPlayerCameraFrontVector
description: 该函数返回玩家在三维空间的当前瞄准方向，坐标是相对于视角的位置，参见GetPlayerCameraPos。
tags: ["player", "camera"]
---

## 描述

该函数返回玩家在三维空间的当前瞄准方向，坐标是相对于视角的位置，参见 GetPlayerCameraPos。

| 参数名   | 说明                                |
| -------- | ----------------------------------- |
| playerid | 要获取视角前向量的玩家的 ID         |
| Float:x  | 通过引用传递，存储 X 坐标的浮点数。 |
| Float:y  | 通过引用传递，存储 Y 坐标的浮点数。 |
| Float:z  | 通过引用传递，存储 Z 坐标的浮点数。 |

## 返回值

存储在引用传递的参数中。

## 案例

```c
// 一个简单的命令，使用GetPlayerCameraPos的位置来操作这个向量。
// 这个命令将在玩家所看的方向上创建一个九头蛇导弹。
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/test camera vector"))
    {
        new
            Float:fPX, Float:fPY, Float:fPZ,
            Float:fVX, Float:fVY, Float:fVZ,
            Float:object_x, Float:object_y, Float:object_z;

        // 换成你想要的比例。更大的比例增加了与视角的距离。
        // 负的比例将反转矢量，使其朝向相反的方向。
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

## 要点

:::tip

在 0.3a 中，只有当玩家在犀牛、S.W.A.T.坦克、消防车内或步行时才能获得视角的前向量。从 0.3b 开始，当玩家在任何车辆中或步行时都可以获得视角数据。

:::

## 相关函数

- [GetPlayerCameraPos](GetPlayerCameraPos): 找出玩家的视角在哪里。
