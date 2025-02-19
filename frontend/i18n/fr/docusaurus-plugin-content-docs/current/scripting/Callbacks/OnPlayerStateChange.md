---
title: OnPlayerStateChange
sidebar_label: OnPlayerStateChange
description: Cette callback est appelée lorsqu'un joueur change d'état (à pied, dans un véhicule, en mode spectateur, etc...).
tags: ["player"]
---

## Paramètres

Cette callback est appelée lorsqu'un joueur change d'état _(à pied, dans un véhicule, en mode spectateur, etc...)_.

| Nom            | Description                        |
| -------------- | ---------------------------------- |
| `int` playerid | L'ID du joueur qui a changé d'état |
| `int` newstate | Le nouvel état du joueur           |
| `int` oldstate | L'ancien état du joueur.           |

Voir ["Player States"](../resources/playerstates) pour une liste complète de tous les états d'un joueur.

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Le joueur entre dans un véhicule en tant que conducteur (driver).
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Ajoute de la nitro (NOS) au véhicule
    }
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes

- [GetPlayerState](../functions/GetPlayerState): Permet de connaître l'actuel état du joueur.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Permet de connaître la "special action" actuelle du joueur.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Mettre une "special action" à un joueur.
