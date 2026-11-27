---
title: "NPC_SetSurfingObject | open.mp"
description: "Sets the object an NPC is surfing on."
canonical: https://open.mp/docs/scripting/functions/NPC_SetSurfingObject
language: en
---

# NPC\_SetSurfingObject

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the object an NPC is surfing on.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| objectid | The object ID |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingobject ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new objectid = strval(cmdtext[18]);

        NPC_SetSurfingObject(npcid, objectid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing object set to %d", npcid, objectid);

        return 1;
    }
    return 0;
}
```

## Notes

-   The NPC will move along with the object if it moves
-   The object must exist for surfing to work properly

## Related Functions

-   [NPC\_GetSurfingObject](https://open.mp/docs/scripting/functions/NPC_GetSurfingObject): Gets the object an NPC is surfing on
-   [NPC\_SetSurfingVehicle](https://open.mp/docs/scripting/functions/NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
-   [NPC\_SetSurfingPlayerObject](https://open.mp/docs/scripting/functions/NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
-   [NPC\_SetSurfingOffsets](https://open.mp/docs/scripting/functions/NPC_SetSurfingOffsets): Sets the surfing offset for an NPC
-   [NPC\_ResetSurfingData](https://open.mp/docs/scripting/functions/NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
