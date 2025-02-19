---
title: SetVehicleVelocity
sidebar_label: SetVehicleVelocity
description: Postavlja X, Y i Z brzinu vozila.
tags: ["vehicle"]
---

## Deskripcija

Postavlja X, Y i Z brzinu vozila.

| Ime       | Deskripcija                    |
| --------- | ------------------------------ |
| vehicleid | ID vozila za postaviti brzinu. |
| Float:X   | Brzina u X smjeru.             |
| Float:Y   | Brzina u Y smjeru.             |
| Float:Z   | Brzina u Z smjeru.             |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Vozilo ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 0.2);
        }
        return 1;
    }
}
```

## Zabilješke

:::warning

Ova funkcija ne utječe na vozila koja nisu zauzeta i ne utječe na vlakove.

:::

## Srodne Funkcije
