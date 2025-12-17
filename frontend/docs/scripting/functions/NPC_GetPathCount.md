---
title: NPC_GetPathCount
sidebar_label: NPC_GetPathCount
description: Gets the total number of NPC paths on the server.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.5.8.3079' />

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

- This counts all paths, whether they have points or not
- Empty paths (no waypoints) are still counted

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Create a new path
- [NPC_DestroyPath](NPC_DestroyPath): Destroy a specific path
- [NPC_DestroyAllPath](NPC_DestroyAllPath): Destroy all paths
- [NPC_IsValidPath](NPC_IsValidPath): Check if a path is valid

## Related Callbacks

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Called when NPC finishes a path
