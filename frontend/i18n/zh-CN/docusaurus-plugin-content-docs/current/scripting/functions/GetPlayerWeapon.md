---
title: GetPlayerWeapon
sidebar_label: GetPlayerWeapon
description: 获取玩家当前持有的武器ID
tags: ["玩家"]
---

## 描述

获取玩家当前手持武器的 ID 编号

| 参数     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取武器信息的玩家 ID |

## 返回值

玩家当前持有的武器 ID。若指定玩家不存在，返回 **-1**

## 示例代码

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 检测杀手是否为有效玩家
    if (killerid != INVALID_PLAYER_ID)
    {
        // WEAPON_MINIGUN常量在标准库中预定义为38（火神机枪）
        if (GetPlayerWeapon(killerid) == WEAPON_MINIGUN)
        {
            // 检测到火神机枪则封禁
            Ban(killerid);
        }
    }
    return 1;
}
```

## 注意事项

:::tip

当玩家处于驾驶状态(`PLAYER_STATE_DRIVER`)或乘客状态(`PLAYER_STATE_PASSENGER`)时，此函数返回玩家进入车辆前持有的武器。若通过作弊手段在车辆内生成武器，此函数无法检测。

:::

:::warning

有时可能返回 **-1**（无效武器 ID），具体原因尚未明确，建议遇到此返回值时丢弃相关数据。

:::

## 相关函数

- [GetPlayerWeaponData](GetPlayerWeaponData): 获取玩家武器库详细信息
- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家指定武器
- [ResetPlayerWeapons](ResetPlayerWeapons): 清空玩家所有武器
- [RemovePlayerWeapon](RemovePlayerWeapon): 移除玩家特定武器

## 相关资源

- [武器 ID 列表](../resources/weaponids)
