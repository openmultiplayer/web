---
title: NPC_DestroyAllPath
sidebar_label: NPC_DestroyAllPath
description: Destroys all NPC paths.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Destroys all existing NPC paths on the server.

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/destroyallpaths", true))
    {
        NPC_DestroyAllPath();
        SendClientMessage(playerid, 0x00FF00FF, "All NPC paths have been destroyed.");
        printf("Total paths after destruction: %d", NPC_GetPathCount());
        return 1;
    }
    return 0;
}

public OnGameModeExit()
{
    // Clean up all paths on server shutdown
    NPC_DestroyAllPath();
    return 1;
}
```

## Notes

- This function destroys ALL paths on the server
- NPCs currently following paths will stop moving
- All path IDs become invalid after this function is called
- Use with caution as this affects all NPCs on the server
- This is useful for cleanup during gamemode restart

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_DestroyPath](NPC_DestroyPath): Destroy a specific path
- [NPC_GetPathCount](NPC_GetPathCount): Get total number of paths
- [NPC_ClearPath](NPC_ClearPath): Clear all points from a path

## Related Callbacks

- [OnNPCFinishMovePath](OnNPCFinishMovePath): Called when NPC finishes a path
