---
title: 子弹命中类型
sidebar_label: 子弹命中类型
---

:::info

本页面包含所有由[OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot)使用的子弹命中类型。

:::

| 值  | 定义                                          |
| --- | --------------------------------------------- |
| 0   | 无命中（BULLET_HIT_TYPE_NONE）                |
| 1   | 命中玩家（BULLET_HIT_TYPE_PLAYER）            |
| 2   | 命中车辆（BULLET_HIT_TYPE_VEHICLE）           |
| 3   | 命中物体（BULLET_HIT_TYPE_OBJECT）            |
| 4   | 命中玩家物体（BULLET_HIT_TYPE_PLAYER_OBJECT） |

:::caution

BULLET_HIT_TYPE_PLAYER 同样适用于 NPC。该回调会忽略角色（Actor）并检测为 BULLET_HIT_TYPE_NONE。

:::
