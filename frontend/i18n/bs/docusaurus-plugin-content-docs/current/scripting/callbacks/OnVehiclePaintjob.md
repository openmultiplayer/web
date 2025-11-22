---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: Pozvano kada igrač pregleda paintjob vozila unutar mod shopa.
tags: ["vehicle"]
---

## Deskripcija

Pozvano kada igrač pregleda paintjob vozila unutar mod shopa. Pripazi, ovaj callback nije pozvan kada igrač kupi paintjob.

| Ime        | Deskripcija                                        |
| ---------- | -------------------------------------------------- |
| playerid   | ID igrača koji je promijenio paintjob svog vozila. |
| vehicleid  | ID voozila kojem se promijenio paintjob.           |
| paintjobid | ID novog paintjob-a.                               |

## Returns

Uvijek je pozvan prvo u gamemodeu tako da će return-ovanje 0 ovdje blokirati ostale skripte da ga vide.

## Primjeri

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "Promijenio si paintjob vozila na %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback nije pozvan od strane `ChangeVehiclePaintjob`. Možete koristiti `OnVehicleChangePaintjob` iz vSync-a u slučaju da znate kada igrač kupi paintjob.

:::

## Srodne Funkcije

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Promijeni paintjob vozila.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Postavi boju vozila.
- [OnVehicleRespray](OnVehicleRespray): Pozvan kada vozilo biva respray-ovano (ponovno obojeno).
- [OnVehicleMod](OnVehicleMod): Pozvano kada vozilo biva modovano/uređeno.
