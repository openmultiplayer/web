---
title: OnVehicleMod
description: Cette callback est appelée lorsqu'un véhicule est modifié.
tags: ["vehicle"]
---

## Paramètres

Cette callback est appelée lorsqu'un véhicule est modifié.

| Nom               | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `int` playerid    | L'ID du conducteur du véhicule.                             |
| `int` vehicleid   | L'ID du véhicule modifié.                                   |
| `int` componentid | L'ID de la partie de la voiture qui a été ajoutée/modifiée. |

## Valeur de retour

Retournez **0** pour empêcher la modification d'être visible pour les autres joueurs.

## Exemple

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Le véhicule %d a été modifié par le joueur ID %d. L'ID de la partie de la voiture modifiée est %d",vehicleid,playerid,componentid);
    if(GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Hack Tuning"); // Anti-tuning hacks script 
        //Testé et approuvé sur les serveurs où il est impossible de modifier un véhicule hors d'un transfender/wheel arch angel
    }
    return 1;
}
```

## Astuces

:::tip

Cette callback ne sera pas appelée avec [AddVehicleComponent](../functions/AddVehicleComponent).

:::

## Fonctions connexes

- [AddVehicleComponent](../functions/AddVehicleComponent): Ajoute un composant sur un véhicule.

## Callbacks connexes

- [OnEnterExitModShop](OnEnterExitModShop): Appelée lorsqu'un joueur dans un véhicule entre ou sort d'un garage de modification.
- [OnVehiclePaintjob](OnVehiclePaintjob): Appelée lorsque la peinture d'un véhicule est changée.
- [OnVehicleRespray](OnVehicleRespray): Appelée lorsqu'un véhicule est repeint.
