---
title: SetPlayerArmedWeapon
sidebar_label: SetPlayerArmedWeapon
description: 设置玩家当前手持的武器（必须是玩家已拥有的武器）
tags: ["玩家"]
---

## 描述

设置玩家当前手持的武器（必须是玩家已拥有的武器）

| 参数名          | 说明                                         |
| --------------- | -------------------------------------------- |
| playerid        | 要设置武器的玩家 ID                          |
| WEAPON:weaponid | 玩家应持有的[武器](../resources/weaponids)ID |

## 返回值

**1** - 函数执行成功。即使玩家未拥有指定武器或武器 ID 无效，仍会返回成功

**0** - 函数执行失败。玩家未连接

## 示例

```c
public OnPlayerUpdate(playerid)
{
    SetPlayerArmedWeapon(playerid, WEAPON_FIST); // 禁用武器
    return 1;
}

// SMG driveby by [03]Garsino
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER || newstate == PLAYER_STATE_PASSENGER)
    {
        new
            weapon,
            ammo;

        GetPlayerWeaponData(playerid, WEAPON_SLOT_MACHINE_GUN, weapon, ammo); // 获取玩家在第4武器槽位（WEAPON_SLOT_MACHINE_GUN）的冲锋枪
        SetPlayerArmedWeapon(playerid, weapon); // 设置玩家使用冲锋枪进行车载射击
    }
    return 1;
}
```

## 注意事项

:::tip

该函数仅切换玩家已持有的武器，不会给予新武器。具体给予武器功能请参考 GivePlayerWeapon

:::

## 相关函数

- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家武器
- [GetPlayerWeapon](GetPlayerWeapon): 获取玩家当前手持武器

## 相关资源

- [武器 ID](../resources/weaponids)
- [武器槽位](../resources/weaponslots)
