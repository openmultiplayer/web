---
título: OnNPCExitVehicle
descripción: Este callback es llamado cuando un NPC deja (o sale de) un vehículo.
tags: ["npc"]
---

## Descripción

Este callback es llamado cuando un NPC deja (o sale de) un vehículo.


## Ejemplos

```c
public OnNPCExitVehicle()
{
    print("El NPC salió (o dejó) el vehículo");
    return 1;
}
```

## Callbacks relacionados

Los siguientes callbacks pueden ser útiles, ya que estan relacionados con OnNPCExitVehicle de alguna forma u otra.

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Este callback es llamado cuando un NPC entra a un vehículo.
