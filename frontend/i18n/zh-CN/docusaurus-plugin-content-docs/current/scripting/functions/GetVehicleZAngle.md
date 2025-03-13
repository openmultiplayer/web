---
title: GetVehicleZAngle
sidebar_label: GetVehicleZAngle
description: 获取车辆在Z轴（水平方向）的旋转角度。
tags: ["车辆"]
---

## 描述

获取车辆在 Z 轴（偏航角）的水平旋转角度。

| 参数名       | 说明                                        |
| ------------ | ------------------------------------------- |
| vehicleid    | 目标车辆 ID                                 |
| &Float:angle | 存储 Z 轴旋转角度的浮点变量（通过引用传递） |

## 返回值

**true** - 操作成功执行

**false** - 操作执行失败（指定车辆不存在）

车辆的旋转角度将被存储至指定变量。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehrot", true) == 0)
     {
          new
               vehicleid,
               Float:rotZ,
               string[64];

          vehicleid = GetPlayerVehicleID(playerid);

          GetVehicleZAngle(vehicleid, rotZ);

          format(string, sizeof(string), "当前车辆旋转角度：%.0f度", rotZ);
          SendClientMessage(playerid, 0xFFFFFFFF, string);
          return 1;
     }
     return 0;
}
```

## 相关函数

- [GetVehicleRotationQuat](GetVehicleRotationQuat): 获取车辆的四元数旋转参数
- [SetVehicleZAngle](SetVehicleZAngle): 设置车辆的水平朝向角度
- [GetVehiclePos](GetVehiclePos): 获取车辆的三维坐标位置
- [GetVehicleMatrix](GetVehicleMatrix): 获取车辆的实际旋转矩阵
- [GetPlayerFacingAngle](GetPlayerFacingAngle): 获取玩家的水平朝向角度
