---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: Appelée lorsqu'un joueur change la peinture de son véhicule (dans un transfender/dans le wheel arch angel).
tags: ["vehicle"]
---

## Paramètres

Appelée lorsqu'un joueur change la peinture de son véhicule _(dans un transfender/dans le wheel arch angel)_.

| Nom                | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `int` playerid     | L'ID du joueur qui a changé la peinture de son véhicule. |
| `int` vehicleid    | L'ID du véhicule dont la peinture a été changée.         |
| `int`   paintjobid | L'ID du nouveau paintjob.                                |

## Valeur de retour

Cette fonction ne retourne pas de valeur spécifique.

## Exemple

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    
    format(string, sizeof(string), "Tu as changé la peinture de ton véhicule en : %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    
    return 1;
}

```

## Astuces

:::tip

La callback est appelée lorsque le joueur modifie la peinture DANS le transfender/wheel arch angel !

:::

## Fonctions connexes

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Change the paintjob on a vehicle.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Set the color of a vehicle.

## Callbacks connexes

- [OnVehicleRespray](OnVehicleRespray): Called when a vehicle is resprayed.
- [OnVehicleMod](OnVehicleMod): Called when a vehicle is modded.
