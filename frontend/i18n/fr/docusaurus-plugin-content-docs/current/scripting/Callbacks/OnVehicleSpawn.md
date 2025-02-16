---
title: OnVehicleSpawn
sidebar_label: OnVehicleSpawn
description: Cette callback est appelée lorsqu'un véhicule respawn (réapparaît).
tags: ["vehicle"]
---

:::warning

Cette callback est appelée **seulement** quand un véhicule **re**spawn ! [CreateVehicle](../functions/CreateVehicle) et AddStaticVehicle(Ex) n'appelleront PAS cette callback.

:::

## Paramètres

description: Cette callback est appelée lorsqu'un véhicule respawn _(réapparaît)_.

| Nom             | Description                         |
| --------------- | ----------------------------------- |
| `int` vehicleid | L'ID du véhicule qui a spawné.      |

## Valeur de retour

Cette fonction ne retourne pas de valeur spécifique.

## Exemple

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehicle %i spawn!",vehicleid);
    return 1;
}
```

## Fonctions connexes

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Respawn un véhicule.
- [CreateVehicle](../functions/CreateVehicle): Créer un vehicle.
