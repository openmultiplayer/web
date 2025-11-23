---
title: OnVehicleRespray
sidebar_label: OnVehicleRespray
description: Ovaj callback je pozvan kada igrač napusti mod shop, bilo da boja jeste ili nije promijenjena.
tags: ["vehicle"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač napusti mod shop (respray mod shop), bilo da boja jeste ili nije promijenjena. Pripazi, ime je dvosmisleno, Pay 'n' Spray shopovine pozivaju ovaj callback.

| Ime       | Deskripcija                                  |
| --------- | -------------------------------------------- |
| playerid  | ID igrača koji vozi vozilo.                  |
| vehicleid | ID vozila koje je respray-ovano.             |
| color1    | Primarna boja vozila koja je promijenjena.   |
| color2    | Sekundarna boja vozila koja je promijenjena. |

## Returns

Uvijek je pozvan prvo u gamemodeu tako da će return-ovanje 0 ovdje blokirati ostale skripte da ga vide.

## Primjeri

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback nije pozvan od strane `ChangeVehicleColor`. Zavaravajući, ovaj callback nije pozvan za pay 'n' spray (samo modshopovi).

Rješenje ovdje: https://pastebin.com/G81da7N1

:::

:::warning

Poznati bug(ovi): pregled komponente unutar mod shopa može pozvati ovaj callback.

:::

## Srodne Funkcije

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Postavi boju vozila.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Promijeni paintjob vozila.
- [OnVehiclePaintjob](OnVehiclePaintjob): Pozvano kada se paintjob vozila promijeni.
- [OnVehicleMod](OnVehicleMod): Pozvano kada se vozilo modira/uredi.
- [OnEnterExitModShop](OnEnterExitModShop): Pozvano kada vozilo uđe ili izađe u/iz mod shopa.
