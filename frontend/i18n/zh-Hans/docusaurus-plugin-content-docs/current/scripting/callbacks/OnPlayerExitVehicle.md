---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: 当玩家开始退出车辆时触发该回调函数。
tags: ["玩家", "车辆"]
---

## 描述

当玩家开始退出车辆时触发该回调函数。

| 参数名    | 说明                 |
| --------- | -------------------- |
| playerid  | 正在退出车辆的玩家ID |
| vehicleid | 玩家正在退出的车辆ID |

## 返回值

该回调始终在滤镜脚本中优先触发

## 示例

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[64];
    format(string, sizeof(string), "提示：你正在退出车辆 %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 注意事项

:::warning

- 以下情况不会触发该回调：
  - 玩家从摩托车上摔落
  - 使用[SetPlayerPos](../functions/SetPlayerPos)等函数强制移出玩家
- 如需检测这些情况，请使用[OnPlayerStateChange](OnPlayerStateChange)回调：
  - 检查旧状态是否为`PLAYER_STATE_DRIVER`(驾驶员)或`PLAYER_STATE_PASSENGER`(乘客)
  - 检查新状态是否为`PLAYER_STATE_ONFOOT`(步行状态)

:::

## 相关回调

以下回调函数可能与本回调相关：

- [OnPlayerEnterVehicle](OnPlayerEnterVehicle): 当玩家开始进入车辆时触发
- [OnPlayerStateChange](OnPlayerStateChange): 当玩家状态改变时触发

## 相关函数

以下函数可能与本回调函数相关：

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): 强制将玩家移出车辆
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): 获取玩家所在车辆座位
