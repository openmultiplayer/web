---
title: "NPC_GetPathCount | open.mp"
description: "Gets the total number of NPC paths on the server."
canonical: https://open.mp/docs/scripting/functions/NPC_GetPathCount
language: en
---

# NPC\_GetPathCount

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the total number of NPC paths currently existing on the server.

## Returns

Returns the number of paths that exist on the server.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathcount", true))
    {
        new count = NPC_GetPathCount();

        SendClientMessage(playerid, 0x00FF00FF, "Total NPC paths: %d", count);
        return 1;
    }
    return 0;
}
```

## Notes

-   This counts all paths, whether they have points or not
-   Empty paths (no waypoints) are still counted

## Related Functions

-   [NPC\_CreatePath](https://open.mp/docs/scripting/functions/NPC_CreatePath): Create a new path
-   [NPC\_DestroyPath](https://open.mp/docs/scripting/functions/NPC_DestroyPath): Destroy a specific path
-   [NPC\_DestroyAllPath](https://open.mp/docs/scripting/functions/NPC_DestroyAllPath): Destroy all paths
-   [NPC\_IsValidPath](https://open.mp/docs/scripting/functions/NPC_IsValidPath): Check if a path is valid

## Related Callbacks

-   [OnNPCFinishMovePath](https://open.mp/docs/scripting/callbacks/OnNPCFinishMovePath): Called when NPC finishes a path
