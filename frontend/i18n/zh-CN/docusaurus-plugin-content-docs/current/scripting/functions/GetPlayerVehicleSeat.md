---
title: GetPlayerVehicleSeat
sidebar_label: GetPlayerVehicleSeat
description: 获取玩家所在的车辆座位号
tags: ["玩家", "车辆"]
---

## 描述

获取指定玩家当前在车辆中的座位编号

| 名称     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取座位信息的玩家 ID |

## 返回值

玩家当前所在的座位编号：
- **-1** 未处于车辆中
- **0** 驾驶位
- **1** 前排乘客位
- **2** 后排左侧乘客位
- **3** 后排右侧乘客位
- **4+** 扩展乘客位（如客车等）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/myseat", true) == 0)
    {
        new
            playerSeat = GetPlayerVehicleSeat(playerid);

        // 异常状态处理
        if (playerSeat == 128)
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "无法获取座位信息，发生系统错误");
        }

        new
            string[24];

        format(string, sizeof(string), "您的座位号：%i", playerSeat);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

| ID  | 座位位置             |
| --- | -------------------- |
| 0   | 驾驶位               |
| 1   | 前排乘客位           |
| 2   | 后排左侧乘客位       |
| 3   | 后排右侧乘客位       |
| 4+  | 扩展乘客位（客车等） |

## 相关函数

- [GetPlayerVehicleID](GetPlayerVehicleID): 获取玩家所在车辆的 ID
- [PutPlayerInVehicle](PutPlayerInVehicle): 将玩家放置到指定车辆座位
