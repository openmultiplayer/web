---
title: GetWeaponName
description: Get the name of a weapon.
tags: []
---

## คำอธิบาย

Get the name of a weapon.

| Name           | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| weaponid       | The ID of the weapon to get the name of.                                |
| const weapon[] | An array to store the weapon's name in, passed by reference.            |
| len            | The maximum length of the weapon name to store. Should be sizeof(name). |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. The weapon specified does not exist.

The weapon's name is stored in the specified array.

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new gunname[32], string[64], playername[MAX_PLAYER_NAME + 1], killername[MAX_PLAYER_NAME + 1];
    GetWeaponName(reason, gunname, sizeof(gunname));
    GetPlayerName(playerid, playername, sizeof(playername));
    GetPlayerName(killerid, killername, sizeof(killername));
    format(string, sizeof(string), "%s has wasted %s using a %s.", killername, playername, gunname);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerWeapon: Check what weapon a player is currently holding.
- AllowInteriorWeapons: Determine if weapons can be used in interiors.
- GivePlayerWeapon: Give a player a weapon.
