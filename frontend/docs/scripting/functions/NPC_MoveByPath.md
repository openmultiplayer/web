---
title: NPC_MoveByPath
sidebar_label: NPC_MoveByPath
description: Makes an NPC follow a predefined path.
tags: ["npc", "movement", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC follow a predefined path with various movement options.

| Name      | Description                                    |
| --------- | ---------------------------------------------- |
| npcid     | The ID of the NPC                             |
| pathid    | The ID of the path to follow                  |
| moveType  | The movement type (default: NPC_MOVE_TYPE_JOG)|
| moveSpeed | Movement speed (default: NPC_MOVE_SPEED_AUTO) |
| reversed  | Whether to follow path in reverse (default: false)|

## Returns

Returns `true` if the NPC started following the path, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Patroller");
    NPC_Spawn(npcid);
    
    // Create a path
    new pathid = NPC_CreatePath();
    NPC_AddPointToPath(pathid, 1958.33, 1343.12, 15.36, 2.0);
    NPC_AddPointToPath(pathid, 1958.33, 1443.12, 15.36, 2.0);
    NPC_AddPointToPath(pathid, 2058.33, 1443.12, 15.36, 2.0);
    NPC_AddPointToPath(pathid, 2058.33, 1343.12, 15.36, 2.0);
    
    // Make NPC follow the path by walking
    NPC_MoveByPath(npcid, pathid, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_AUTO, false);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        new pathid = NPC_CreatePath();
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        // Create a simple square patrol around player
        NPC_AddPointToPath(pathid, x + 10.0, y + 10.0, z, 1.0);
        NPC_AddPointToPath(pathid, x - 10.0, y + 10.0, z, 1.0);
        NPC_AddPointToPath(pathid, x - 10.0, y - 10.0, z, 1.0);
        NPC_AddPointToPath(pathid, x + 10.0, y - 10.0, z, 1.0);
        
        // Start patrol with first NPC
        NPC_MoveByPath(0, pathid, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, false);
        
        SendClientMessage(playerid, 0x00FF00FF, "NPC started patrolling around you");
        return 1;
    }
    return 0;
}
```

## Notes

- Path must be created with NPC_CreatePath before use
- Use NPC_AddPointToPath to add waypoints to the path
- Path types include loop, once, and ping-pong modes
- Movement flags can be combined for different behaviors

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_AddPointToPath](NPC_AddPointToPath): Add point to path
- [NPC_StopMove](NPC_StopMove): Stop path movement
- [NPC_GetCurrentPathPointIndex](NPC_GetCurrentPathPointIndex): Get current point

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes moving along a path


