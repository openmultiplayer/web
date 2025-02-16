---
title: ResetPlayerWeapons
description: Removes all weapons from a player.
tags: ["player"]
---

## คำอธิบาย

Removes all weapons from a player.

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| playerid | The ID of the player whose weapons to remove. |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Remove the killer's weapons
    ResetPlayerWeapons(killerid);
    return 1;
}
```

## บันทึก

:::tip

To remove individual weapons from a player, set their ammo to 0 using SetPlayerAmmo.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GivePlayerWeapon](../functions/GivePlayerWeapon.md): Give a player a weapon.
- [GetPlayerWeapon](../functions/GetPlayerWeapon.md): Check what weapon a player is currently holding.
