---
title: NPC_DestroyAllPath
sidebar_label: NPC_DestroyAllPath
description: Destroys all NPC paths.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Destroys all existing NPC paths on the server.

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeExit()
{
    // Get number of paths before clearing
    new total = NPC_GetPathCount();

    // Try to destroy them all
    if (NPC_DestroyAllPath())
    {
        printf("[NPC] Destroyed all NPC paths (%d removed).", total);
    }
    else
    {
        printf("[NPC] Failed to destroy NPC paths.");
    }

    return 1;
}

```

## Notes

- This function destroys ALL paths on the server and NPCs currently following paths will stop moving
- All path IDs become invalid after this function is called
- This is useful for cleanup during gamemode shutdown/restart

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_DestroyPath](NPC_DestroyPath): Destroy a specific path
- [NPC_GetPathCount](NPC_GetPathCount): Get total number of paths
- [NPC_ClearPath](NPC_ClearPath): Clear all points from a path

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes a path
