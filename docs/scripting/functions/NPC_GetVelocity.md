---
title: "NPC_GetVelocity | open.mp"
description: "Gets the velocity of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetVelocity
language: en
---

# NPC\_GetVelocity

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the velocity of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| &Float:x | Variable to store the X velocity component, passed by reference |
| &Float:y | Variable to store the Y velocity component, passed by reference |
| &Float:z | Variable to store the Z velocity component, passed by reference |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvelocity", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:velX, Float:velY, Float:velZ;
        NPC_GetVelocity(npcid, velX, velY, velZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d velocity: X=%.2f, Y=%.2f, Z=%.2f", npcid, velX, velY, velZ);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   All velocity parameters are passed by reference and will be modified

## Related Functions

-   [NPC\_SetVelocity](https://open.mp/docs/scripting/functions/NPC_SetVelocity): Set NPC velocity
-   [NPC\_GetPos](https://open.mp/docs/scripting/functions/NPC_GetPos): Get NPC position
-   [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move): Make NPC move to position

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes movement
