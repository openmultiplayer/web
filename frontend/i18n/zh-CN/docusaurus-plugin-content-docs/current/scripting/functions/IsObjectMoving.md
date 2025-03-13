---
title: IsObjectMoving
sidebar_label: IsObjectMoving
description: 检查指定物体是否处于移动状态
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定物体是否正在移动。

| 参数     | 说明              |
| -------- | ----------------- |
| objectid | 需要检测的物体 ID |

## 返回值

**true** - 物体正在移动  
**false** - 物体处于静止状态

## 示例

```c
new gAirportGate;

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);

    MoveObject(gAirportGate, 0.0, 0.0, 15.0, 1.00);

    if (IsObjectMoving(gAirportGate))
    {
        StopObject(gAirportGate);
    }
    return 1;
}
```

## 相关函数

- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动

## 相关回调

- [OnObjectMoved](../callbacks/OnObjectMoved): 当物体停止移动时触发
