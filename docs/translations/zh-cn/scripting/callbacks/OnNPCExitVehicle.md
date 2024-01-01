---
title: OnNPCExitVehicle
description: 当NPC离开车辆时调用此回调。
tags: []
---

<VersionWarnCN name='回调' version='SA-MP 0.3a' />

## 描述

当 NPC 离开车辆时调用此回调。

## 相关案例

```c
public OnNPCExitVehicle()
{
    print("NPC离开了车辆");
    return 1;
}
```

## 相关回调

- [OnNPCEnterVehicle](OnNPCEnterVehicle): 当 NPC 进入车辆时被调用。
