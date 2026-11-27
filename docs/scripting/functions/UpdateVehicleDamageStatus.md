---
title: "UpdateVehicleDamageStatus | open.mp"
description: "Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels."
canonical: https://open.mp/docs/scripting/functions/UpdateVehicleDamageStatus
language: en
---

# UpdateVehicleDamageStatus

tip

For some useful functions for working with vehicle damage values, see [here](https://open.mp/docs/scripting/resources/damagestatus).

## Description

Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to set the damage of. |
| VEHICLE\_PANEL\_STATUS:panels | A set of bits containing the panel damage status. See [Panel States](https://open.mp/docs/scripting/resources/panelstates) |
| VEHICLE\_DOOR\_STATUS:doors | A set of bits containing the door damage status. See [Door States](https://open.mp/docs/scripting/resources/doorstates) |
| VEHICLE\_LIGHT\_STATUS:lights | A set of bits containing the light damage status. See [Light States](https://open.mp/docs/scripting/resources/lightstates) |
| VEHICLE\_TIRE\_STATUS:tires | A set of bits containing the tire damage status. See [Tire States](https://open.mp/docs/scripting/resources/tirestates) |

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

-   [SetVehicleHealth](https://open.mp/docs/scripting/functions/SetVehicleHealth): Set the health of a vehicle.
-   [GetVehicleHealth](https://open.mp/docs/scripting/functions/GetVehicleHealth): Check the health of a vehicle.
-   [RepairVehicle](https://open.mp/docs/scripting/functions/RepairVehicle): Fully repair a vehicle.
-   [GetVehicleDamageStatus](https://open.mp/docs/scripting/functions/GetVehicleDamageStatus): Get the vehicle damage state for each part individually.

## Related Callbacks

-   [OnVehicleDamageStatusUpdate](https://open.mp/docs/scripting/callbacks/OnVehicleDamageStatusUpdate): Called when a vehicle's damage state changes.

## Related Resources

-   [Damage Status](https://open.mp/docs/scripting/resources/damagestatus)
-   [Vehicle Panel Status](https://open.mp/docs/scripting/resources/vehicle-panel-status)
-   [Panel States](https://open.mp/docs/scripting/resources/panelstates)
-   [Vehicle Door Status](https://open.mp/docs/scripting/resources/vehicle-door-status)
-   [Door States](https://open.mp/docs/scripting/resources/doorstates)
-   [Vehicle Light Status](https://open.mp/docs/scripting/resources/vehicle-light-status)
-   [Light States](https://open.mp/docs/scripting/resources/lightstates)
-   [Vehicle Tire Status](https://open.mp/docs/scripting/resources/vehicle-tire-status)
-   [Tire States](https://open.mp/docs/scripting/resources/tirestates)
