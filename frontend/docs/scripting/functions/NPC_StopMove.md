---
title: NPC_StopMove
sidebar_label: NPC_StopMove
description: Stops an NPC from moving.
tags: ["npc", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Stops an NPC from moving to their current destination.

| Name  | Description           |
| ----- | --------------------- |
| npcid | The ID of the NPC     |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Walker");
    NPC_Spawn(npcid);
    
    // Start moving
    NPC_Move(npcid, 1958.33, 1343.12, 15.36, NPC_MOVE_TYPE_WALK);
    
    // Stop movement after 5 seconds
    SetTimerEx("StopNPCMovement", 5000, false, "i", npcid);
    
    return 1;
}

forward StopNPCMovement(npcid);
public StopNPCMovement(npcid)
{
    NPC_StopMove(npcid);
    printf("NPC %d stopped moving", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/freeze", true))
    {
        // Stop NPC 0 from moving
        NPC_StopMove(0);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 movement stopped");
        return 1;
    }
    return 0;
}
```

## Notes

- This stops the NPC at their current position
- If the NPC is not moving, this function has no effect
- The NPC will remain at the stopped position until given a new movement command
- Use `NPC_IsMoving` to check if an NPC is currently moving

## Related Functions

- [NPC_Move](NPC_Move): Make NPC move to a position
- [NPC_IsMoving](NPC_IsMoving): Check if NPC is moving
- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow a path
- [NPC_SetPos](NPC_SetPos): Set NPC position instantly

## Related Callbacks

- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes movement