---
title: OnVehicleDamageStatusUpdate
description: Cette callback est appelée lorsqu'un élément de véhicule - tel que les portes ou les phares - sont endommagés.
tags: ["vehicle"]
---

:::tip

Voir ["damagestatus"](../resources/damagestatus).

:::

## Description

Cette callback est appelée lorsqu'un élément de véhicule - tel que les portes ou les phares - sont endommagés.

| Nom             | Description                             |
| --------------- | --------------------------------------- |
| `int` vehicleid | L'ID du véhicule qui a été endommagé    |
| `int` playerid  | L'ID du joueur qui a infligé les dégâts |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemples

```c
// example code: protect vehicle tires from being popped
// uses encode_tires function from: http://forum.sa-mp.com/index.php?topic=161491.msg960040#msg960040
 
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    #pragma unused playerid
 
    new panels, doors, lights, tires;	
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    tires = encode_tires(0, 0, 0, 0); // fix all tires
    panels = encode_panels(0, 0, 0, 0, 0, 0, 0); // fix all panels //fell off - (3, 3, 3, 3, 3, 3, 3)
    doors = encode_doors(0, 0, 0, 0, 0, 0); // fix all doors //fell off - (4, 4, 4, 4, 0, 0)
    lights = encode_lights(0, 0, 0, 0); // fix all lights
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;	
}
 
encode_tires(tire1, tire2, tire3, tire4) return tire1 | (tire2 << 1) | (tire3 << 2) | (tire4 << 3);
encode_panels(flp, frp, rlp, rrp, windshield, front_bumper, rear_bumper)
{
    return flp | (frp << 4) | (rlp << 8) | (rrp << 12) | (windshield << 16) | (front_bumper << 20) | (rear_bumper << 24);
}
encode_doors(bonnet, boot, driver_door, passenger_door, behind_driver_door, behind_passenger_door)
{
    #pragma unused behind_driver_door
    #pragma unused behind_passenger_door
    return bonnet | (boot << 8) | (driver_door << 16) | (passenger_door << 24);
}
encode_lights(light1, light2, light3, light4)
{
    return light1 | (light2 << 1) | (light3 << 2) | (light4 << 3);
}
```

## Astuces

:::tip

Cela n'inclut pas les changements de heal du véhicule.

:::

## Fonctions connexes

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Récupère les dégâts de chaque partie d'un véhicule.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Met à jour les dégâts d'un véhicule.
