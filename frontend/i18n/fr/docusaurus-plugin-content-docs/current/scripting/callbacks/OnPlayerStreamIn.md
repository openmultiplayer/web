---
title: OnPlayerStreamIn
sidebar_label: OnPlayerStreamIn
description: Cette fonction est appelée quand un joueur est chargé (devient visible) pour un joueur.
tags: ["player"]
---

## Paramètres

Cette fonction est appelée quand un joueur est chargé (devient visible) pour un joueur.

| Nom               | Description                            |
| ----------------- | -------------------------------------- |
| `int` playerid    | L'ID du joueur chargé par le joueur.   |
| `int` forplayerid | L'ID du joueur qui a chargé le joueur. |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemmple

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new
        string[40];

    format(string, sizeof(string), "Le joueur ID %d vient de charger dans votre client.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);

    return 1;
}
```

## Astuces

<NoteNPCCallbacks />

## Callbacks connexes

Les Callbacks ci-dessous sont indirectement ou directement liées à cette Callback.

- [OnPlayerStreamOut](OnPlayerStreamOut): Quand un joueur est dé-chargé (devient invisible) pour un autre joueur
- [OnActorStreamIn](OnActorStreamIn): Quand un actor est chargé (devient visible) pour un joueur.
- [OnVehicleStreamIn](OnVehicleStreamIn): Quand un véhicule est chargé (devient visible) pour un joueur

## Fonctions connexes
