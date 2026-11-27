---
title: "NPC_GetPosMovingTo | open.mp"
description: "Gets the position that the NPC is currently moving toward."
canonical: https://open.mp/docs/scripting/functions/NPC_GetPosMovingTo
language: en
---

# NPC\_GetPosMovingTo

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the position that the NPC is currently moving toward.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| &Float:x | Variable to store the X coordinate of the target position, passed by reference |
| &Float:y | Variable to store the Y coordinate of the target position, passed by reference |
| &Float:z | Variable to store the Z coordinate of the target position, passed by reference |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkposmovingto", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (!NPC_IsMoving(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "NPC %d is not moving", npcid);

        new Float:x, Float:y, Float:z;
        NPC_GetPosMovingTo(npcid, x, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d target position: %.2f, %.2f, %.2f", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   All coordinate parameters are passed by reference and will be modified.
-   This function returns the target position the NPC is moving toward, not the current position.

tip

Use [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving) to check if the NPC is currently moving before calling this function.

## Related Functions

-   [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move): Makes an NPC move to a specific position.
-   [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving): Check if NPC is moving.
-   [NPC\_GetPos](https://open.mp/docs/scripting/functions/NPC_GetPos): Get NPC's current position.
-   [NPC\_StopMove](https://open.mp/docs/scripting/functions/NPC_StopMove): Stop NPC movement.

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes movement.
