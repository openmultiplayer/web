---
title: GetPlayerWorldBounds
sidebar_label: GetPlayerWorldBounds
description: 获取玩家的世界边界范围
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定玩家的世界边界坐标范围

| 参数        | 说明                                    |
| ----------- | --------------------------------------- |
| playerid    | 需要获取边界信息的玩家 ID               |
| &Float:maxX | 存储 X 轴最大边界的浮点变量（引用传递） |
| &Float:minX | 存储 X 轴最小边界的浮点变量（引用传递） |
| &Float:maxY | 存储 Y 轴最大边界的浮点变量（引用传递） |
| &Float:minY | 存储 Y 轴最小边界的浮点变量（引用传递） |

## 返回值

此函数不直接返回值，边界坐标将存储于指定变量中

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, -1212.0, -1420.0, 2628.5, 2430.5);

    new
        Float:maxX,
        Float:minX,
        Float:maxY,
        Float:minY;

    GetPlayerWorldBounds(playerid, maxX, minX, maxY, minY);
    // maxX = -1212.0
    // minX = -1420.0
    // maxY = 2628.5
    // minY = 2430.5
    return 1;
}
```

## 相关函数

- [SetPlayerWorldBounds](SetPlayerWorldBounds): 设置玩家的世界边界（越界时会被推回）
- [ClearPlayerWorldBounds](ClearPlayerWorldBounds): 重置玩家的世界边界为默认范围
