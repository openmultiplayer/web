---
title: NPC_SetSurfingVehicle
sidebar_label: NPC_SetSurfingVehicle
description: Sets the vehicle an NPC is surfing on.
tags: ["npc", "surfing", "vehicle"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the vehicle an NPC is surfing on.

| Name      | Description       |
| --------- | ----------------- |
| npcid     | The ID of the NPC |
| vehicleid | The vehicle ID    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingvehicle ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = strval(cmdtext[19]);

        NPC_SetSurfingVehicle(npcid, vehicleid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing vehicle set to %d", npcid, vehicleid);

        return 1;
    }
    return 0;
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

## Related Callbacks

_No specific callbacks are triggered by this function._
