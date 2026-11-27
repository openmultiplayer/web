---
title: "NPC_MoveToPlayer | open.mp"
description: "Makes an NPC move toward and follow a player."
canonical: https://open.mp/docs/scripting/functions/NPC_MoveToPlayer
language: en
---

# NPC\_MoveToPlayer

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Makes an NPC move toward and follow a player.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC. |
| playerid | The ID of the player to move toward. |
| NPC\_MOVE\_TYPE:moveType | Movement type (default: `NPC_MOVE_TYPE_JOG`). |
| Float:moveSpeed | Movement speed (default: `NPC_MOVE_SPEED_AUTO`). |
| Float:stopRange | Distance to stop from player (default: 0.2) |
| updateDelayMS | Position check update delay in milliseconds (default: 500). |
| bool:autoRestart | Whether to automatically restart following (default: false). |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmovetoplayer", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        NPC_MoveToPlayer(npcid, playerid, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.2, 500, false);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d now following you", npcid);
        return 1;
    }
    return 0;
}
```

## Notes

note

-   NPCs will continuously follow the target player until stopped.
-   The `updateDelayMS` parameter controls how often the NPC updates its target position.
-   Lower `updateDelayMS` values provide smoother following but use more resources.
-   The `autoRestart` parameter determines if following resumes after interruptions.
-   Following stops when the target player disconnects.

## Related Functions

-   [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move): Move NPC to a specific position.
-   [NPC\_StopMove](https://open.mp/docs/scripting/functions/NPC_StopMove): Stop NPC movement.
-   [NPC\_IsMoving](https://open.mp/docs/scripting/functions/NPC_IsMoving): Check if NPC is moving.
-   [NPC\_MoveByPath](https://open.mp/docs/scripting/functions/NPC_MoveByPath): Move NPC along a predefined path.

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC reaches target (not called for continuous following).
