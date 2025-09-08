---
title: NPC_GetSurfingOffset
sidebar_label: NPC_GetSurfingOffset
description: Gets the surfing offset for an NPC.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the surfing offset for an NPC.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| npcid    | The ID of the NPC                                     |
| &x       | A variable to store the X offset, passed by reference |
| &y       | A variable to store the Y offset, passed by reference |
| &z       | A variable to store the Z offset, passed by reference |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public CheckNPCSurfing(npcid)
{
    new Float:x, Float:y, Float:z;
    if (NPC_GetSurfingOffset(npcid, x, y, z))
    {
        printf("NPC %d surfing offset: X=%.2f, Y=%.2f, Z=%.2f", npcid, x, y, z);
    }
    else
    {
        printf("Failed to get surfing offset for NPC %d", npcid);
    }
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