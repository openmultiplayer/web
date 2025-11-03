---
title: OnTrailerUpdate
sidebar_label: OnTrailerUpdate
description: Cette callback est appelée quand un joueur envoie une mise à jour d'un trailer (véhicule).
tags: []
---

## Paramètres

Cette callback est appelée quand un joueur envoie une mise à jour d'un trailer (véhicule).

| Name             | Description                              |
| ---------------- | ---------------------------------------- |
| `int` playerid   | L'ID du joueur qui envoie la mise à jour |
| `int` vehicleid  | Le Trailer mis à jour                    |

## Valeur de retour

**0** - Annule l'envoi de toutes les mises à jour de Trailer à d'autres joueurs. La mise à jour est toujours envoyée au joueur qui met à jour.

**1** - Traite la mise à jour ddu Trailer comme d'habitude et la synchronise entre tous les joueurs.

## Exemple

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Astuces

:::warning

Cette callback est appelée très fréquemment par seconde et par Trailer. Vous devez vous abstenir d'implémenter des calculs intensifs ou des opérations d'écriture / lecture de fichiers intensives dans cette callback.

:::

## Fonctions connexes

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Vérifie quel Trailer le véhicule pousse.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Vérifie si un Trailer est attaché à un véhicule.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Attache un Trailer à un véhicule.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Détache le Trailer d'un véhicule.
