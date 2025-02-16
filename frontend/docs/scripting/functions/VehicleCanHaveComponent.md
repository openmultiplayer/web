---
title: VehicleCanHaveComponent
sidebar_label: VehicleCanHaveComponent
description: Is the component legal on a vehicle model?
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Is the component legal on the vehicle model?

| Name                                     | Description                   |
| ---------------------------------------- | ----------------------------- |
| [modelid](../resources/vehicleid)       | Vehicle Model ID              |
| [component](../resources/carcomponentid) | ID of the component to check. |

## Returns

**true** - The component is legal on the vehicle.

**false** - The component is illegal on the vehicle.

## Examples

```c
new vehicleid = GetPlayerVehicleID(playerid);

if (VehicleCanHaveComponent(GetVehicleModel(vehicleid), 1010))
{
    SendClientMessage(playerid, 0x00FF00FF, "Nitro is legal on this vehicle.");
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "Nitro is illegal on this vehicle.");
}
```

## Related Functions

- [AddVehicleComponent](AddVehicleComponent): Add a component to a vehicle.
- [RemoveVehicleComponent](RemoveVehicleComponent): Remove a component from a vehicle.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Check what components a vehicle has.
- [GetVehicleComponentType](GetVehicleComponentType): Check the type of component via the ID.

## Related Resources

- [Car Component IDs](../resources/carcomponentid)
