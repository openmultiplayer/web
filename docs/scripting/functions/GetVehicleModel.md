---
title: "GetVehicleModel | open.mp"
description: "Gets the model ID of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleModel
language: en
---

# GetVehicleModel

## Description

Gets the [model ID](https://open.mp/docs/scripting/resources/vehicleid) of a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the model of. |

## Returns

The [vehicle's model ID](https://open.mp/docs/scripting/resources/vehicleid), or **0** if the vehicle doesn't exist.

## Examples

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (GetVehicleModel(vehicleid) == 411) // 411 is the Infernus model
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Nice Infernus!");
    }
    return 1;
}
```

## Related Functions

-   [GetPlayerVehicleID](https://open.mp/docs/scripting/functions/GetPlayerVehicleID): Get the ID of the vehicle the player is in.
-   [GetVehiclePos](https://open.mp/docs/scripting/functions/GetVehiclePos): Get the position of a vehicle.
-   [GetVehicleZAngle](https://open.mp/docs/scripting/functions/GetVehicleZAngle): Check the current angle of a vehicle.
-   [GetPlayerVehicleSeat](https://open.mp/docs/scripting/functions/GetPlayerVehicleSeat): Check what seat a player is in.

## Related Resources

-   [Vehicle IDs](https://open.mp/docs/scripting/resources/vehicleid)
