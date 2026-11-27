---
title: "GetPlayerVehicleID | open.mp"
description: "This function gets the ID of the vehicle the player is currently in."
canonical: https://open.mp/docs/scripting/functions/GetPlayerVehicleID
language: en
---

# GetPlayerVehicleID

## Description

This function gets the ID of the vehicle the player is currently in.

**Note:** **NOT** the model id of the vehicle. See [GetVehicleModel](https://open.mp/docs/scripting/functions/GetVehicleModel) for that.

| Name | Description |
| --- | --- |
| playerid | The ID of the player in the vehicle that you want to get the ID of |

## Returns

ID of the vehicle or **0** if not in a vehicle

## Examples

```c
// Add 10x Nitro if the player is in a car. Might be called on a command.
new vehicleId = GetPlayerVehicleID(playerid);
if (vehicleId != 0)
{
    AddVehicleComponent(vehicleId, 1010);
}
```

## Related Functions

-   [IsPlayerInVehicle](https://open.mp/docs/scripting/functions/IsPlayerInVehicle): Check if a player is in a certain vehicle.
-   [IsPlayerInAnyVehicle](https://open.mp/docs/scripting/functions/IsPlayerInAnyVehicle): Check if a player is in any vehicle.
-   [GetPlayerVehicleSeat](https://open.mp/docs/scripting/functions/GetPlayerVehicleSeat): Check what seat a player is in.
-   [GetVehicleModel](https://open.mp/docs/scripting/functions/GetVehicleModel): Get the model id of a vehicle.
