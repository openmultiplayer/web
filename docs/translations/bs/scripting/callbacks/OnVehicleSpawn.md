---
title: OnVehicleSpawn
description: Ovaj callback je pozvan kada se vozilo respawnuje/ponovo stvori.
tags: ["vehicle"]
---

:::warning

Ovaj callback je pozvan **samo** kada se vozilo **re**spawnuje! CreateVehicle i AddStaticVehicle(Ex) **NEĆE** pokretati ovaj callback.

:::

## Deskripcija

Ovaj callback je pozvan kada se vozilo respawnuje/ponovo stvori.

| Ime       | Deskripcija                            |
| --------- | -------------------------------------- |
| vehicleid | ID vozila koje se spawnovalo/stvorilo. |

## Returns

1 - Spriječiti će da ostale filterskripte primaju ovaj callback.

0 - Ukazuje da će ovaj callback biti proslijeđen do naredne filterskripte.

Uvijek je pozvan prvo u filterskriptama.

## Primjeri

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vozilo %i se spawnovalo!",vehicleid);
    return 1;
}
```

## Srodne Funkcije

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn.md): Respawnuj vozilo.
- [CreateVehicle](../functions/CreateVehicle.md): Kreiraj vozilo.
