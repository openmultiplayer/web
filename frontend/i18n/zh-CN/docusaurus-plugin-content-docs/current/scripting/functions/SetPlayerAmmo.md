---
title: SetPlayerAmmo
sidebar_label: SetPlayerAmmo
description: 设置玩家武器的弹药量。
tags: ["玩家"]
---

## 描述

设置玩家武器的弹药量。

| 参数            | 说明                                                |
| --------------- | --------------------------------------------------- |
| playerid        | 要设置武器弹药的玩家 ID                             |
| WEAPON:weaponid | 要设置弹药的武器 ID（非 SAMP 头文件中的武器槽编号） |
| ammo            | 要设置的弹药数量                                    |

## 返回值

**1** - 函数执行成功。即使指定了无效的武器槽编号（非 0-12 范围）也会返回成功

**0** - 函数执行失败。玩家未连接服务器

## 示例代码

```c
SetPlayerAmmo(playerid, WEAPON_SHOTGUN, 100); // 将霰弹枪弹药设为100发
```

## 注意事项

:::tip

参数 'weaponslot' 在 SA-MP 头文件中是拼写错误，必须使用武器 ID 而非武器槽编号

:::

:::tip

将弹药设为 0 可移除玩家背包中的武器。注意该武器仍会显示在[GetPlayerWeaponData](GetPlayerWeaponData)中，但弹药量为 0

:::

## 相关函数

- [GetPlayerAmmo](GetPlayerAmmo): 获取玩家指定武器槽的弹药量
- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家武器
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): 设置玩家当前手持武器
