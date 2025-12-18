---
title: EditPlayerClass
sidebar_label: EditPlayerClass
description: 编辑一个职业数据。
tags: ["职业"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

编辑已定义的玩家职业数据。

| 参数           | 说明                                   |
| -------------- | -------------------------------------- |
| classid        | 要编辑的职业 ID                        |
| team           | 玩家生成时所属队伍                     |
| skin           | 生成时使用的[皮肤](../resources/skins) |
| Float:spawnX   | 生成点 X 坐标                          |
| Float:spawnY   | 生成点 Y 坐标                          |
| Float:spawnZ   | 生成点 Z 坐标                          |
| Float:angle    | 生成时面朝方向（角度）                 |
| WEAPON:weapon1 | 首把生成武器                           |
| ammo1          | 首把武器弹药量                         |
| WEAPON:weapon2 | 第二把生成武器                         |
| ammo2          | 第二把武器弹药量                       |
| WEAPON:weapon3 | 第三把生成武器                         |
| ammo3          | 第三把武器弹药量                       |

## 示例

```c
// 编辑职业ID 10
EditPlayerClass(10, TEAM_NONE, 299, -253.8291, 2602.9312, 62.8527, -90.0000, WEAPON_KNIFE, 1, WEAPON_MP5, 100, WEAPON_COLT45, 20);
```

## 相关函数

- [AddPlayerClass](AddPlayerClass): 添加职业
- [AddPlayerClassEx](AddPlayerClassEx): 添加带默认队伍的职业
- [GetAvailableClasses](GetAvailableClasses): 获取已定义职业数量

## 相关资源

- [皮肤 ID](../resources/skins)
- [武器 ID](../resources/weaponids)
