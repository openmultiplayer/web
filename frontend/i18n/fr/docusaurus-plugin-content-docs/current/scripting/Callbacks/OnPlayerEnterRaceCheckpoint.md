---
title: OnPlayerEnterRaceCheckpoint
sidebar_label: OnPlayerEnterRaceCheckpoint
description: Cette callback est appelée quand un joueur est entré dans un race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Paramètres

Cette callback est appelée quand un joueur est entré dans un race checkpoint.

| Nom            | Description                                     |
| -------------- | ----------------------------------------------- |
| `int` playerid | Le joueur qui est entré dans le race checkpoint |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Le joueur %d entre dans la course !", playerid);
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
