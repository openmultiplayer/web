---
title: OnPlayerEnterVehicle
description: Cette callback est appelée quand un joueur commence à sortir d'un véhicule.
tags: ["player", "vehicle"]
---

## Paramètres

Cette callback est appelée quand un joueur commence à sortir d'un véhicule.

| Nom               | Description                          |
| ----------------- | ------------------------------------ |
| `int` playerid    | ID du joueur qui sort du véhicule    |
| `int` vehicleid   | ID du véhicule duquel le joueur sort |

## Valeur

Cette callback est appelée en premier dans les filterscripts.

## Exemple

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[128];
    format(string, sizeof(string), "Vous sortez du véhicule ID : %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Astuces

:::tip

Cette callback n'est pas appelée en cas de chute d'une moto ou si le joueur est sorti du véhicule par un autre moyen que la touche F, par exemple avec SetPlayerPos. 

Il faudra utiliser [OnPlayerStateChange](OnPlayerStateChange) et vérifier si l'ancien état du joueur est `PLAYER_STATE_DRIVER` ou `PLAYER_STATE_PASSENGER` et que son nouvel état est `PLAYER_STATE_ONFOOT`.
:::

## Fonctions connexes

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Sort de force un joueur du véhicule.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Vérifie la place du joueur dans le véhicule.
