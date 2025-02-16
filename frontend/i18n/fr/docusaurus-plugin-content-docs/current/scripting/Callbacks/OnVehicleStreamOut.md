---
title: OnVehicleStreamOut
description: Cette callback est appelé quand un véhicule disparait du champs de stream du joueur (le véhicule est tellement loin qu'il ne peut plus le voir).
tags: ["vehicle"]
---

## Paramètres

Cette callback est appelé quand un véhicule disparait du champs de stream du joueur (le véhicule est tellement loin qu'il ne peut plus le voir).

| Nom               | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| `int` vehicleid   | L'ID du véhicule qui n'est plus stream pour le joueur concerné. |
| `int` forplayerid | Le joueur dont le véhicule n'est plus stream.                   |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Vous ne voyez plus le véhicule %d car celui-ci est trop loin.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes
