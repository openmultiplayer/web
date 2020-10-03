---
id: GetPlayerSurfingVehicleID
title: GetPlayerSurfingVehicleID
description: Get the ID of the vehicle that the player is surfing (stuck to the roof of).
tags: ["player", "vehicle"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Get the ID of the vehicle that the player is surfing (stuck to the roof of).

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | The ID of the player you want to know the surfing vehicle ID of. |

## Returns

The ID of the vehicle that the player is surfing. If they are not surfing a vehicle or the vehicle they are surfing has no driver, INVALID_VEHICLE_ID. If the player specified is not connected, INVALID_VEHICLE_ID also.

## Examples

```c
new surf = GetPlayerSurfingVehicleID(playerid);
if(surf == INVALID_VEHICLE_ID) SendClientMessage(playerid, COLOR_RED, "You are not surfing.");
```

## Related Functions

- [GetPlayerVehicleID](../functions/GetPlayerVehicleID.md): Get the ID of the vehicle the player is in.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat.md): Check what seat a player is in.
