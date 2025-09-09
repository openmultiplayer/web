---
title: NPC_GetSurfingVehicle
sidebar_label: NPC_GetSurfingVehicle
description: Gets the vehicle an NPC is surfing on.
tags: ["npc", "surfing", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the vehicle an NPC is surfing on.

| Name   | Description                     |
| ------ | ------------------------------- |
| npcid  | The ID of the NPC               |

## Returns

Returns the vehicle ID, or `INVALID_VEHICLE_ID` if not surfing on a vehicle.

## Examples

```c
public OnNPCSpawn(npcid)
{
    new vehicleid = NPC_GetSurfingVehicle(npcid);
    if (vehicleid != INVALID_VEHICLE_ID)
    {
        printf("NPC %d is surfing on vehicle %d", npcid, vehicleid);
    }
    else
    {
        printf("NPC %d is not surfing on any vehicle", npcid);
    }
    return 1;
}
```

## Notes

- Returns `INVALID_VEHICLE_ID` if the NPC is not surfing on any vehicle
- Surfing allows NPCs to move along with vehicles while maintaining their relative position

## Related Functions

- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
- [NPC_GetSurfingObject](NPC_GetSurfingObject): Gets the object an NPC is surfing on
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Gets the player object an NPC is surfing on
- [NPC_GetSurfingOffset](NPC_GetSurfingOffset): Gets the surfing offset for an NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

*No specific callbacks are triggered by this function.*
