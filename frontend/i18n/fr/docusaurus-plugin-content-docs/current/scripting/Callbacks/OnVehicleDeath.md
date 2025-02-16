---
title: OnVehicleDeath
description: Cette callback est appelée lorsqu'un véhicule est détruit - en explosant ou en tombant dans l'eau.
tags: ["vehicle"]
---

## Paramètres

Cette callback est appelée lorsqu'un véhicule est détruit - en explosant ou en tombant dans l'eau.

| Nom             | Description                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `int` vehicleid | L'ID du véhicule détruit.                                                                                                     |
| `int` killerid  | L'ID du joueur qui a causé les dégâts. Généralement le conducteur ou un passager (si il y en a) ou le joueur le plus proche. |

## Valeur de retour

Aucune.

## Exemples

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[40];
    
    format(string, sizeof(string), "Le véhicule %i a été détruit par le joueur id %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    
    return 1;
}
```

## Astuces

:::tip

Cette callback est appelée lorsqu'un véhicule entre dans l'eau mais il peut être sauvé de la destruction si il est submergé en partie ou si il est téléporté. Cette callback ne sera pas appelée une seconde fois et le véhicule disparaîtra après la sortie du conducteur, ou peu de temps après.

:::

## Fonctions connexes

- [SetVehicleHealth](../functions/SetVehicleHealth): Modifie la vie d'un véhicule.
