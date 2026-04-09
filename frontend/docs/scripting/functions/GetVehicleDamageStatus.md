---
title: GetVehicleDamageStatus
sidebar_label: GetVehicleDamageStatus
description: Retrieve the damage statuses of a vehicle.
tags: ["vehicle"]
---

:::tip

For some useful functions for working with vehicle damage values, see [here](../resources/damagestatus).

:::

## Description

Retrieve the damage statuses of a vehicle.

| Name                        | Description                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| vehicleid                   | The ID of the vehicle to get the damage statuses of.                                           |
| VEHICLE_PANEL_STATUS:panels | A set of bits containing the panel damage status. See [Panel States](../resources/panelstates) |
| VEHICLE_DOOR_STATUS:doors   | A set of bits containing the door damage status. See [Door States](../resources/doorstates)    |
| VEHICLE_LIGHT_STATUS:lights | A set of bits containing the light damage status. See [Light States](../resources/lightstates) |
| VEHICLE_TIRE_STATUS:tires   | A set of bits containing the tire damage status. See [Tire States](../resources/tirestates)    |

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
- [Panel States](../resources/panelstates)
- [Vehicle Door Status](../resources/vehicle-door-status)
- [Door States](../resources/doorstates)
- [Vehicle Light Status](../resources/vehicle-light-status)
- [Light States](../resources/lightstates)
- [Vehicle Tire Status](../resources/vehicle-tire-status)
- [Tire States](../resources/tirestates)
