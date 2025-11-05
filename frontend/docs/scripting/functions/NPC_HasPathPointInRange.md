---
title: NPC_HasPathPointInRange
sidebar_label: NPC_HasPathPointInRange
description: Checks if a path has any point within the specified range from given coordinates.
tags: ["npc", "path"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if a path has any point within the specified range from given coordinates.

| Name   | Description                                |
| ------ | ------------------------------------------ |
| pathId | The ID of the path to check                |
| x      | The X coordinate of the center position    |
| y      | The Y coordinate of the center position    |
| z      | The Z coordinate of the center position    |
| radius | The radius to check for path points within |

## Returns

Returns `true` if the path has at least one point within the specified range, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpathpointinrange", true, 22))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new pathid = strval(cmdtext[23]);

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        new bool:hasPoint = NPC_HasPathPointInRange(pathid, x, y, z, 50.0);

        SendClientMessage(playerid, 0x00FF00FF, "Path %d has point near your position (%.2f, %.2f, %.2f): %s", pathid, x, y, z, hasPoint ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- This function is useful for checking if an NPC path intersects with a specific area or location before starting path movement
- The function checks the 3D distance between the given position and each path point
- Only valid paths with at least one point can return `true`

## Related Functions

- [NPC_CreatePath](NPC_CreatePath): Creates a new path for NPC movement
- [NPC_AddPointToPath](NPC_AddPointToPath): Adds a point to a path
- [NPC_GetPathPoint](NPC_GetPathPoint): Gets information about a specific point in a path
- [NPC_MoveByPath](NPC_MoveByPath): Makes an NPC follow a predefined path

## Related Callbacks

_No specific callbacks are triggered by this function._
