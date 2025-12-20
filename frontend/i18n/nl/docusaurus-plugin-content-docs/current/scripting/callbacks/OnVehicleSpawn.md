---
title: OnVehicleSpawn
sidebar_label: OnVehicleSpawn
description: Deze callback wordt aangeroepen wanneer een voertuig respawnt.
tags: ["vehicle"]
---

:::warning

Deze callback wordt **alleen** aangeroepen wanneer een voertuig **re**spawnt! CreateVehicle en AddStaticVehicle(Ex) **triggeren** deze callback **niet**.

:::

## Beschrijving

Deze callback wordt aangeroepen wanneer een voertuig respawnt.

| Naam      | Beschrijving                         |
| --------- | ----------------------------------- |
| vehicleid | Het ID van het voertuig dat spawnde. |

## Returns

0 - Voorkomt dat andere filterscripts deze callback ontvangen.

1 - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehicle %i spawned!",vehicleid);
    return 1;
}
```

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnVehicleDeath](OnVehicleDeath): Deze callback wordt aangeroepen wanneer een voertuig wordt vernietigd.
- [OnPlayerSpawn](OnPlayerSpawn): Deze callback wordt aangeroepen wanneer een speler spawnt.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Respawn een voertuig.
- [CreateVehicle](../functions/CreateVehicle): Maak een voertuig.
