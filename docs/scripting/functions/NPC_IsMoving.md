---
title: "NPC_IsMoving | open.mp"
description: "Checks if an NPC is currently moving."
canonical: https://open.mp/docs/scripting/functions/NPC_IsMoving
language: en
---

# NPC\_IsMoving

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is currently moving.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is moving, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmoving", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isMoving = NPC_IsMoving(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is moving: %s", npcid, isMoving ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns true when the NPC is walking, running, or driving to a destination
-   Returns false when the NPC reaches its destination or is stopped

## Related Functions

-   [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move): Make NPC move to position
-   [NPC\_StopMove](https://open.mp/docs/scripting/functions/NPC_StopMove): Stop NPC movement
-   [NPC\_MoveToPlayer](https://open.mp/docs/scripting/functions/NPC_MoveToPlayer): Make NPC follow player
-   [NPC\_MoveByPath](https://open.mp/docs/scripting/functions/NPC_MoveByPath): Make NPC follow path

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes movement
