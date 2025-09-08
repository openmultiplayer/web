---
title: NPC_Move
sidebar_label: NPC_Move
description: Makes an NPC move to a specific position.
tags: ["npc", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC move to a specific position.

| Name       | Description                                      |
| ---------- | ------------------------------------------------ |
| npcid      | The ID of the NPC                               |
| x          | The X coordinate to move to                     |
| y          | The Y coordinate to move to                     |
| z          | The Z coordinate to move to                     |
| moveType   | The movement type (default: NPC_MOVE_TYPE_JOG)  |
| moveSpeed  | Movement speed (default: NPC_MOVE_SPEED_AUTO)   |
| stopRange  | Distance to target before stopping (default: 0.2) |

## Returns

Returns `true` if the movement was started successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Walker");
    NPC_Spawn(npcid);
    
    // Make NPC walk to a position
    NPC_Move(npcid, 1958.33, 1343.12, 15.36, NPC_MOVE_TYPE_WALK);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/callnpc", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        // Make NPC 0 run to player
        NPC_Move(0, x, y, z, NPC_MOVE_TYPE_SPRINT, NPC_MOVE_SPEED_AUTO, 2.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is coming to you!");
        
        return 1;
    }
    
    if (!strcmp(cmdtext, "/npcpatrol", true))
    {
        
        // Send NPC 0 to patrol different areas
        new patrolPoints[][3] = {
            {1958, 1343, 15},
            {1968, 1353, 15},
            {1978, 1363, 15},
            {1958, 1373, 15}
        };
        
        new point = random(sizeof(patrolPoints));
        NPC_Move(0, 
            float(patrolPoints[point][0]), 
            float(patrolPoints[point][1]), 
            float(patrolPoints[point][2]), 
            NPC_MOVE_TYPE_JOG
        );
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 sent on patrol");
        
        return 1;
    }
    return 0;
}

forward NPCPatrolSequence(npcid);
public NPCPatrolSequence(npcid)
{
    if (!NPC_IsValid(npcid))
        return;
        
    if (NPC_IsMoving(npcid))
    {
        // NPC is still moving, check again later
        SetTimerEx("NPCPatrolSequence", 1000, false, "i", npcid);
        return;
    }
    
    // NPC finished moving, send to next position
    new Float:x = 1950.0 + random(50);
    new Float:y = 1340.0 + random(50);
    new Float:z = 15.36;
    
    NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_AUTO, 1.0);
    
    // Schedule next patrol
    SetTimerEx("NPCPatrolSequence", 10000, false, "i", npcid);
}
```

## Notes

- The NPC will pathfind to the target position
- Movement types affect animation and speed
- Stop range determines how close the NPC gets before stopping
- Use `NPC_IsMoving` to check if the NPC is currently moving
- Movement can be interrupted by calling `NPC_StopMove`

## Related Functions

- [NPC_MoveToPlayer](NPC_MoveToPlayer): Move NPC to follow a player
- [NPC_StopMove](NPC_StopMove): Stop NPC movement
- [NPC_IsMoving](NPC_IsMoving): Check if NPC is moving
- [NPC_MoveByPath](NPC_MoveByPath): Move NPC along a predefined path

## Related Callbacks

- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes movement
