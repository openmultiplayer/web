---
id: RemoveVehicleComponent
title: RemoveVehicleComponent
description: Remove a component from a vehicle.
tags: ["vehicle"]
---

## Description

Remove a component from a vehicle.

| Name        | Description                    |
| ----------- | ------------------------------ |
| vehicleid   | ID of the vehicle.             |
| componentid | ID of the component to remove. |

## Returns

0 - The component was not removed because the vehicle does not exist.

1 - The component was successfully removed from the vehicle.

## Examples

```c
//remove Nitro from vehicle number 1
RemoveVehicleComponent(1, 1010);
```

## Related Functions

- [AddVehicleComponent](AddVehicleComponent.md): Add a component to a vehicle.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot.md): Check what components a vehicle has.
- [GetVehicleComponentType](GetVehicleComponentType.md): Check the type of component via the ID.
- [OnVehicleMod](../callbacks/OnVehicleMod.md): Called when a vehicle is modded.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop.md): Called when a vehicle enters or exits a mod shop.
