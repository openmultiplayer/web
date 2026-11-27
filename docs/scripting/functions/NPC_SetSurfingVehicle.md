---
title: "NPC_SetSurfingVehicle | open.mp"
description: "Sets the vehicle an NPC is surfing on."
canonical: https://open.mp/docs/scripting/functions/NPC_SetSurfingVehicle
language: en
---

# NPC\_SetSurfingVehicle

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the vehicle an NPC is surfing on.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| vehicleid | The vehicle ID |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingvehicle ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = strval(cmdtext[19]);

        NPC_SetSurfingVehicle(npcid, vehicleid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing vehicle set to %d", npcid, vehicleid);

        return 1;
    }
    return 0;
}
```

## Notes

-   This function allows NPCs to "surf" on vehicles, meaning they will move along with the vehicle while maintaining their position relative to it
-   The NPC will follow the vehicle's movement, rotation, and position changes
-   Use `NPC_SetSurfingOffsets` to position the NPC at specific locations on the vehicle (roof, hood, etc.)
-   The vehicle must exist for surfing to work properly

## Related Functions

-   [NPC\_GetSurfingVehicle](https://open.mp/docs/scripting/functions/NPC_GetSurfingVehicle): Gets the vehicle an NPC is surfing on
-   [NPC\_SetSurfingObject](https://open.mp/docs/scripting/functions/NPC_SetSurfingObject): Sets the object an NPC is surfing on
-   [NPC\_SetSurfingPlayerObject](https://open.mp/docs/scripting/functions/NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
-   [NPC\_SetSurfingOffsets](https://open.mp/docs/scripting/functions/NPC_SetSurfingOffsets): Sets the surfing offset for an NPC
-   [NPC\_ResetSurfingData](https://open.mp/docs/scripting/functions/NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
