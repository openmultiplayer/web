---
title: NPC_ResetSurfingData
sidebar_label: NPC_ResetSurfingData
description: Resets all surfing data for an NPC.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Resets all surfing data for an NPC.

| Name   | Description           |
| ------ | --------------------- |
| npcid  | The ID of the NPC     |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetsurf", true))
    {
        // Reset surfing data for NPC 0
        NPC_ResetSurfingData(0);
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0 surfing data reset");
        return 1;
    }
    return 0;
}

// Reset surfing when NPC enters a vehicle
public OnNPCEnterVehicle(npcid, vehicleid, seatid)
{
    // Stop surfing when NPC gets into a vehicle
    NPC_ResetSurfingData(npcid);
    return 1;
}
```

## Notes

- This function clears all surfing-related data for an NPC, including the surfing object/vehicle and offset
- The NPC will no longer be attached to any surface after calling this function
- The NPC's position is not changed, only its surfing state is reset
- Useful for stopping NPCs from surfing when they need to move independently

## Related Functions

- [NPC_SetSurfingObject](NPC_SetSurfingObject): Sets the object an NPC is surfing on
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Sets the surfing offset for an NPC
- [NPC_GetSurfingObject](NPC_GetSurfingObject): Gets the object an NPC is surfing on
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on