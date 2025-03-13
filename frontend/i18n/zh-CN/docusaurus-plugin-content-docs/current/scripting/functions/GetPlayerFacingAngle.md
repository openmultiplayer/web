---
title: GetPlayerFacingAngle
sidebar_label: GetPlayerFacingAngle
description: 获取玩家当前朝向角度
tags: ["玩家"]
---

## 描述

获取玩家当前面朝方向的水平旋转角度

| 参数名       | 说明                               |
| ------------ | ---------------------------------- |
| playerid     | 需要获取角度的玩家 ID              |
| &Float:angle | 存储角度的浮点变量（通过引用传递） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家不存在）

玩家当前角度将存储在指定变量中

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/angle", true))
    {
        new string[64];
        new Float:angle;

        GetPlayerFacingAngle(playerid, angle);
        format(string, sizeof(string), "当前朝向角度: %0.2f", angle);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

当玩家处于车辆内时，本函数返回的角度通常不准确。建议使用[GetVehicleZAngle](GetVehicleZAngle)获取车辆 Z 轴旋转角度

:::

:::warning

GTA:SA 中的角度方向与现实相反：90 度实际指向西方（现实为东方）。角度转换公式为：360 - 角度值。北/南方向仍对应 0/360 度和 180 度

:::

## 相关函数

- [GetVehicleZAngle](GetVehicleZAngle): 获取车辆 Z 轴旋转角度
- [SetPlayerFacingAngle](SetPlayerFacingAngle): 设置玩家朝向角度
- [GetPlayerRotationQuat](GetPlayerRotationQuat): 获取玩家的四元数旋转参数
