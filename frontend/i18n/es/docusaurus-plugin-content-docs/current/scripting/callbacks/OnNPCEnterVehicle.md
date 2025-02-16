---
title: OnNPCEnterVehicle
description: Este callback es llamado cuando un NPC entra a un vehículo.
tags: ["npc"]
---

## Descripción

Este callback es llamado cuando un NPC entra a un vehículo.

| Nombre       | Descripción                                                     |
| ------------ | --------------------------------------------------------------- |
| vehicleid    | La identificación del vehículo en el cual entra el NPC          |
| seatid       | La identificación del asiento (del vehículo) el cual usa el NPC |

## Ejemplos

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID (o identificación del vehículo): %d Seat (o identificación del asiento): %d", vehicleid, seatid);
    return 1;
}
```

## Callbacks relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados con OnNPCEnterVehicle de alguna forma u otra.

- [OnNPCExitVehicle](OnNPCExitVehicle): Este callback es llamado cuando un NPC sale de un vehículo.
