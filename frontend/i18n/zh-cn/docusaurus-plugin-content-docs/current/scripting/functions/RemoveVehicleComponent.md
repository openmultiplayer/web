---
title: RemoveVehicleComponent
description: Remove a component from a vehicle.
tags: ["vehicle"]
---

## Description

Remove a component from a vehicle.

| Name                                       | Description                    |
|--------------------------------------------|--------------------------------|
| vehicleid                                  | ID of the vehicle.             |
| [component](../resources/carcomponentid)   | ID of the component to remove. |

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

- [AddVehicleComponent](AddVehicleComponent): Add a component to a vehicle.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Check what components a vehicle has.
- [GetVehicleComponentType](GetVehicleComponentType): Check the type of component via the ID.
- [VehicleCanHaveComponent](VehicleCanHaveComponent): Is the component legal on the vehicle?

## Related Callbacks

- [OnVehicleMod](../callbacks/OnVehicleMod): Called when a vehicle is modded.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Called when a vehicle enters or exits a mod shop.

## Related Resources

- [Car Component IDs](../resources/carcomponentid)
