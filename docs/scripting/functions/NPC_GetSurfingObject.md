---
title: "NPC_GetSurfingObject | open.mp"
description: "Gets the object an NPC is surfing on."
canonical: https://open.mp/docs/scripting/functions/NPC_GetSurfingObject
language: en
---

# NPC\_GetSurfingObject

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the object an NPC is surfing on.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the object ID, or `INVALID_OBJECT_ID` if not surfing on an object.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingobject", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new objectid = NPC_GetSurfingObject(npcid);

        if (objectid == INVALID_OBJECT_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not surfing on any object.", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is surfing on object: %d", npcid, objectid);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns INVALID\_OBJECT\_ID if the NPC is not surfing on any object

## Related Functions

-   [NPC\_SetSurfingObject](https://open.mp/docs/scripting/functions/NPC_SetSurfingObject): Sets the object an NPC is surfing on
-   [NPC\_GetSurfingVehicle](https://open.mp/docs/scripting/functions/NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on
-   [NPC\_GetSurfingPlayerObject](https://open.mp/docs/scripting/functions/NPC_GetSurfingPlayerObject): Gets the player object an NPC is surfing on
-   [NPC\_GetSurfingOffsets](https://open.mp/docs/scripting/functions/NPC_GetSurfingOffsets): Gets the surfing offset for an NPC
-   [NPC\_ResetSurfingData](https://open.mp/docs/scripting/functions/NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
