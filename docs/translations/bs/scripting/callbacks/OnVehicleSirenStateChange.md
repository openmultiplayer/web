---
title: OnVehicleSirenStateChange
description: Ovaj callback je pozvan kada se uključi/isključi sirena vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada se uključi/isključi sirena vozila.

| Ime       | Deskripcija                                            |
| --------- | ------------------------------------------------------ |
| playerid  | ID igrača koji je uključio/isključio sirenu (vozač).   |
| vehicleid | ID vozila u kojem je sirena uključena/isključena.      |
| newstate  | 0 ako je sirena isključena, 1 ako je sirena uključena. |

## Returns

1 - Spriječiti će da gamemode prima ovaj callback.

0 - Ukazuje da će ovaj callback biti proslijeđen do gamemodea.

Uvijek je pozvan prvo u filterskriptama.

## Primjeri

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Sirena ~G~ukljucena", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Sirena ~r~iskljucena", 1000, 3);
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback je pozvan samo kada se sirena vozila uključi/isključi, NE kada upravljate sirenom tako što je držite.

:::

## Srodne Funkcije

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): Provjeri da li je sirena vozila uključena ili isključena
