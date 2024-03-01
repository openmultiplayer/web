---
title: OnNPCEnterVehicle
description: 当NPC进入车辆时会调用此回调。
tags: []
---

## 描述

当 NPC 进入车辆时会调用此回调。

| 参数名    | 说明              |
| --------- | ----------------- |
| vehicleid | NPC 进入的车辆 ID |
| seatid    | NPC 使用的座位 ID |

## 案例

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("NPC进入了车辆ID: %d 座位ID: %d", vehicleid, seatid);
    return 1;
}
```

## 相关回调

- [OnNPCExitVehicle](../callbacks/OnNPCExitVehicle): 当 NPC 离开车辆时被调用。
