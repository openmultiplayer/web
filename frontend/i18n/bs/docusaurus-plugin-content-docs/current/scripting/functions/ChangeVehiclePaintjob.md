---
title: ChangeVehiclePaintjob
description: Promjena paintjob-a vozila (za obične boje pogledajte ChangeVehicleColor).
tags: ["vehicle"]
---

## Deskripcija

Promjena paintjob-a vozila (za obične boje pogledajte ChangeVehicleColor).

| Name       | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
| vehicleid  | ID vozila kojem se mijenja paintjob                                   |
| paintjobid | ID paintjob-a koji se postavlja na vozilo. 3 za uklanjanje paintjob-a |

## Returns

This function always returns 1 (success), even if the vehicle passed is not created.

:::warning

Ukoliko je boja vozila crna, paintjob može da bude nevidljiv. Bolje je napraviti vozilo sa bijelom bojom prije postavljanja paintjob-a korištenjem ChangeVehicleColor(vehicleid,1,1);

:::

## Primjeri

```c
new rand = random(3); // biće ili 0 1 ili 2 (sve važeće)
ChangeVehicleColor(GetPlayerVehicleID(playerid),1,1); // pazimo da li je bijela za bolji rezultat
ChangeVehiclePaintjob(GetPlayerVehicleID(playerid), rand); // mijenja paintjob igračevog trenutnog vozila u nasumičan
```

## Srodne Funkcije

- [ChangeVehicleColor](ChangeVehicleColor): Promjena boje vozila.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): Poziva se kada se paintjob vozila promijeni.
