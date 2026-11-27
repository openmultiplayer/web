---
title: "NPC_DestroyAllPath | open.mp"
description: "Destroys all NPC paths."
canonical: https://open.mp/docs/scripting/functions/NPC_DestroyAllPath
language: en
---

# NPC\_DestroyAllPath

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

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

-   This function destroys ALL paths on the server and NPCs currently following paths will stop moving
-   All path IDs become invalid after this function is called
-   This is useful for cleanup during gamemode shutdown/restart

## Related Functions

-   [NPC\_CreatePath](https://open.mp/docs/scripting/functions/NPC_CreatePath): Create a new path
-   [NPC\_DestroyPath](https://open.mp/docs/scripting/functions/NPC_DestroyPath): Destroy a specific path
-   [NPC\_GetPathCount](https://open.mp/docs/scripting/functions/NPC_GetPathCount): Get total number of paths
-   [NPC\_ClearPath](https://open.mp/docs/scripting/functions/NPC_ClearPath): Clear all points from a path

## Related Callbacks

-   [OnNPCFinishMovePath](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath): Called when NPC finishes a path
