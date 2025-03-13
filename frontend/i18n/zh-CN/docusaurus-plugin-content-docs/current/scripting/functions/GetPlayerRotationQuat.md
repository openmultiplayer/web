---
title: GetPlayerRotationQuat
sidebar_label: GetPlayerRotationQuat
description: 以四元数形式获取玩家三维旋转参数
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家在所有三维轴向上的旋转参数（四元数表示法）

| 参数名   | 说明                                             |
| -------- | ------------------------------------------------ |
| playerid | 需要获取旋转参数的玩家 ID                        |
| &Float:w | 存储四元数第一个分量的浮点型变量（通过引用传递） |
| &Float:x | 存储四元数第二个分量的浮点型变量（通过引用传递） |
| &Float:y | 存储四元数第三个分量的浮点型变量（通过引用传递） |
| &Float:z | 存储四元数第四个分量的浮点型变量（通过引用传递） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

玩家的旋转参数将被存储在指定的浮点变量中

## 示例代码

```c
new
    Float:w,
    Float:x,
    Float:y,
    Float:z;

GetPlayerRotationQuat(playerid, w, x, y, z);
```

## 注意事项

:::tip

本函数仅用于获取旋转参数，无法直接设置玩家旋转（可通过[SetPlayerFacingAngle](SetPlayerFacingAngle)设置 Z 轴朝向）

:::

## 相关函数

- [SetPlayerFacingAngle](SetPlayerFacingAngle): 设置玩家面朝方向（Z 轴旋转）
- [GetPlayerFacingAngle](GetPlayerFacingAngle): 获取玩家面朝方向
- [GetVehicleRotationQuat](GetVehicleRotationQuat): 获取车辆四元数旋转参数
