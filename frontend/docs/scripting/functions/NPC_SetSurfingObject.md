---
title: NPC_SetSurfingObject
sidebar_label: NPC_SetSurfingObject
description: Sets the object an NPC is surfing on.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the object an NPC is surfing on.

| Name     | Description                      |
| -------- | -------------------------------- |
| npcid    | The ID of the NPC                |
| objectid | The object ID                    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("SurfingBot");
    new objectid = CreateObject(1225, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);
    
    NPC_Spawn(npcid);
    NPC_SetPos(npcid, 1958.33, 1343.12, 17.36);
    NPC_SetSurfingObject(npcid, objectid);
    return 1;
}
```

## Notes

- The NPC will move along with the object if it moves
- Use `NPC_SetSurfingOffset` to fine-tune the NPC's position relative to the object
- The object must exist for surfing to work properly

## Related Functions

- [NPC_GetSurfingObject](NPC_GetSurfingObject): Gets the object an NPC is surfing on
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Sets the surfing offset for an NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

*No specific callbacks are triggered by this function.*
