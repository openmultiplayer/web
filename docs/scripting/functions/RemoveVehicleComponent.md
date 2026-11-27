---
title: "RemoveVehicleComponent | open.mp"
description: "Remove a component from a vehicle."
canonical: https://open.mp/docs/scripting/functions/RemoveVehicleComponent
language: en
---

# RemoveVehicleComponent

## Description

Remove a component from a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | ID of the vehicle. |
| [component](https://open.mp/docs/scripting/resources/carcomponentid) | ID of the component to remove. |

## Returns

**true** - The component was successfully removed from the vehicle.

**false** - The component was not removed because the vehicle does not exist.

## Examples

```c
// Remove Nitro from player vehicle
new vehicleid = GetPlayerVehicleID(playerid);
RemoveVehicleComponent(vehicleid, 1010);
```

## Related Functions

-   [AddVehicleComponent](https://open.mp/docs/scripting/functions/AddVehicleComponent): Add a component to a vehicle.
-   [GetVehicleComponentInSlot](https://open.mp/docs/scripting/functions/GetVehicleComponentInSlot): Check what components a vehicle has.
-   [GetVehicleComponentType](https://open.mp/docs/scripting/functions/GetVehicleComponentType): Check the type of component via the ID.
-   [VehicleCanHaveComponent](https://open.mp/docs/scripting/functions/VehicleCanHaveComponent): Is the component legal on the vehicle?

## Related Callbacks

-   [OnVehicleMod](https://open.mp/docs/scripting/callbacks/OnVehicleMod): Called when a vehicle is modded.
-   [OnEnterExitModShop](https://open.mp/docs/scripting/callbacks/OnEnterExitModShop): Called when a vehicle enters or exits a mod shop.

## Related Resources

-   [Car Component IDs](https://open.mp/docs/scripting/resources/carcomponentid)
