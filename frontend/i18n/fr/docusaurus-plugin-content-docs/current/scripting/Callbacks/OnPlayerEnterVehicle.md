---
title: OnPlayerEnterVehicle
sidebar_label: OnPlayerEnterVehicle
description: Cette callback est appelée quand un joueur commence à entrer dans un véhicule, c'est-à-dire que le joueur n'est pas encore dans le véhicule quand la callback est appelée.
tags: ["player", "vehicle"]
---

## Paramètres

Cette callback est appelée quand un joueur commence à entrer dans un véhicule, c'est-à-dire que le joueur n'est pas encore dans le véhicule quand la callback est appelée.

| Nom               | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `int` playerid    | ID du joueur qui tente d'entrer dans le véhicule             |
| `int` vehicleid   | ID du véhicule dans lequel le joueur tente d'entrer          |
| `int` ispassenger | **0** s'il entre en conducteur. **1** s'il entre en passager |

## Valeur

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "Vous entrez dans le véhicule ID : %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Astuces

:::tip

Cette callback est appelée quand le joueur **COMMENCE** à entrer dans un véhicule, pas quand il effectivement dedans _(v. [OnPlayerStateChange](OnPlayerStateChange))_.

OnPlayerEnterVehicle est quand même appelé si le joueur est interdit d'entrer dans le véhicule _(par exemple si celui-ci est verrouillé)_.

:::

## Fonctions connexes

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): Met un joueur dans le véhicule.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Vérifie la place du joueur dans le véhicule.
