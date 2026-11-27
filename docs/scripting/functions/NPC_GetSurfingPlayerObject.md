---
title: "NPC_GetSurfingPlayerObject | open.mp"
description: "Gets the player object an NPC is surfing on."
canonical: https://open.mp/docs/scripting/functions/NPC_GetSurfingPlayerObject
language: en
---

# NPC\_GetSurfingPlayerObject

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the player object an NPC is surfing on.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the player object ID, or `INVALID_OBJECT_ID` if not surfing on a player object.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingplayerobject", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new objectid = NPC_GetSurfingPlayerObject(npcid);

        if (objectid == INVALID_OBJECT_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not surfing on any player object.", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is surfing on player object: %d", npcid, objectid);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns INVALID\_OBJECT\_ID if the NPC is not surfing on any player object
-   This function only checks for player-specific objects, not global objects

## Related Functions

-   [NPC\_SetSurfingPlayerObject](https://open.mp/docs/scripting/functions/NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
-   [NPC\_GetSurfingObject](https://open.mp/docs/scripting/functions/NPC_GetSurfingObject): Gets the object an NPC is surfing on
-   [NPC\_GetSurfingVehicle](https://open.mp/docs/scripting/functions/NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on
-   [NPC\_GetSurfingOffsets](https://open.mp/docs/scripting/functions/NPC_GetSurfingOffsets): Gets the surfing offset for an NPC
-   [NPC\_ResetSurfingData](https://open.mp/docs/scripting/functions/NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
