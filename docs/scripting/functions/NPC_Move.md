---
title: "NPC_Move | open.mp"
description: "Makes an NPC move to a specific position."
canonical: https://open.mp/docs/scripting/functions/NPC_Move
language: en
---

# NPC\_Move

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Makes an NPC move to a specific position.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |
| Float:x | The X coordinate to move to. |
| Float:y | The Y coordinate to move to. |
| Float:z | The Z coordinate to move to. |
| NPC\_MOVE\_TYPE:moveType | [The movement type](https://open.mp/docs/scripting/resources/npc-constants#movement-types) (default: `NPC_MOVE_TYPE_JOG`). |
| Float:moveSpeed | [Movement speed](https://open.mp/docs/scripting/resources/npc-constants#movement-speed) (default: `NPC_MOVE_SPEED_AUTO`). |
| Float:stopRange | Distance to target before stopping (default: 0.2). |

## Returns

Returns `true` if the movement was started successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmove", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.2);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d moving to your position (%.2f, %.2f, %.2f)", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   The NPC will pathfind to the target position.
-   Movement types affect animation and speed.
-   Stop range determines how close the NPC gets before stopping.

tip

Use [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving) to check if the NPC is currently moving

## Related Functions

-   [NPC\_MoveToPlayer](https://open.mp/docs/scripting/functions/NPC_MoveToPlayer): Move NPC to follow a player.
-   [NPC\_StopMove](https://open.mp/docs/scripting/functions/NPC_StopMove): Stop NPC movement.
-   [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving): Check if NPC is moving.
-   [NPC\_MoveByPath](https://open.mp/docs/scripting/functions/NPC_MoveByPath): Move NPC along a predefined path.

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes movement.

## Related Resources

-   [NPC Constants](https://open.mp/docs/scripting/resources/npc-constants)
