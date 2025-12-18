---
title: RemovePlayerWeapon
sidebar_label: RemovePlayerWeapon
description: 移除玩家指定的武器。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

移除玩家指定的武器。

| 参数            | 说明                                      |
| --------------- | ----------------------------------------- |
| playerid        | 需要移除武器的玩家 ID                     |
| WEAPON:weaponid | 要移除的[武器 ID](../resources/weaponids) |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。通常表示玩家未连接。

## 示例

```c
RemovePlayerWeapon(playerid, WEAPON_DEAGLE); // 移除玩家的沙漠之鹰手枪
```

## 相关函数

- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家武器
- [ResetPlayerWeapons](ResetPlayerWeapons): 移除玩家所有武器
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): 设置玩家手持武器
- [GetPlayerWeapon](GetPlayerWeapon): 获取玩家当前手持武器

## 相关资源

- [武器 ID 列表](../resources/weaponids)
