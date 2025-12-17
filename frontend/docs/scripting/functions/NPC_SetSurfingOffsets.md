---
title: NPC_SetSurfingOffset
sidebar_label: NPC_SetSurfingOffset
description: Sets the surfing offset for an NPC.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the surfing offset for an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |
| x     | The X offset      |
| y     | The Y offset      |
| z     | The Z offset      |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingoffset ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        new idx = 18;

        // Parse x
        while (cmdtext[idx] == ' ') idx++;
        new startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new xStr[32];
        strmid(xStr, cmdtext, startIdx, idx);
        x = floatstr(xStr);

        // Parse y
        while (cmdtext[idx] == ' ') idx++;
        startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new yStr[32];
        strmid(yStr, cmdtext, startIdx, idx);
        y = floatstr(yStr);

        // Parse z
        while (cmdtext[idx] == ' ') idx++;
        z = floatstr(cmdtext[idx]);

        NPC_SetSurfingOffsets(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing offset set to %.2f, %.2f, %.2f", npcid, x, y, z);

        return 1;
    }
    return 0;
}
```

## Notes

- The surfing offset determines the relative position of the NPC compared to the object/vehicle it's surfing on
- Positive Z values move the NPC upward, negative values downward
- Positive Y values typically move the NPC forward relative to the vehicle's direction
- Positive X values move the NPC to the right relative to the vehicle's direction
- This is useful for fine-tuning the NPC's position when surfing
- Great for creating vehicle escorts or passengers

## Related Functions

- [NPC_GetSurfingOffset](NPC_GetSurfingOffsets): Gets the surfing offset for an NPC
- [NPC_SetSurfingObject](NPC_SetSurfingObject): Sets the object an NPC is surfing on
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
