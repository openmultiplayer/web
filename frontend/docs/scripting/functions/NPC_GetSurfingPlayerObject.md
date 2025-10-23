---
title: NPC_GetSurfingPlayerObject
sidebar_label: NPC_GetSurfingPlayerObject
description: Gets the player object an NPC is surfing on.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the player object an NPC is surfing on.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the player object ID, or `INVALID_OBJECT_ID` if not surfing on a player object.

## Examples

```c
public OnNPCSpawn(npcid)
{
    new objectid = NPC_GetSurfingPlayerObject(npcid);
    if (objectid != INVALID_OBJECT_ID)
    {
        printf("NPC %d is surfing on player object %d", npcid, objectid);
    }
    else
    {
        printf("NPC %d is not surfing on any player object", npcid);
    }
    return 1;
}
```

## Notes

- Returns INVALID_OBJECT_ID if the NPC is not surfing on any player object
- This function only checks for player-specific objects, not global objects

## Related Functions

- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
- [NPC_GetSurfingObject](NPC_GetSurfingObject): Gets the object an NPC is surfing on
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on
- [NPC_GetSurfingOffset](NPC_GetSurfingOffset): Gets the surfing offset for an NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
