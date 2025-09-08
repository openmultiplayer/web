---
title: NPC_IsValidPath
sidebar_label: NPC_IsValidPath
description: Checks if a path ID is valid and exists.
tags: ["npc", "path", "validation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if a path ID is valid and exists.

| Name   | Description            |
| ------ | ---------------------- |
| pathid | The ID of the path    |

## Returns

Returns `true` if the path is valid, `false` otherwise.

## Examples

```c
new g_MainPath = -1;

public OnGameModeInit()
{
    // Create and validate a main patrol path
    g_MainPath = NPC_CreatePath();
    
    if (NPC_IsValidPath(g_MainPath))
    {
        printf("Main patrol path %d created successfully", g_MainPath);
        
        // Build the patrol route
        NPC_AddPointToPath(g_MainPath, 1958.33, 1343.12, 15.36, 2.0);
        NPC_AddPointToPath(g_MainPath, 2058.33, 1343.12, 15.36, 2.0);
        NPC_AddPointToPath(g_MainPath, 2058.33, 1443.12, 15.36, 2.0);
        NPC_AddPointToPath(g_MainPath, 1958.33, 1443.12, 15.36, 2.0);
        
        printf("Added %d points to patrol path", NPC_GetPathPointCount(g_MainPath));
    }
    else
    {
        printf("ERROR: Failed to create main patrol path");
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/validatepath", true))
    {
        if (NPC_IsValidPath(g_MainPath))
        {
            new pointCount = NPC_GetPathPointCount(g_MainPath);
            new msg[128];
            format(msg, sizeof(msg), "Main path %d is VALID with %d points", 
                g_MainPath, pointCount);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Main path is INVALID or destroyed");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        if (NPC_IsValidPath(g_MainPath))
        {
            new npcid = NPC_Create("Patroller");
            NPC_Spawn(npcid);
            NPC_MoveByPath(npcid, g_MainPath, NPC_MOVE_TYPE_WALK);
            
            SendClientMessage(playerid, 0x00FF00FF, "Patrol NPC started following main path");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Cannot start patrol - path is invalid");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/createtemppath", true))
    {
        new tempPath = NPC_CreatePath();
        
        if (NPC_IsValidPath(tempPath))
        {
            // Quick validation test
            NPC_AddPointToPath(tempPath, 1500.0, 1500.0, 10.0, 1.0);
            
            new msg[64];
            format(msg, sizeof(msg), "Temporary path %d created and validated", tempPath);
            SendClientMessage(playerid, 0x00FF00FF, msg);
            
            // Clean up
            NPC_DestroyPath(tempPath);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to create temporary path");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Always check if a path is valid before using it with NPCs
- Invalid paths may have been destroyed or never created properly
- Use this before adding points or assigning paths to NPCs
- Path IDs are reused when paths are destroyed

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_DestroyPath](NPC_DestroyPath): Destroy a path
- [NPC_GetPathCount](NPC_GetPathCount): Get total path count
- [NPC_AddPointToPath](NPC_AddPointToPath): Add point to path

## Related Callbacks

- [OnNPCPathCreated](OnNPCPathCreated): Called when path is created
- [OnNPCPathDestroyed](OnNPCPathDestroyed): Called when path is destroyed