---
title: SetObjectMoveSpeed
sidebar_label: SetObjectMoveSpeed
description: 设置物体的移动速度。
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置物体的移动速度。

| 参数名      | 描述                      |
| ----------- | ------------------------- |
| objectid    | 要设置移动速度的物体 ID   |
| Float:speed | 物体的移动速度（单位/秒） |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定的物体不存在）

## 示例代码

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetObjectMoveSpeed(objectid, 1.5);
// 移动速度从0.8更改为1.5
```

## 相关函数

- [MoveObject](MoveObject): 将物体以指定速度移动到新位置
- [GetObjectMoveSpeed](GetObjectMoveSpeed): 获取物体的移动速度
- [SetPlayerObjectMoveSpeed](SetPlayerObjectMoveSpeed): 设置玩家专属物体的移动速度
