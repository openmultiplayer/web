---
title: NPC_IsMoving
sidebar_label: NPC_IsMoving
description: Checks if an NPC is currently moving.
tags: ["npc", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently moving.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is moving, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Walker");
    NPC_Spawn(npcid);
    NPC_Move(npcid, 1958.33, 1343.12, 15.36, NPC_MOVE_TYPE_WALK);
    
    SetTimerEx("CheckMovement", 2000, false, "i", npcid);
    
    return 1;
}

forward CheckMovement(npcid);
public CheckMovement(npcid)
{
    if (NPC_IsMoving(npcid))
    {
        printf("NPC %d is moving", npcid);
    }
    else
    {
        printf("NPC %d has stopped moving", npcid);
    }
}
```

## Notes

- Returns true when the NPC is walking, running, or driving to a destination
- Use this to check if movement commands are still active
- Returns false when the NPC reaches its destination or is stopped

## Related Functions

- [NPC_Move](NPC_Move): Make NPC move to position
- [NPC_StopMove](NPC_StopMove): Stop NPC movement
- [NPC_MoveToPlayer](NPC_MoveToPlayer): Make NPC follow player
- [NPC_MoveByPath](NPC_MoveByPath): Make NPC follow path

## Related Callbacks

- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes movement
