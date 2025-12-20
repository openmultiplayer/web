---
title: GetVehiclePos
sidebar_label: GetVehiclePos
description: 获取车辆的坐标位置。
tags: ["车辆"]
---

## 描述

获取车辆的三维坐标位置。

| 参数      | 说明                                    |
| --------- | --------------------------------------- |
| vehicleid | 目标车辆 ID                             |
| &Float:x  | 存储 X 坐标的浮点型变量（通过引用传递） |
| &Float:y  | 存储 Y 坐标的浮点型变量（通过引用传递） |
| &Float:z  | 存储 Z 坐标的浮点型变量（通过引用传递） |

## 返回值

**true** - 操作成功

**false** - 操作失败（指定车辆不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehpos", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);

          // 检测玩家是否处于车辆内
          if (vehicleid == 0)
          {
               return SendClientMessage(playerid, -1, "你当前未处于任何车辆中！");
          }

          new
               Float:vehX, Float:vehY, Float:vehZ,
               string[128];

          GetVehiclePos(vehicleid, vehX, vehY, vehZ);
          format(string, sizeof(string), "当前车辆坐标：X=%f Y=%f Z=%f", vehX, vehY, vehZ);
          SendClientMessage(playerid, 0xFFFFFFFF, string);
          return 1;
     }

     return 0;
}
```

## 相关函数

- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): 获取车辆与指定坐标点之间的距离
- [SetVehiclePos](SetVehiclePos): 设置车辆坐标位置
- [GetVehicleZAngle](GetVehicleZAngle): 获取车辆水平旋转角度
- [GetVehicleRotationQuat](GetVehicleRotationQuat): 获取车辆旋转四元数值
