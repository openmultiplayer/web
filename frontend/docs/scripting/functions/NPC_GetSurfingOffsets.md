---
title: NPC_GetSurfingOffset
sidebar_label: NPC_GetSurfingOffset
description: Gets the surfing offset for an NPC.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the surfing offset for an NPC.

| Name  | Description                                           |
| ----- | ----------------------------------------------------- |
| npcid | The ID of the NPC                                     |
| &x    | A variable to store the X offset, passed by reference |
| &y    | A variable to store the Y offset, passed by reference |
| &z    | A variable to store the Z offset, passed by reference |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingoffset", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:offsetX, Float:offsetY, Float:offsetZ;
        NPC_GetSurfingOffset(npcid, offsetX, offsetY, offsetZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing offset: X=%.2f, Y=%.2f, Z=%.2f", npcid, offsetX, offsetY, offsetZ);
        return 1;
    }
    return 0;
}
```

## Notes

- The surfing offset represents the relative position of the NPC compared to the object/vehicle it's surfing on
- All offset values are returned as floating-point numbers

## Related Functions

- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Sets the surfing offset for an NPC
- [NPC_GetSurfingObject](NPC_GetSurfingObject): Gets the object an NPC is surfing on
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Gets the player object an NPC is surfing on
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
