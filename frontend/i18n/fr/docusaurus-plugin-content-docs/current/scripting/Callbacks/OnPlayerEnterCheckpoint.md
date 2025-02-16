---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: Cette callback est appelée quand un joueur est entré dans un checkpoint.
tags: ["player", "checkpoint"]
---

## Paramètres

Cette callback est appelée quand un joueur est entré dans un checkpoint.

| Nom            | Description                                |
| -------------- | ------------------------------------------ |
| `int` playerid | Le joueur qui est entré dans le checkpoint |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
// Dans cet exemple, un checkpoint est créé pour un joueur lorsqu'il spawn,
// lequel va faire spawn un véhicule et ensuite disparaître.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Créer un checkpoint pour un joueur.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Désactive le checkpoint du joueur.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Vérifie si un joueur est dans un checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Créer un race checkpoint pour le joueur.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Désactive le race checkpoint du joueur.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Vérifie si un joueur est dans un race checkpoint.
