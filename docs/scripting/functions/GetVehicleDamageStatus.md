---
title: GetVehicleDamageStatus
description: Retrieve the damage statuses of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3a' />

:::tip

For some useful functions for working with vehicle damage values, see [here](../resources/damagestatus).

:::

## Description

Retrieve the damage statuses of a vehicle.

| Name                        | Description                                                        |
| --------------------------- | ------------------------------------------------------------------ |
| vehicleid                   | The ID of the vehicle to get the damage statuses of.               |
| VEHICLE_PANEL_STATUS:panels | A variable to store the panel damage data in, passed by reference. |
| VEHICLE_DOOR_STATUS:doors   | A variable to store the door damage data in, passed by reference.  |
| VEHICLE_LIGHT_STATUS:lights | A variable to store the light damage data in, passed by reference. |
| VEHICLE_TYRE_STATUS:tyres   | A variable to store the tire damage data in, passed by reference.  |

## Returns

**1** - The function was executed successfully.

**0** - The function failed to execute. This means the vehicle specified does not exist.

## Examples

```c
new 
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TYRE_STATUS:tyres;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
printf("Vehicle Status: [Panels]: %d - [Doors]: %d - [Lights]: %d - [Tyres]: %d", panels, doors, lights, tyres);
```

## Related Functions

- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): Update the vehicle damage.
- [SetVehicleHealth](SetVehicleHealth): Set the health of a vehicle.
- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
- [RepairVehicle](RepairVehicle): Fully repair a vehicle.

## Related Callbacks

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Called when a vehicle's damage state changes.

## Related Resources

- [Damage Status](../resources/damagestatus)
- [Vehicle Panel Status](../resources/vehicle-panel-status)
- [Vehicle Door Status](../resources/vehicle-door-status)
- [Vehicle Light Status](../resources/vehicle-light-status)
- [Vehicle Tire Status](../resources/vehicle-tire-status)
