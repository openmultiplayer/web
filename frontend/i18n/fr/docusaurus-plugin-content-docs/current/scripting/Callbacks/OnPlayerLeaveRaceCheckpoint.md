---
title: OnPlayerLeaveRaceCheckpoint
sidebar_label: OnPlayerLeaveRaceCheckpoint
description: Cette callback est appelée quand un joueur quitte un race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Paramètres

Cette callback est appelée quand un joueur quitte un race checkpoint.

| Nom            | Description                                      |
| -------------- | ------------------------------------------------ |
| `int` playerid | ID du joueur qui a quitté le race checkpoint     |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("Le joueur %i a quitté le race checkpoint!", playerid);
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Créer un checkpoint pour un joueur.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Désactive le checkpoint actuel du joueur.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Vérifie si un joueur est un dans race checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Créer un race checkpoint pour un joueur.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Désactive le race checkpoint actuel du joueur.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Vérifie si un joueur est dans un race checkpoint.
