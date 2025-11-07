---
title: NPC_StopMove
sidebar_label: NPC_StopMove
description: Stops an NPC from moving.
tags: ["npc", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Stops an NPC from moving to their current destination.

| Name  | Description        |
| ----- | ------------------ |
| npcid | The ID of the NPC. |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopmove", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopMove(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stop moving: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

- This stops the NPC at their current position.
- If the NPC is not moving, this function has no effect.
- The NPC will remain at the stopped position until given a new movement command.
- Use [NPC_IsMoving](NPC_IsMoving) to check if an NPC is currently moving.

## Related Functions

- [NPC_Move](NPC_Move): Make NPC move to a position.
- [NPC_IsMoving](NPC_IsMoving): Check if NPC is moving.
- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path.
- [NPC_SetPos](NPC_SetPos): Set NPC position instantly.

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement.
