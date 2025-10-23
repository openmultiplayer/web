---
title: SetPlayerObjectNoCameraCollision
sidebar_label: SetPlayerObjectNoCameraCollision
description: 切换玩家物体的视角碰撞状态。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

切换玩家物体的视角碰撞状态。

| 参数     | 说明                    |
| -------- | ----------------------- |
| playerid | 所属玩家的 ID           |
| objectid | 要切换碰撞状态的物体 ID |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCollision(playerid, objectid);
    }
    return 1;
}
```

## 注意事项

:::tip

注意：在正常 SA 地图边界内此功能无效

:::

## 相关函数

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): 禁用物体与视角之间的碰撞
