---
title: OnNPCFinishMove
sidebar_label: OnNPCFinishMove
description: This callback is called when an NPC finishes moving to its target destination.
tags: ["npc", "movement"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

This callback is called when an NPC finishes moving to its target destination.

| Name  | Description                            |
| ----- | -------------------------------------- |
| npcid | The ID of the NPC that finished moving |

## Examples

```c
public OnNPCFinishMove(npcid)
{
    // Find all players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            new Float:x, Float:y, Float:z;
            NPC_GetPos(npcid, x, y, z);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished moving to position (%.2f, %.2f, %.2f)", npcid, x, y, z);
        }
    }
    return 1;
}
```

## Notes

- This callback is called for all types of NPC movement (walk, run, sprint, drive)
- It is called when the NPC reaches the target position set by movement functions
- For path-based movement, this is called when the entire path is completed (see `OnNPCFinishMovePath` for path-specific callback)
- For player following, this is called when the NPC stops following (if auto-restart is disabled)

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Move](../functions/NPC_Move): Make NPC move to a position
- [NPC_MoveToPlayer](../functions/NPC_MoveToPlayer): Make NPC follow a player
- [NPC_StopMove](../functions/NPC_StopMove): Stop NPC movement
- [NPC_IsMoving](../functions/NPC_IsMoving): Check if NPC is currently moving

## Related Callbacks

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC reaches a node point
- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes node navigation
- [OnNPCFinishMovePath](OnNPCFinishMovePath): Called when NPC finishes moving along a path
