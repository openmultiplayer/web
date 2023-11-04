---
title: GetPlayerAmmo
description: Gets the amount of ammo in a player's current weapon.
tags: ["player"]
---

## คำอธิบาย

Gets the amount of ammo in a player's current weapon.

| Name     | Description                             |
| -------- | --------------------------------------- |
| playerid | The ID of the player whose ammo to get. |

## ส่งคืน

The amount of ammo in the player's current weapon.

## ตัวอย่าง

```c
ShowPlayerAmmo(playerid)
{
    new ammo = GetPlayerAmmo(playerid);
    new infoString[16];
    format(infoString, sizeof(infoString), "Ammo: %i", ammo);
    SendClientMessage(playerid, -1, infoString);
}
```

## บันทึก

:::warning

The ammo can hold 16-bit values, therefore values over 32767 will return erroneous values.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerAmmo](SetPlayerAmmo): Set the ammo of a specific player's weapon.
- [GetPlayerWeaponData](GetPlayerWeaponData): Find out information about weapons a player has.
