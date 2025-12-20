---
title: DestroyVehicle
sidebar_label: DestroyVehicle
description: 销毁一辆车辆。
tags: ["车辆"]
---

## 描述

销毁一辆车辆。该车辆将立即消失。

| 参数      | 说明            |
| --------- | --------------- |
| vehicleid | 要销毁的车辆 ID |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（车辆不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          if (IsPlayerInAnyVehicle(playerid))
          {
               new vehicleid = GetPlayerVehicleID(playerid);
               DestroyVehicle(vehicleid);
          }
          return 1;
     }
     return 0;
}
```

## 相关函数

- [CreateVehicle](CreateVehicle): 创建一辆车辆
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): 将玩家从其车辆中移出
- [SetVehicleToRespawn](SetVehicleToRespawn): 重置一辆车辆
