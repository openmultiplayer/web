---
title: OnUnoccupiedVehicleUpdate
description: Cette callback est appelée quand un le client d'un joueur update/synchronise la position d'un véhicule qui n'est pas conduit.
tags: ["vehicle"]
---

## Paramètres

Cette callback est appelée quand un le client d'un joueur update/synchronise la position d'un véhicule qui n'est pas conduit.

Cela arrive en dehors du véhicule ou quand le joueur est en passager et qu'il n'y a pas de conducteur.

| Nom                  | Description                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `int` vehicleid      | ID du véhicule dont la position est mise à jour                                                                                           |
| `int` playerid       | ID du joueur                                                                                                                              |
| `int` passenger_seat | ID du siège si le joueur est passager. 0=pas dans le véhicule, 1=passager avant, 2=arrière-gauche 3=arrière-droit, 4+= pour les bus, etc. |
| `int` new_x          | Nouvelle coordonnée X du véhicule                                                                                                         |
| `int` new_y          | Nouvelle coordonnée Y du véhicule                                                                                                         |
| `int` new_z          | Nouvelle coordonnée Z du véhicule                                                                                                         |
| `int` vel_x          | Nouvelle vélocité X du véhicule                                                                                                           |
| `int` vel_y          | Nouvelle vélocité Y du véhicule                                                                                                           |
| `int` vel_z          | Nouvelle vélocité Z du véhicule                                                                                                           |

## Valeur de retour

Retourner **0** peut empêcher l'update. 

## Exemple

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Vérifie si le veh est loin
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Rejette l'update
        return 0;
    }

    return 1;
}
```

## Astuces

:::warning

Cette callback est appelée très fréquemment par seconde et par véhicule. Vous devez vous abstenir d'implémenter des calculs intensifs ou des opérations d'écriture / lecture de fichiers intensives dans cette callback.


:::

## Fonctions connexes
