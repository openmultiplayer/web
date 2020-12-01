---
title: OnPlayerClickMap
description: OnPlayerClickMap est appelé quand un joueur place un point (clic droit) sur la map dans le menu pause.
tags: [playeri, ClickMap, Map, target, waypoint]
---

<VersionWarn name='callback' version='SA-MP 0.3d' />

## Paramètres

OnPlayerClickMap est appelé quand un joueur place un point (clic droit) sur la map dans le menu pause.

| Nom              | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| `int`   playerid | ID du joueur qui place le point sur la carte                                              |
| `float` Float:fX | Cordonnées X du point placé sur la carte par `playerid`                                   |
| `float` Float:fY | Coordonnées Y du point placé sur la carte par `playerid`                                  |
| `float` Float:fZ | Coordonnées Z du point placé sur la carte par `playerid` (imprécis - v. infra, "Astuces") |

## Valeur de retour

**0** - Empêche les autres filterscripts de recevoir cette callback.

**1** - Indique que cette callback doit passer au filterscript suivant.

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

## Fonctions connexes

- [OnPlayerClickPlayer](OnPlayerClickPlayer): Quand un joueur double-clique sur le pseudo d'un autre dans la tablist.
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Quand un joueur clique sur un textdraw.
