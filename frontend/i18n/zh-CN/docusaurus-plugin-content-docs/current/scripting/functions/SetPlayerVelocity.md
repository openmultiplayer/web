---
title: SetPlayerVelocity
sidebar_label: SetPlayerVelocity
description: 在X、Y、Z轴上设置玩家的速度。
tags: ["玩家"]
---

## 描述

在 X、Y、Z 轴上设置玩家的速度。

| 名称     | 说明                |
| -------- | ------------------- |
| playerid | 要设置速度的玩家 ID |
| Float:x  | X 轴方向的速度      |
| Float:y  | Y 轴方向的速度      |
| Float:z  | Z 轴方向的速度      |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。玩家未连接。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
        SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // 强制玩家跳跃（Z轴速度+0.2）
        return 1;
    }
    return 0;
}
```

## 相关函数

- [GetPlayerVelocity](GetPlayerVelocity): 获取玩家速度
- [SetVehicleVelocity](SetVehicleVelocity): 设置车辆速度
- [GetVehicleVelocity](GetVehicleVelocity): 获取车辆速度
