---
title: OnTrailerUpdate
sidebar_label: OnTrailerUpdate
description: 当玩家发送拖车状态更新时触发此回调函数。
tags: ["车辆"]
---

## 描述

当玩家客户端发送拖车状态同步数据时触发此回调函数。

| 参数      | 说明                     |
| --------- | ------------------------ |
| playerid  | 发送拖车状态更新的玩家ID |
| vehicleid | 被更新的拖车ID           |

## 返回值

0 - 阻止向其他玩家同步该拖车更新（仍会更新发送者客户端）

1 - 正常处理拖车更新并同步给所有玩家

此回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid)); // 强制分离拖车
    return 0; // 阻止更新同步
}
```

## 注意事项

:::warning

此回调触发频率极高（每秒多次/每个拖车），请避免在此执行复杂计算或文件读写操作

:::

## 相关回调

以下回调可能与此回调存在关联：

- [OnUnoccupiedVehicleUpdate](OnUnoccupiedVehicleUpdate): 当无驾驶员车辆位置同步时触发

## 相关函数

以下函数可能与此回调存在关联：

- [GetVehicleTrailer](../functions/GetVehicleTrailer): 获取车辆牵引的拖车ID
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): 检测拖车是否连接
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): 连接拖车到车辆
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): 分离拖车连接
