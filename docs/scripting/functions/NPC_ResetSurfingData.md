---
title: "NPC_ResetSurfingData | open.mp"
description: "Resets all surfing data for an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_ResetSurfingData
language: en
---

# NPC\_ResetSurfingData

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Resets all surfing data for an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetsurfing", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        NPC_ResetSurfingData(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing data has been reset.", npcid);
        return 1;
    }
    return 0;
}
```

## Notes

-   This function clears all surfing-related data for an NPC, including the surfing object/vehicle and offset
-   The NPC will no longer be attached to any surface after calling this function
-   The NPC's position is not changed, only its surfing state is reset

## Related Functions

-   [NPC\_SetSurfingObject](https://open.mp/docs/scripting/functions/NPC_SetSurfingObject): Sets the object an NPC is surfing on
-   [NPC\_SetSurfingVehicle](https://open.mp/docs/scripting/functions/NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
-   [NPC\_SetSurfingPlayerObject](https://open.mp/docs/scripting/functions/NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
-   [NPC\_SetSurfingOffsets](https://open.mp/docs/scripting/functions/NPC_SetSurfingOffsets): Sets the surfing offset for an NPC
-   [NPC\_GetSurfingObject](https://open.mp/docs/scripting/functions/NPC_GetSurfingObject): Gets the object an NPC is surfing on
-   [NPC\_GetSurfingVehicle](https://open.mp/docs/scripting/functions/NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on

## Related Callbacks

_No specific callbacks are triggered by this function._
