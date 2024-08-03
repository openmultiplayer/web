---
title: OnPlayerClickMap
description: OnPlayerClickMap est appelé quand un joueur place un point (clic droit) sur la map dans le menu pause.
tags: [player, ClickMap, Map, target, waypoint]
---

## Paramètres

OnPlayerClickMap est appelé quand un joueur place un point (clic droit) sur la map dans le menu pause.

| Nom              | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| `int`   playerid | ID du joueur qui place le point sur la carte                                              |
| `float` Float:fX | Cordonnées X du point placé sur la carte par `playerid`                                   |
| `float` Float:fY | Coordonnées Y du point placé sur la carte par `playerid`                                  |
| `float` Float:fZ | Coordonnées Z du point placé sur la carte par `playerid` (imprécis - v. infra, "Astuces") |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    SendClientMessage(playerid, -1, "Vous avez été téléporté (Risque d'imprécision).");
    return 1;
}
```

## Notes

:::tip

Cette callback n'est appelée que quand le joueur place un point sur la carte, pas nécessairement quand il a fait un clic droit.

Le `float` Z retournera une valeur de 0 (invalide) si le point du joueur est trop loin sur la carte du joueur lui-même. Utilisez le plugin MapAndreas ou ColAndreas pour résorber cette difficulté.

:::

## Callbacks connexes

- [OnPlayerClickPlayer](OnPlayerClickPlayer): Quand un joueur double-clique sur le pseudo d'un autre dans la tablist.
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Quand un joueur clique sur un textdraw.
