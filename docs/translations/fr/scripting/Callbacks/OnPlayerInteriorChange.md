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

Cette callback est appelée en premier dans le gamemode.

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
- [OnPlayerStateChange](OnPlayerStateChange): Appelé quand un joueur change d'état.
