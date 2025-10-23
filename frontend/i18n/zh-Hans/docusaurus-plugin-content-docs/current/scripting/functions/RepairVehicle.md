---
title: RepairVehicle
sidebar_label: RepairVehicle
description: 完全修复车辆，包含外观损伤（凹陷、划痕、爆胎等）
tags: ["车辆"]
---

## 描述

完全修复车辆，包含外观损伤（凹陷、划痕、爆胎等）。

| 参数名    | 说明              |
| --------- | ----------------- |
| vehicleid | 需要修复的车辆 ID |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定的车辆不存在）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/repair", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "您当前未处于车辆中！");
        }

        RepairVehicle(GetPlayerVehicleID(playerid));

        SendClientMessage(playerid, 0xFFFFFFFF, "您的车辆已修复完成！");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [SetVehicleHealth](SetVehicleHealth): 设置车辆生命值
- [GetVehicleHealth](GetVehicleHealth): 获取车辆生命值
