---
title: SetVehicleVelocity
sidebar_label: SetVehicleVelocity
description: 设置车辆在三维空间中的运动速度。
tags: ["车辆"]
---

## 描述

设置车辆在 X、Y、Z 三个坐标轴方向的瞬时运动速度。

| 参数      | 说明                                |
| --------- | ----------------------------------- |
| vehicleid | 目标车辆的 ID                       |
| Float:x   | X 轴方向的速度（单位：游戏单位/秒） |
| Float:y   | Y 轴方向的速度（单位：游戏单位/秒） |
| Float:z   | Z 轴方向的速度（单位：游戏单位/秒） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示车辆不存在）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext)) // 检测"/jump"指令
    {
        if (IsPlayerInAnyVehicle(playerid)) // 确认玩家在车辆内
        {
            // 给车辆垂直方向施加速度实现跳跃效果
            SetVehicleVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 0.2);
        }
        return 1;
    }
}
```

## 注意事项

:::warning

- 此函数仅对玩家驾驶的车辆有效
- 无法作用于火车类车辆

:::

## 相关函数

- [GetVehicleVelocity](GetVehicleVelocity): 获取车辆当前的三轴速度
