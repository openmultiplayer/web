---
title: "GetVehicleDamageStatus | open.mp"
description: "Retrieve the damage statuses of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleDamageStatus
language: en
---

# GetVehicleDamageStatus

tip

For some useful functions for working with vehicle damage values, see [here](https://open.mp/docs/scripting/resources/damagestatus).

## Description

Retrieve the damage statuses of a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the damage statuses of. |
| VEHICLE\_PANEL\_STATUS:panels | A set of bits containing the panel damage status. See [Panel States](https://open.mp/docs/scripting/resources/panelstates) |
| VEHICLE\_DOOR\_STATUS:doors | A set of bits containing the door damage status. See [Door States](https://open.mp/docs/scripting/resources/doorstates) |
| VEHICLE\_LIGHT\_STATUS:lights | A set of bits containing the light damage status. See [Light States](https://open.mp/docs/scripting/resources/lightstates) |
| VEHICLE\_TIRE\_STATUS:tires | A set of bits containing the tire damage status. See [Tire States](https://open.mp/docs/scripting/resources/tirestates) |

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

-   [UpdateVehicleDamageStatus](https://open.mp/docs/scripting/functions/UpdateVehicleDamageStatus): Update the vehicle damage.
-   [SetVehicleHealth](https://open.mp/docs/scripting/functions/SetVehicleHealth): Set the health of a vehicle.
-   [GetVehicleHealth](https://open.mp/docs/scripting/functions/GetVehicleHealth): Check the health of a vehicle.
-   [RepairVehicle](https://open.mp/docs/scripting/functions/RepairVehicle): Fully repair a vehicle.

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
