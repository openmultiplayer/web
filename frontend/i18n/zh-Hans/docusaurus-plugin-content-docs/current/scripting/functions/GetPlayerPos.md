---
title: GetPlayerPos
sidebar_label: GetPlayerPos
description: 获取玩家的三维坐标位置
tags: ["玩家"]
---

## 描述

获取玩家当前的三维坐标位置（X/Y/Z 轴坐标）

| 参数名   | 说明                                      |
| -------- | ----------------------------------------- |
| playerid | 需要获取位置的玩家 ID                     |
| &Float:x | 存储 X 轴坐标的浮点型变量（通过引用传递） |
| &Float:y | 存储 Y 轴坐标的浮点型变量（通过引用传递） |
| &Float:z | 存储 Z 轴坐标的浮点型变量（通过引用传递） |

## 返回值

**true** - 执行成功

**false** - 执行失败（玩家未连接）

## 示例代码

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 声明三个浮点变量存储坐标
    new Float:x, Float:y, Float:z;

    // 调用GetPlayerPos获取玩家坐标
    GetPlayerPos(playerid, x, y, z);

    // 在玩家死亡位置生成现金拾取物
    CreatePickup(1212, 4, x, y, z, -1);
   return 1;
}
```

## 注意事项

:::warning

在[OnPlayerDisconnect](../callbacks/OnPlayerDisconnect)和 OnPlayerRequestClass 回调中使用时可能返回不可靠值（因玩家尚未生成）

:::

## 相关函数

- [SetPlayerPos](SetPlayerPos): 设置玩家坐标位置
- [GetVehiclePos](GetVehiclePos): 获取车辆坐标位置
- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): 检测玩家是否在指定点附近
- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): 计算玩家与指定点的距离
