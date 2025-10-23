---
title: IsValidVehicle
sidebar_label: IsValidVehicle
description: 检测车辆是否已创建
tags: ["车辆"]
---

:::note

此函数在 SA-MP 服务器旧版库中不存在，但[维护库的最新版本](https://github.com/pawn-lang/samp-stdlib)包含此函数及其他缺失声明。

:::

## 描述

检测指定车辆是否已被成功创建。

## 参数说明

| 参数名    | 说明            |
| --------- | --------------- |
| vehicleid | 要检测的车辆 ID |

## 返回值

**true** - 车辆存在

**false** - 车辆不存在

## 示例代码

```c
#if !defined IsValidVehicle
    native IsValidVehicle(vehicleid);
#endif

// 统计服务器车辆数量
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/countvehicles", true))
    {
        new
            count,
            string[128];

        for (new i = 0; i < MAX_VEHICLES; i++)
        {
            if (IsValidVehicle(i))
            {
                count++;
            }
        }

        format(string, sizeof(string), "* 当前服务器共有 %d 辆有效车辆。", count);
        SendClientMessage(playerid, 0x33CCCCFF, string);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [GetPlayerVehicleID](GetPlayerVehicleID): 获取玩家当前所在车辆 ID
- [GetVehicleModel](GetVehicleModel): 获取车辆模型 ID
