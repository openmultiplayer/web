---
title: NPC_GetSurfingObject
sidebar_label: NPC_GetSurfingObject
description: Gets the object an NPC is surfing on.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the object an NPC is surfing on.

| Name   | Description                           |
| ------ | ------------------------------------- |
| npcid  | The ID of the NPC                     |

## Returns

Returns the object ID, or `0` if not surfing on an object.

## Examples

```c
public OnNPCSpawn(npcid)
{
    new objectid = NPC_GetSurfingObject(npcid);
    if (objectid != 0)
    {
        printf("NPC %d is surfing on object %d", npcid, objectid);
    }
    else
    {
        printf("NPC %d is not surfing on any object", npcid);
    }
    return 1;
}
```

## Notes

- Returns `0` if the NPC is not surfing on any object
- This function only checks for global objects, not player objects

## Related Functions

- [NPC_SetSurfingObject](NPC_SetSurfingObject): Sets the object an NPC is surfing on
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Gets the player object an NPC is surfing on
- [NPC_GetSurfingOffset](NPC_GetSurfingOffset): Gets the surfing offset for an NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

*No specific callbacks are triggered by this function.*
