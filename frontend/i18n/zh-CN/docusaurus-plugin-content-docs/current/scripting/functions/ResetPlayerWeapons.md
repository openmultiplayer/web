---
title: ResetPlayerWeapons
sidebar_label: ResetPlayerWeapons
description: 移除玩家所有武器。
tags: ["玩家"]
---

## 描述

移除指定玩家的所有武器。

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要移除武器的玩家 ID |

## 返回值

**1** - 函数执行成功。

**0** - 函数执行失败。通常表示指定玩家不存在。

## 示例

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 移除击杀者的所有武器
    ResetPlayerWeapons(killerid);
    return 1;
}
```

## 注意要点

:::tip

如需移除单个武器，请使用[SetPlayerAmmo](SetPlayerAmmo)将对应武器的弹药量设为 0

:::

## 相关函数

- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家武器
- [GetPlayerWeapon](GetPlayerWeapon): 获取玩家当前手持武器
- [RemovePlayerWeapon](RemovePlayerWeapon): 移除玩家指定武器
