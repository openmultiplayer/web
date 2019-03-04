---
title: GetPlayerAmmo_DE
description: Gibt die Munition der vom Spieler aktuell gehaltenen Waffe zurück.
tags: ["player"]
---

# GetPlayerAmmo_DE

<TagLinks />

## Description

Gibt die Munition der vom Spieler aktuell gehaltenen Waffe zurück.

| Name     | Description          |
| -------- | -------------------- |
| playerid | Die ID des Spielers. |

## Returns

Die Anzahl der Munition von der vom Spieler aktuell gehaltenen Waffe.

## Examples

```c
public OnPlayerUpdate(playerid)
{
    if(GetPlayerAmmo(playerid) > 25) // prüft ob die Munition des Spielers über 25 liegt.
    {
        SetPlayerAmmo(playerid,25) // setzt die Munition zurück auf 25
    }
    return 1;
}
```

## Notes

::: warning

Die Munition kann nur 16-bit Werte enthalten. Dies bedeutet dass die Funktion bei mehr Munition als 32767 einen fehlerhaften Wert zurückgibt.

:::

## Related Functions

- SetPlayerAmmo: Set the ammo of a specific player's weapon.
- GetPlayerWeaponData: Find out information about weapons a player has.
