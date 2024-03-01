---
title: SetPlayerArmedWeapon
description: Sets which weapon (that a player already has) the player is holding.
tags: ["player"]
---

## คำอธิบาย

Sets which weapon (that a player already has) the player is holding.

| Name     | Description                                                |
| -------- | ---------------------------------------------------------- |
| playerid | The ID of the player to arm with a weapon.                 |
| weaponid | The ID of the weapon that the player should be armed with. |

## ส่งคืน

1: The function was executed successfully. Success is returned even when the function fails to execute (the player doesn't have the weapon specified, or it is an invalid weapon).

0: The function failed to execute. The player is not connected.

## ตัวอย่าง

```c
public OnPlayerUpdate(playerid)
{
    SetPlayerArmedWeapon(playerid,0); // disables weapons
    return 1;
}
// SMG driveby by [03]Garsino
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER || newstate == PLAYER_STATE_PASSENGER)
    {
        new weapon, ammo;
        GetPlayerWeaponData(playerid, 4, weapon, ammo); // Get the players SMG weapon in slot 4
        SetPlayerArmedWeapon(playerid, weapon); // Set the player to driveby with SMG
    }
    return 1;
}
```

## บันทึก

:::tip

This function arms a player with a weapon they already have; it does not give them a new weapon. See GivePlayerWeapon.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GivePlayerWeapon: Give a player a weapon.
- GetPlayerWeapon: Check what weapon a player is currently holding.
