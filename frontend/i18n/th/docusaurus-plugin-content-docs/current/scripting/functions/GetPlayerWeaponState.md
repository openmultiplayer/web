---
title: GetPlayerWeaponState
sidebar_label: GetPlayerWeaponState
description: Check the state of a player's weapon.
tags: ["player"]
---

## คำอธิบาย

Check the state of a player's weapon.

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| playerid | The ID of the player to obtain the weapon state of. |

## ส่งคืน

The state of the player's weapon. 0 if player specified does not exist.

## ตัวอย่าง

```c
public OnPlayerSpawn(playerid)
{
    SetPVarInt(playerid, "WepState", GetPlayerWeaponState(playerid));
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GivePlayerWeapon: Give a player a weapon.
