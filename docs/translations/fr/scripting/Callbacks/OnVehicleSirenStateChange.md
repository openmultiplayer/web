---
title: OnVehicleSirenStateChange
description: Cette callback est appelée lorsque l'état de la sirène d'un véhicule change.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Paramètres

Cette callback est appelée lorsque l'état de la sirène d'un véhicule change.

| Nom             | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `int` playerid  | L'ID du joueur qui a déclenché la sirène (conducteur)                   |
| `int` vehicleid | L'ID du véhicule dont l'état de la sirène a changé.                     |
| `int` newstate  | **0** si la sirène a été désactivée, **1** si la sirène a été activée.  |

## Valeur de retour

Cette callback ne retourne aucune valeur particulière.

## Exemple

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if(newstate) GameTextForPlayer(playerid, "~W~Sirene ~G~on", 1000, 3);
    GameTextForPlayer(playerid, "~W~Sirene ~r~off", 1000, 3);
    return 1;
}
```

## Astuces

:::tip

Cette callback est appelée seulement lorsque l'état de la sirène change, PAS quand la sirène alternative est utilisée (maintenir klaxon).

:::

## Fonctions connexes

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): Vérifie si la sirène du véhicule est ON ou OFF.
