---
title: OnTrailerUpdate
sidebar_label: OnTrailerUpdate
description: Ovaj callback je pozvan kada igrač pošalje trailer update.
tags: []
---

## Deskripcija

Ovaj callback je pozvan kada igrač pošalje trailer update.

| Ime       | Deskripcija                             |
| --------- | --------------------------------------- |
| playerid  | ID igrača koji je poslao trailer update |
| vehicleid | Trailer koji biva ažuriran              |

## Returns

0 - Prekida svako trailer ažuriranje da bude poslano ostalim igračima. Ažuriranje se i dalje šalje igraču za ažuriranje.

1 - Obrađuje trailer ažuriranje normalno i sinhronizira ga između svih igrača.

Uvijek je pozvan prvo u filterskriptama.

## Primjeri

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Zabilješke

:::warning

Ovaj callback poziva se vrlo često u sekundi po traileru.Trebali biste se suzdržati od provođenja intenzivnih proračuna ili intenzivnih operacija pisanja / čitanja fajlova u ovom callbacku.

:::

## Srodne Funkcije

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Provjeri koji trailer vozilo vuče.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Provjeri da li je trailer prikvačen za vozilo.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Prikvači trailer za vozila.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Otkači trailer od vozila.
