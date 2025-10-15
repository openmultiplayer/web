---
title: NPC_SetSurfingPlayerObject
sidebar_label: NPC_SetSurfingPlayerObject
description: Sets the player object an NPC is surfing on.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the player object an NPC is surfing on.

| Name     | Description          |
| -------- | -------------------- |
| npcid    | The ID of the NPC    |
| objectid | The player object ID |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setnpcsurfing", true))
    {
        new npcid = NPC_Create("SurfingBot");
        new objectid = CreatePlayerObject(playerid, 1225, 1958.33, 1343.12, 15.36, 0.0, 0.0, 0.0);

        NPC_Spawn(npcid);
        NPC_SetPos(npcid, 1958.33, 1343.12, 17.36);
        NPC_SetSurfingPlayerObject(npcid, objectid);
        SendClientMessage(playerid, 0xFFFFFFFF, "NPC is now surfing on your object!");
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC will move along with the player object if it moves
- Player objects are client-side objects created specifically for individual players
- The player object must exist for surfing to work properly

## Related Functions

- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Gets the player object an NPC is surfing on
- [NPC_SetSurfingObject](NPC_SetSurfingObject): Sets the object an NPC is surfing on
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Sets the surfing offset for an NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
