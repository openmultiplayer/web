---
title: OnVehicleMod
sidebar_label: OnVehicleMod
description: Ovaj callback je pozvan kada vozilo biva modirano/uređeno.
tags: ["vehicle"]
---

## Deskripcija

Ovaj callback je pozvan kada vozilo biva modirano/uređeno.

| Ime         | Deskripcija                             |
| ----------- | --------------------------------------- |
| playerid    | ID vozača vozila.                       |
| vehicleid   | ID vozila koje je modirano/uređeno.     |
| componentid | ID komponente koja je dodana na vozilo. |

## Returns

Uvijek je pozvan prvo u gamemodeu tako da će return-ovanje 0 ovdje blokirati ostale skripte da ga vide.

## Primjeri

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Vehicle %d was modded by ID %d with the componentid %d",vehicleid, playerid,componentid);
    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Anti-tuning hacks skripta
        return 0; // Sprječava sinhronizaciju loše modifikacije s drugim igračima
        //Testirano i radi čak i na serverima koji vam omogućavaju modifikaciju vozila sa komandama, menijima, dijalozima, itd...
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback neće biti pozvan od strane `AddVehicleComponent`.

:::

## Srodne Funkcije

- [AddVehicleComponent](../functions/AddVehicleComponent): Dodaj komponentu na vozilo.
- [OnEnterExitModShop](OnEnterExitModShop): Pozvano kada vozilo uđe ili izađe u mod shop.
- [OnVehiclePaintjob](OnVehiclePaintjob): Pozvano kada se paintjob vozila promijeni.
- [OnVehicleRespray](OnVehicleRespray): Pozvano kada vozilo biva respray-ovano(ponovno obojeno).
