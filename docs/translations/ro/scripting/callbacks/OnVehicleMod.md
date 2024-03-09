---
title: OnVehicleMod
description: Acest callback este apelat atunci când un vehicul este modificat.
tags: ["vehicle"]
---

## Descriere

Acest callback este apelat atunci când un vehicul este modificat.

| Nume        | Descriere                                               |
| ----------- | ------------------------------------------------------- |
| playerid    | Actul de identitate al șoferului vehiculului.           |
| vehicleid   | ID-ul vehiculului care este modificat.                  |
| componentid | ID-ul componentei care a fost adăugată vehiculului.     |

## Returnări

Este întotdeauna numit primul în modul de joc, așa că întoarcerea 0 blochează și alte filterscript-uri să-l vadă.

## Exemple

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Vehiculul %d a fost modificat de ID %d cu componentul %d",vehicleid, playerid,componentid);
    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Trucuri de reglare"); // Script anti-tuning hacks
        return 0; // Împiedică modificarea proastă să fie sincronizată cu alți jucători
        //(Testat și funcționează chiar și pe servere care vă permit să vă modificați vehiculul folosind comenzi, meniuri, dialoguri etc.
    }
    return 1;
}
```

## Note

:::tip

Acest apel invers NU este apelat de AddVehicleComponent.

:::

## Funcții similare

- [AddVehicleComponent](../functions/AddVehicleComponent): Adăugați o componentă la un vehicul.
- [OnEnterExitModShop](OnEnterExitModShop): apelat atunci când un vehicul intră sau iese dintr-un magazin de mod.
- [OnVehiclePaintjob](OnVehiclePaintjob): apelat atunci când se modifică vopsirea unui vehicul.
- [OnVehicleRespray](OnVehicleRespray): apelat atunci când un vehicul este recolorat.