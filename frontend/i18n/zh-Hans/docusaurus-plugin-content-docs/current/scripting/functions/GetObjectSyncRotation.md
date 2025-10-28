---
title: GetObjectSyncRotation
sidebar_label: GetObjectSyncRotation
description: 获取物体的同步旋转状态
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取物体的同步旋转状态。

| 参数     | 说明          |
| -------- | ------------- |
| objectid | 目标物体的 ID |

## 返回值

返回表示是否启用同步旋转的布尔值（`true`/`false`）。

## 示例代码

```c
new objectid = CreateObject(...);
new parentid = CreateObject(...);
AttachObjectToObject(objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, false);

new bool:syncRotation = GetObjectSyncRotation(objectid);
// syncRotation = false
```

## 相关函数

- [AttachObjectToObject](AttachObjectToObject): 将物体附加到其他物体
- [GetPlayerObjectSyncRotation](GetPlayerObjectSyncRotation): 获取玩家物体的同步旋转状态
