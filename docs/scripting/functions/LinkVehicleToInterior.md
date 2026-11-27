---
title: "LinkVehicleToInterior | open.mp"
description: "Links a vehicle to an interior."
canonical: https://open.mp/docs/scripting/functions/LinkVehicleToInterior
language: en
---

# LinkVehicleToInterior

## Description

Links a vehicle to an interior. Vehicles can only be seen by players in the same interior ([SetPlayerInterior](https://open.mp/docs/scripting/functions/SetPlayerInterior)).

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to link to an interior. |
| interiorid | The [Interior ID](https://open.mp/docs/scripting/resources/interiorids) to link it to. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the vehicle does not exist.

## Examples

```c
public OnGameModeInit()
{
    new vehicleId = AddStaticVehicle(559, 2543.7505, -21.8345, 27.1899, 52.6054, -1, -1);
    LinkVehicleToInterior(vehicleId, 6);
}
```

## Related Functions

-   [GetVehicleInterior](https://open.mp/docs/scripting/functions/GetVehicleInterior): Get the interior id of a vehicle.
-   [SetVehicleVirtualWorld](https://open.mp/docs/scripting/functions/SetVehicleVirtualWorld): Set the virtual world of a vehicle.
-   [SetPlayerInterior](https://open.mp/docs/scripting/functions/SetPlayerInterior): Set a player's interior.

## Related Resources

-   [Interior IDs](https://open.mp/docs/scripting/resources/interiorids)
