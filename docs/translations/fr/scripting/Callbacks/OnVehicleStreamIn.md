---
title: OnVehicleStreamIn
description: Cette callback est appelée lorsqu'un véhicule est chargé (devient visible) pour un joueur.
tags: ["vehicle"]
---

## Paramètres

Cette callback est appelée lorsqu'un véhicule est chargé (devient visible) pour un joueur.

| Nom              | Description                                |
| ----------------- | ----------------------------------------- |
| `int` vehicleid   | L'ID du véhicule chargé par le joueur.    |
| `int` forplayerid | L'ID du joueur qui a chargé le véhicule.  |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "Vous pouvez désormais voir le véhicule ID: %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}

```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes
