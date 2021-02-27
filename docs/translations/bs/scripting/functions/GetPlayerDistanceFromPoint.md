---
title: GetPlayerDistanceFromPoint
description: Izračunaj razmak između igrača i kordinata sa mape.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c R3 i ne radi u nižim verzijama!

:::

## Deskripcija

Izračunaj razmak između igrača i kordinata sa mape.

| Ime      | Deskripcija                     |
| -------- | ------------------------------- |
| playerid | ID igrača za izračunati razmak. |
| Float:X  | X map kordinata.                |
| Float:Y  | Y map kordinata.                |
| Float:Z  | Z map kordinata.                |

## Returns

Razmak između igrača i kordinata sa mape kao float.

## Primjeri

```c
/* kada igrač napiše '/vend' u chat box, oni će vidjeti ovo.*/
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/vend", true) == 0)
    {
        new
            Float: fDistance = GetPlayerDistanceFromPoint(playerid, 237.9, 115.6, 1010.2),
            szMessage[44];

        format(szMessage, sizeof(szMessage), "Ti si %0.2f metara dalje od vending mašine.", fDistance);
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);

        return 1;
    }

    return 0;
}
```

## Srodne Funkcije

- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): Provjeri da li je igrač u blizini određene tačke.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Dobij razmak između vozila i tačke.
- [GetPlayerPos](GetPlayerPos): Dobij poziciju igrača.
