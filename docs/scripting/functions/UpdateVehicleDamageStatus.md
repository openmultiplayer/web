---
title: UpdateVehicleDamageStatus
description: Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3a' />

:::tip

For some useful functions for working with vehicle damage values, see [here](../resources/damagestatus).

:::

## Description

Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.

| Name                        | Description                                       |
| --------------------------- | ------------------------------------------------- |
| vehicleid                   | The ID of the vehicle to set the damage of.       |
| VEHICLE_PANEL_STATUS:panels | A set of bits containing the panel damage status. |
| VEHICLE_DOOR_STATUS:doors   | A set of bits containing the door damage status.  |
| VEHICLE_LIGHT_STATUS:lights | A set of bits containing the light damage status. |
| VEHICLE_TIRE_STATUS:tires   | A set of bits containing the tire damage status.  |

## Returns

This function does not return any specific values.

## Examples

```c
new 
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

tires = VEHICLE_TIRE_STATUS:15; // Setting tires to 15 will pop them all

// Or do it like this:
tires = (VEHICLE_TIRE_STATUS_FRONT_LEFT_POPPED | VEHICLE_TIRE_STATUS_FRONT_RIGHT_POPPED | VEHICLE_TIRE_STATUS_REAR_LEFT_POPPED | VEHICLE_TIRE_STATUS_REAR_RIGHT_POPPED);

UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
```

## Related Functions

- [SetVehicleHealth](SetVehicleHealth): Set the health of a vehicle.
- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
- [RepairVehicle](RepairVehicle): Fully repair a vehicle.
- [GetVehicleDamageStatus](GetVehicleDamageStatus): Get the vehicle damage state for each part individually.

## Related Callbacks

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Called when a vehicle's damage state changes.

## Related Resources

- [Damage Status](../resources/damagestatus)
