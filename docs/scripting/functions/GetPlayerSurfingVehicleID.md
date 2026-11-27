---
title: "GetPlayerSurfingVehicleID | open.mp"
description: "Get the ID of the vehicle that the player is surfing (stuck to the roof of)."
canonical: https://open.mp/docs/scripting/functions/GetPlayerSurfingVehicleID
language: en
---

# GetPlayerSurfingVehicleID

## Description

Get the ID of the vehicle that the player is surfing (stuck to the roof of).

| Name | Description |
| --- | --- |
| playerid | The ID of the player you want to know the surfing vehicle ID of. |

## Returns

The ID of the vehicle that the player is surfing. If they are not surfing a vehicle or the vehicle they are surfing has no driver, `INVALID_VEHICLE_ID`.

If the player specified is not connected, `INVALID_VEHICLE_ID` also.

## Examples

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId == INVALID_VEHICLE_ID)
{
	SendClientMessage(playerid, COLOR_RED, "You are not surfing.");
}
```

## Related Functions

-   [GetPlayerVehicleID](https://open.mp/docs/scripting/functions/GetPlayerVehicleID): Get the ID of the vehicle the player is in.
-   [GetPlayerVehicleSeat](https://open.mp/docs/scripting/functions/GetPlayerVehicleSeat): Check what seat a player is in.
-   [GetPlayerSurfingObjectID](https://open.mp/docs/scripting/functions/GetPlayerSurfingObjectID): Gets the ID of the object the player is surfing on.
-   [GetPlayerSurfingOffsets](https://open.mp/docs/scripting/functions/GetPlayerSurfingOffsets): Gets a player's surfing offsets.
