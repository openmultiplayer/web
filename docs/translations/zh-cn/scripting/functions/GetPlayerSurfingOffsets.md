---
title: GetPlayerSurfingOffsets
description: Gets a player's surfing offsets.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets a player's surfing offsets.

| Name           | Description                                                                      |
|----------------|----------------------------------------------------------------------------------|
| playerid       | The ID of the player.                                                            |
| &Float:offsetX | A float variable in which to store the offset X coordinate, passed by reference. |
| &Float:offsetY | A float variable in which to store the offset Y coordinate, passed by reference. |
| &Float:offsetZ | A float variable in which to store the offset Z coordinate, passed by reference. |

## Returns

This function does not return any specific value.

## Examples

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId != INVALID_VEHICLE_ID)
{
    new 
        Float:offsetX,
        Float:offsetY,
        Float:offsetZ;

    GetPlayerSurfingOffsets(playerid, offsetX, offsetY, offsetZ);
    
    SendClientMessage(playerid, -1, "offsetX = %.2f offsetY = %.2f offsetZ = %.2f", offsetX, offsetY, offsetZ);
}
```

## Related Functions

- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): Gets the ID of the object the player is surfing on.
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): Get the ID of the vehicle that the player is surfing (stuck to the roof of).
