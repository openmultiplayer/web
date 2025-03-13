---
title: OnNPCEnterVehicle
sidebar_label: OnNPCEnterVehicle
description: 当NPC进入车辆时触发该回调
tags: ["npc"]
---

## 描述

当NPC进入车辆时触发该回调。

| 参数      | 说明            |
| --------- | --------------- |
| vehicleid | NPC进入的车辆ID |
| seatid    | NPC使用的座位ID |

## 示例

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("NPC进入车辆事件 - 车辆ID: %d 座位ID: %d", vehicleid, seatid);
    return 1;
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnNPCExitVehicle](OnNPCExitVehicle)：当NPC离开车辆时触发
