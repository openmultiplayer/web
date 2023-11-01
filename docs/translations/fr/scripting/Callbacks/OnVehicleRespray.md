---
title: OnVehicleRespray
description: Cette callback est appelée lorsqu'un joueur sort d'un garage de modification, indépendamment du fait que les couleurs aient été changées ou non.
tags: ["vehicle"]
---

## Paramètres

Cette callback est appelée lorsqu'un joueur sort d'un garage de modification, indépendamment du fait que les couleurs aient été changées ou non. Cette callback n'est JAMAIS appelée lors d'une sortie de pay 'n' spray.

| Nom             | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `int` playerid  | L'ID du joueur qui conduit le véhicule.                       |
| `int` vehicleid | L'ID du véhicule dont la/les couleur(s) a/ont été changée(s). |
| `int` color1    | La couleur primaire du véhicule qui a été changée.            |
| `int` color2    | La couleur secondaire du véhicule qui a été changée.          |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "Vous avez changé la/les couleur(s) du véhicule %d. Nouvelles couleurs! %d et %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Astuces

:::tip

Étrangement, cette callback n'est pas appelée dans les pay'N'spray (uniquement les garages de modification).

Solution ici: https://pastebin.com/zX96D4dA

:::

:::warning

Bug connu : la prévisualisation d'un composant dans une boutique de mods peut appeler la callback.

:::

## Fonctions connexes

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Modifie la couleur d'un véhicule.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Change la peinture d'un véhicule.

## Callbacks connexes

- [OnVehiclePaintjob](OnVehiclePaintjob): Appelée lorsque la peinture d'un véhicule est changée.
- [OnVehicleMod](OnVehicleMod): Appelée lorsqu'un véhicule est modifié.
- [OnEnterExitModShop](OnEnterExitModShop): Appelée lorsqu'un joueur dans un véhicule entre ou sort d'un garage de modification.
