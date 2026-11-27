---
title: "VehicleCanHaveComponent | open.mp"
description: "Is the component legal on a vehicle model?"
canonical: https://open.mp/docs/scripting/functions/VehicleCanHaveComponent
language: en
---

# VehicleCanHaveComponent

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Is the component legal on the vehicle model?

| Name | Description |
| --- | --- |
| [modelid](https://open.mp/docs/scripting/resources/vehicleid) | Vehicle Model ID |
| [component](https://open.mp/docs/scripting/resources/carcomponentid) | ID of the component to check. |

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

-   [AddVehicleComponent](https://open.mp/docs/scripting/functions/AddVehicleComponent): Add a component to a vehicle.
-   [RemoveVehicleComponent](https://open.mp/docs/scripting/functions/RemoveVehicleComponent): Remove a component from a vehicle.
-   [GetVehicleComponentInSlot](https://open.mp/docs/scripting/functions/GetVehicleComponentInSlot): Check what components a vehicle has.
-   [GetVehicleComponentType](https://open.mp/docs/scripting/functions/GetVehicleComponentType): Check the type of component via the ID.

## Related Resources

-   [Car Component IDs](https://open.mp/docs/scripting/resources/carcomponentid)
