---
title: OnUnoccupiedVehicleUpdate
sidebar_label: OnUnoccupiedVehicleUpdate
description: 当玩家的客户端同步未驾驶车辆的位置时触发该回调函数。
tags: ["车辆"]
---

## 描述

当玩家的客户端同步其未驾驶车辆的位置时触发该回调函数。触发场景包括：

- 玩家处于车辆外部时
- 玩家作为乘客乘坐无驾驶员车辆时

| 参数名         | 说明                                                                                  |
| -------------- | ------------------------------------------------------------------------------------- |
| vehicleid      | 被同步位置的车辆ID                                                                    |
| playerid       | 发起位置同步的玩家ID                                                                  |
| passenger_seat | 乘客座位号（0=不在车辆内，1=前排乘客，2=左后座，3=右后座，4+为巴士/客车等多座位车辆） |
| Float:new_x    | 车辆新的X坐标                                                                         |
| Float:new_y    | 车辆新的Y坐标                                                                         |
| Float:new_z    | 车辆新的Z坐标                                                                         |
| Float:vel_x    | 车辆X轴速度分量                                                                       |
| Float:vel_y    | 车辆Y轴速度分量                                                                       |
| Float:vel_z    | 车辆Z轴速度分量                                                                       |

## 返回值

0 - 阻止其他脚本处理此同步事件  
1 - 允许正常处理同步数据

该回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // 检测移动距离是否过大
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // 拒绝此次同步
        return 0;
    }

    return 1;
}
```

## 注意事项

:::warning

- 本回调触发频率极高（每秒多次/每个车辆），请避免在此执行复杂计算或文件操作
- [GetVehiclePos](../functions/GetVehiclePos) 将返回同步前的旧坐标

:::

## 相关回调

以下回调可能与该回调存在关联：

- [OnTrailerUpdate](OnTrailerUpdate): 当拖车位置同步时触发

## 相关函数

以下函数可能与该回调存在关联：

- [SetVehiclePos](../functions/SetVehiclePos): 强制设置车辆位置
- [GetVehicleVelocity](../functions/GetVehicleVelocity): 获取车辆速度向量
- [SetVehicleVelocity](../functions/SetVehicleVelocity): 设置车辆速度向量
