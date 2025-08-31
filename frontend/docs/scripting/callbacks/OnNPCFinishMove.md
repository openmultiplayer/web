---
title: OnNPCFinishMove
sidebar_label: OnNPCFinishMove
description: This callback is called when a NPC finishes moving to its target destination.
tags: ["npc", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

**## Description**

This callback is called when a NPC finishes moving to its target destination.

| Name  | Description                                   |
| ----- | --------------------------------------------- |
| npcid | The ID of the NPC that finished moving       |

**## Examples**

```c
public OnNPCFinishMove(npcid)
{
    printf("NPC %d has reached its destination", npcid);
    
    // Move to next destination
    new Float:x, Float:y, Float:z;
    GetPlayerPos(npcid, x, y, z);
    NPC_MoveTo(npcid, x + 10.0, y + 10.0, z, NPC_MOVE_TYPE_WALK);
    
    return true;
}
```

**## Notes**

- This callback is called for all types of NPC movement (walk, run, sprint, drive)
- It is called when the NPC reaches the target position set by movement functions
- For path-based movement, this is called when the entire path is completed
- For player following, this is called when the NPC stops following (if auto-restart is disabled)

**## Related Functions**

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_MoveTo](NPC_MoveTo): Make NPC move to a position
- [NPC_MoveToPlayer](NPC_MoveToPlayer): Make NPC follow a player
- [NPC_StopMove](NPC_StopMove): Stop NPC movement
- [NPC_IsMoving](NPC_IsMoving): Check if NPC is currently moving

**## Related Callbacks**

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Called when NPC reaches a node point
- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes node navigation
