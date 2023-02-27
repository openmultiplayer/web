---
title: SetVehicleAngularVelocity
description: Beállítja a jármű X, Y és Z szögsebességét.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3b' />

:::info

Ez a függvény a _world_ térben van, nem a _local_ térben. Ha a helyi tér szögsebességét szeretné módosítani, akkor a [jármű rotációs quat](GetVehicleRotationQuat) alapján elforgatási mátrixot kell alkalmaznia.

:::

## Leírás

Beállítja a jármű X, Y és Z szögsebességét

| Név       | Leírás                                              |
| --------- | --------------------------------------------------- |
| vehicleid | A jármű azonosítója a sebesség beállításához.       |
| Float:X   | A sebesség mértéke az X szögirányban.               |
| Float:Y   | A sebesség mértéke az Y szögirányban.               |
| Float:Z   | A sebesség mértéke az Z szögirányban.               |

## Visszatérés

1: A funkció sikeresen végrehajtva.

0: A funkció végrehajtása nem sikerült. A jármű nem létezik.

## Példák

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/spin", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleAngularVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 2.0);
        }
        return 1;
    }
}
```

## Megjegyzések

:::warning

Ez a funkció nincs hatással az üres járművekre, és nincs hatással a vonatokra.

:::

## Related Functions

- [SetVehicleVelocity](SetVehicleVelocity): A jármű sebességének a beállítása
- [GetVehicleVelocity](GetVehicleVelocity): A jármű sebességének a lekérdezése.
