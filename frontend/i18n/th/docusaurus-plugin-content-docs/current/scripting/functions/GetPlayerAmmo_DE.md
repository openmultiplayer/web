---
title: GetPlayerAmmo_DE
sidebar_label: GetPlayerAmmo_DE
description: Gibt die Munition der vom Spieler aktuell gehaltenen Waffe zurück.
tags: ["player"]
---

## คำอธิบาย

Gibt die Munition der vom Spieler aktuell gehaltenen Waffe zurück.

| Name     | Description          |
| -------- | -------------------- |
| playerid | Die ID des Spielers. |

## ส่งคืน

Die Anzahl der Munition von der vom Spieler aktuell gehaltenen Waffe.

## ตัวอย่าง

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAmmo(playerid) > 25) // prüft ob die Munition des Spielers über 25 liegt.
    {
        SetPlayerAmmo(playerid,25) // setzt die Munition zurück auf 25
    }
    return 1;
}
```

## บันทึก

:::warning

Die Munition kann nur 16-bit Werte enthalten. Dies bedeutet dass die Funktion bei mehr Munition als 32767 einen fehlerhaften Wert zurückgibt.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerAmmo](../functions/SetPlayerAmmo): Set the ammo of a specific player's weapon.
- [GetPlayerWeaponData](../functions/GetPlayerWeaponData): Find out information about weapons a player has.
