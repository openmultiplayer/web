---
title: SetPlayerCheckpoint
sidebar_label: SetPlayerCheckpoint
description: 为玩家设置检查点（红色圆柱体）。
tags: ["玩家", "检查点"]
---

## 描述

为玩家设置检查点（红色圆柱体），同时在小地图显示红色标记。当玩家进入检查点时，将触发 OnPlayerEnterCheckpoint 回调并执行相关操作。

| 参数          | 说明                  |
| ------------- | --------------------- |
| playerid      | 要设置检查点的玩家 ID |
| Float:centreX | 检查点中心 X 坐标     |
| Float:centreY | 检查点中心 Y 坐标     |
| Float:centreZ | 检查点中心 Z 坐标     |
| Float:radius  | 检查点范围半径        |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例代码

```c
// 本示例演示玩家重生时设置检查点
// 进入检查点后获得$1000并禁用检查点

new bool:gOnCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    gOnCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (gOnCheck[playerid]) // 检查状态标识
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        gOnCheck[playerid] = false;
    }
    return 1;
}
```

## 注意事项

:::warning

检查点是异步的，同一时间只能显示一个。要实现"流加载"效果（仅在玩家接近时显示），请使用检查点流加载器

:::

## 相关函数

- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): 禁用玩家当前检查点
- [GetPlayerCheckpoint](GetPlayerCheckpoint): 获取当前检查点坐标
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): 检测玩家是否在检查点内
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): 检测玩家是否有激活的检查点
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): 设置竞速检查点
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): 禁用竞速检查点
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): 检测玩家是否在竞速检查点内

## 相关回调

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): 玩家进入检查点时触发
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): 玩家离开检查点时触发
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): 玩家进入竞速检查点时触发
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): 玩家离开竞速检查点时触发
