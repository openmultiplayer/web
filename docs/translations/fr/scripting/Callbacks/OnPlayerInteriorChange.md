---
title: OnPlayerInteriorChange
description: Appelé lorsqu'un joueur change d'intérieur.
tags: ["player"]
---

## Paramètres

Appelé lorsqu'un joueur change d'intérieur. Peut être déclenché par [SetPlayerInterior](../functions/SetPlayerInterior), ou bien quand un joueur entre / sort d'un bâtiment.

| Name                | Description                                 |
| ------------------- | ------------------------------------------- |
| `int` playerid      | Joueur qui change d'intérieur               |
| `int` newinteriorid | Nouvel intérieur dans lequel le joueur est  |
| `int` oldinteriorid | Intérieur précédent du joueur               |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemples

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[128];
    
    format(string, sizeof(string), "INFO: Vous étiez dans l'intérieur %d, vous êtes maintenant dans l'intérieur %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, -1, string);
    
    return 1;
}
```

## Fonctions connexes

- [SetPlayerInterior](../functions/SetPlayerInterior): Met un intérieur à un joueur.
- [GetPlayerInterior](../functions/GetPlayerInterior): Permet d'obtenir l'intérieur actuel du joueur.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Change l'intérieur dans lequel un véhicule est vu.

## Callback connexe

- [OnPlayerStateChange](OnPlayerStateChange): Appelé quand un joueur change d'état.
