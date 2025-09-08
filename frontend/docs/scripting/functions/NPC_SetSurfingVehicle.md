---
title: NPC_SetSurfingVehicle
sidebar_label: NPC_SetSurfingVehicle
description: Sets the vehicle an NPC is surfing on.
tags: ["npc", "surfing", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the vehicle an NPC is surfing on.

| Name      | Description            |
| --------- | ---------------------- |
| npcid     | The ID of the NPC      |
| vehicleid | The vehicle ID         |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("SurfingBot");
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    
    NPC_Spawn(npcid);
    NPC_SetPos(npcid, 1958.33, 1343.12, 17.36);
    NPC_SetSurfingVehicle(npcid, vehicleid);
    return 1;
}

// Make NPC surf on the roof of a moving vehicle
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (!ispassenger) // Driver
    {
        new npcid = NPC_Create("RoofRider");
        NPC_Spawn(npcid);
        NPC_SetSurfingVehicle(npcid, vehicleid);
        NPC_SetSurfingOffset(npcid, 0.0, 0.0, 2.0); // Position on roof
    }
    return 1;
}
```

## Notes

- This function allows NPCs to "surf" on vehicles, meaning they will move along with the vehicle while maintaining their position relative to it
- The NPC will follow the vehicle's movement, rotation, and position changes
- Use `NPC_SetSurfingOffset` to position the NPC at specific locations on the vehicle (roof, hood, etc.)
- The vehicle must exist for surfing to work properly

## Related Functions

- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on
- [NPC_SetSurfingObject](NPC_SetSurfingObject): Sets the object an NPC is surfing on
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Sets the surfing offset for an NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC