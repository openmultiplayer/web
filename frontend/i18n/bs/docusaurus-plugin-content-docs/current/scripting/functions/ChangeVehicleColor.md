---
title: ChangeVehicleColor
sidebar_label: ChangeVehicleColor
description: Promjena primarne i sekundarne boje vozila.
tags: ["vehicle"]
---

## Deskripcija

Promjena primarne i sekundarne boje vozila.

| Ime       | Deskripcija                                    |
| --------- | ---------------------------------------------- |
| vehicleid | ID vozila za koje će se promijeniti boje       |
| color1    | Primarna boja vozila                           |
| color2    | Sekundarna boja vozila                         |

## Returns

1: Funkcija je uspješno izvršena. Boje vozila su uspješno promjenjene.

0: Funkcija nije uspješno izvršena. Vozilo ne postoji.

## Primjeri

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // Promjena primarne boje u crnu i sekundarne boje u bijelu
    ChangeVehicleColor(vehicleid, 0, 1);
    return 1;
}
```

## Zabilješke

:::tip

Neka vozilo imaju samo primarnu boju i nekim vozilima se boje ne mogu promjeniti uopšte. Nekoliko vozila (cement, squallo) imaju 4 boje, od kojih se 2 ne mogu promjeniti u SA:MP

:::

## Srodne Funkcije

- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): Promjena paintjob-a na vozilu.
- [OnVehicleRespray](../callbacks/OnVehicleRespray): Poziva se kada je vozilo preprskano.
