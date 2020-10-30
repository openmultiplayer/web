---
title: GivePlayerWeapon
description: Give a player a weapon with a specified amount of ammo.
tags: ["player"]
---

## คำอธิบาย

Give a player a weapon with a specified amount of ammo.

| Name     | Description                                 |
| -------- | ------------------------------------------- |
| playerid | The ID of the player to give a weapon to.   |
| weaponid | The ID of the weapon to give to the player. |
| ammo     | The amount of ammo to give to the player.   |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the player is not connected.

## ตัวอย่าง

```c
GivePlayerWeapon(playerid, 26, 64); // Give playerid a sawn-off shotgun with 64 ammo
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerArmedWeapon: Set a player's armed weapon.
- GetPlayerWeapon: Check what weapon a player is currently holding.
