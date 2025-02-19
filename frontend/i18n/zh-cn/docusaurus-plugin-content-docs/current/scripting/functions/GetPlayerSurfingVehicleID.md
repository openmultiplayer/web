---
title: GetPlayerSurfingVehicleID
sidebar_label: GetPlayerSurfingVehicleID
description: Get the ID of the vehicle that the player is surfing (stuck to the roof of).
tags: ["player", "vehicle"]
---

## Description

Get the ID of the vehicle that the player is surfing (stuck to the roof of).

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
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

- [GetPlayerVehicleID](GetPlayerVehicleID): Get the ID of the vehicle the player is in.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Check what seat a player is in.
- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): Gets the ID of the object the player is surfing on.
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): Gets a player's surfing offsets.
