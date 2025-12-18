---
title: GetSpawnInfo
sidebar_label: GetSpawnInfo
description: 获取玩家的当前重生数据，即下一次重生的位置信息。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家的当前重生数据，即下一次重生的位置信息。

| 参数            | 说明                                   |
| --------------- | -------------------------------------- |
| playerid        | 要获取重生信息的玩家 ID                |
| &team           | 存储队伍 ID 的变量（通过引用传递）     |
| &skin           | 存储皮肤 ID 的变量（通过引用传递）     |
| &Float:spawnX   | 存储 X 坐标的浮点变量（通过引用传递）  |
| &Float:spawnY   | 存储 Y 坐标的浮点变量（通过引用传递）  |
| &Float:spawnZ   | 存储 Z 坐标的浮点变量（通过引用传递）  |
| &Float:angle    | 存储面向角度的浮点变量（通过引用传递） |
| &WEAPON:weapon1 | 存储武器 1 的变量（通过引用传递）      |
| &ammo1          | 存储弹药 1 的变量（通过引用传递）      |
| &WEAPON:weapon2 | 存储武器 2 的变量（通过引用传递）      |
| &ammo2          | 存储弹药 2 的变量（通过引用传递）      |
| &WEAPON:weapon3 | 存储武器 3 的变量（通过引用传递）      |
| &ammo3          | 存储弹药 3 的变量（通过引用传递）      |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定玩家未连接）

## 示例

```c
public OnPlayerRequestClass(playerid, classid)
{
    SetSpawnInfo(playerid, NO_TEAM, 293, 1139.4786, -1761.3989, 13.5844, 0.0000, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);

    new
        team,
        skin,
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:angle,
        WEAPON:weapon1,
        ammo1,
        WEAPON:weapon2,
        ammo2,
        WEAPON:weapon3,
        ammo3;

    GetSpawnInfo(playerid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);
    // team = NO_TEAM
    // skin = 293
    // spawnX = 1139.4786
    // spawnY = -1761.3989
    // spawnZ = 13.5844
    // angle = 0.0000
    // weapon1 = WEAPON_SAWEDOFF
    // ammo1 = 36
    // weapon2 = WEAPON_UZI
    // ammo2 = 150
    // weapon3 = WEAPON_FIST
    // ammo3 = 0
}
```

## 相关函数

- [SetSpawnInfo](SetSpawnInfo): 用于修改指定玩家的重生信息
