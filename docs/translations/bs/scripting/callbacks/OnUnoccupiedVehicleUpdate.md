---
title: OnUnoccupiedVehicleUpdate
description: Ovaj callback je pozvan kada igračev klijent ažurira/sinhronizuje poziciju vozila kojeg on ne vozi.
tags: ["vehicle"]
---

## Deskripcija

Ovaj callback je pozvan kada igračev klijent ažurira/sinhronizuje poziciju vozila kojeg on ne vozi. Ovo se može desiti kada je igrač van automobila ili kada se igrač nalazi kao putnik u vozilu koje nema vozača.

| Ime            | Deskripcija                                                                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid      | ID vozila čija je pozicija ažurirana.                                                                                                                      |
| playerid       | ID igrača koji je poslao sinhronizaciju ažuriranja pozicije vozila.                                                                                        |
| passenger_seat | ID sjedišta na kojem se igrač nalazi kao putnik. 0=nije u vozilu, 1=suvozač, 2=leđa s lijeva 3=leđa s desna 4+ je za kombije i autobuse sa mnogo sjedišta. |
| new_x          | Nova X kordinata vozila.                                          |
| new_y          | Nova Y kordinata vozila.                                          |
| new_z          | Nova Z kordinata vozila.                                          |
| vel_x          | Nova X brzina vozila.                                             |
| vel_y          | Nova X brzina vozila.                                             |
| vel_z          | Nova X brzina vozila.                                             |

## Returns

Uvijek je pozvan prvo u filterskriptama tako da će return-ovanje 0 ovdje blokirati ostale skripte da ga vide.

## Primjeri

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Provjeri ako se pomjerio daleko
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Odbijte ažuriranje
        return 0;
    }

    return 1;
}
```

## Notes

:::warning

Ovaj callback poziva se vrlo često u sekundi po nezauzetom vozilu. Trebali biste se suzdržati od provođenja intenzivnih proračuna ili intenzivnih operacija pisanja / čitanja datoteka u ovom callbacku. GetVehiclePos return-ovati će stare koordinate vozila prije ovog ažuriranja.

:::

## Srodne Funkcije
