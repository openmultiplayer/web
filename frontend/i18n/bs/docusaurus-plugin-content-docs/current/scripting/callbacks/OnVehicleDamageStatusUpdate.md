---
title: OnVehicleDamageStatusUpdate
description: Ovaj callback je pozvan kada dio vozila kao npr vrata, gume, paneli, ili svjetla promijene svoj status oštećenja.
tags: ["vehicle"]
---

:::tip

Za neke korisne funkcije za raditi sa vozilima sa vrijednostima oštećenja vozila, pogledajte [ovdje](../resources/damagestatus.md).

:::

## Deskripcija

Ovaj callback je pozvan kada dio vozila kao npr vrata, gume, paneli, ili svjetla promijene svoj status oštećenja.

| Ime       | Deskripcija                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| vehicleid | ID vozila kojem je promijenjen status oštećenja.                                                         |
| playerid  | ID igrača koji je sinhronizovao promjenu u statusu oštećenja (onaj koji je vozilo oštetio ili popravio). |

## Returns

1 - Spriječiti će da ostale filterskripte primaju ovaj callback.

0 - Ukazuje da će ovaj callback biti proslijeđen do naredne filterskripte.

Uvijek je pozvan prvo u filterskriptama.

## Primjeri

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Doznajte status oštećenja svih ovih dijelova
    new panels, doors, lights, tires;
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

    // postavimo gume na 0, što znači da su probušene
    tires = 0;

    // Ažuriraj status oštećenja vozila sa probušenim gumama
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;
}
```

## Zabilješke

:::tip

Ovo ne uključuje promjene u healthu/zdravlju vozila.

:::

## Srodne Funkcije

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus.md): Doznajte stanje oštećenja vozila za svaki dio pojedinačno.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus.md): Ažuriraj oštećenost vozila.
