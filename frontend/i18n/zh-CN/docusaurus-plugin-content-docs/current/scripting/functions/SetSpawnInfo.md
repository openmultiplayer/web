---
title: SetSpawnInfo
sidebar_label: SetSpawnInfo
description: 设置指定玩家的生成信息。
tags: ["玩家"]
---

## 描述

该函数用于设置指定玩家的生成信息，可配置生成时的武器、队伍、皮肤及坐标。适用于迷你游戏或自动生成系统，相比在[OnPlayerSpawn](../callbacks/OnPlayerSpawn)或[OnPlayerRequestClass](../callbacks/OnPlayerRequestClass)中使用[SetPlayerSkin](SetPlayerSkin)更稳定。

| 参数名         | 说明                                      |
| -------------- | ----------------------------------------- |
| playerid       | 需要设置生成信息的玩家 ID                 |
| team           | 玩家所属队伍 ID                           |
| skin           | 生成时使用的[皮肤 ID](../resources/skins) |
| Float:spawnX   | 生成点的 X 坐标                           |
| Float:spawnY   | 生成点的 Y 坐标                           |
| Float:spawnZ   | 生成点的 Z 坐标                           |
| Float:angle    | 生成后的面朝方向（角度制）                |
| WEAPON:weapon1 | 第一主武器 ID                             |
| ammo1          | 第一主武器弹药量                          |
| WEAPON:weapon2 | 第二副武器 ID                             |
| ammo2          | 第二副武器弹药量                          |
| WEAPON:weapon3 | 第三近战武器 ID                           |
| ammo3          | 第三近战武器弹药量                        |

## 返回值

本函数没有特定返回值。

## 示例代码

```c
public OnPlayerRequestClass(playerid, classid)
{
    // 设置玩家生成信息：CJ皮肤(0号)，拉斯云祖华坐标
    // 携带36发短管霰弹枪(WEAPON_SAWEDOFF)和150发乌兹冲锋枪(WEAPON_UZI)
    SetSpawnInfo(playerid, NO_TEAM, 0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);
}
```

## 注意事项

:::warning

- 若不需要队伍归属，请将 team 参数设为`NO_TEAM`(255)
- open.mp 中 0 号队伍为有效队伍（与 SA-MP 存在差异）

:::

## 相关函数

- [GetSpawnInfo](GetSpawnInfo): 获取玩家当前生成配置
- [SetPlayerSkin](SetPlayerSkin): 设置玩家皮肤
- [SetPlayerTeam](SetPlayerTeam): 设置玩家队伍
- [SpawnPlayer](SpawnPlayer): 强制玩家生成

## 相关资源

- [皮肤 ID 列表](../resources/skins)
- [武器 ID 列表](../resources/weaponids)
