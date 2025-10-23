---
title: GivePlayerWeapon
sidebar_label: GivePlayerWeapon
description: 给予玩家指定武器及弹药。
tags: ["玩家"]
---

## 描述

为玩家添加指定武器及相应数量的弹药。

| 参数名          | 说明                                      |
| --------------- | ----------------------------------------- |
| playerid        | 目标玩家的 ID 编号                        |
| WEAPON:weaponid | 要给予的[武器 ID](../resources/weaponids) |
| ammo            | 给予的弹药数量                            |

## 返回值

**1** - 操作成功执行

**0** - 操作执行失败（玩家未连接）

## 示例

```c
GivePlayerWeapon(playerid, WEAPON_SAWEDOFF, 64); // 给予玩家短管霰弹枪及64发弹药
```

## 相关函数

- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): 设置玩家当前手持武器
- [GetPlayerWeapon](GetPlayerWeapon): 获取玩家当前持有的武器
- [ResetPlayerWeapons](ResetPlayerWeapons): 移除玩家所有武器
- [RemovePlayerWeapon](RemovePlayerWeapon): 移除玩家指定武器

## 相关资源

- [武器 ID 对照表](../resources/weaponids)
