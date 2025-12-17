---
title: NPC_IsValidPath
sidebar_label: NPC_IsValidPath
description: Checks if a path ID is valid and exists.
tags: ["npc", "path", "validation"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Checks if a path ID is valid and exists.

| Name   | Description        |
| ------ | ------------------ |
| pathid | The ID of the path |

## Returns

Returns `true` if the path is valid, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvalidpath ", true, 16))
    {
        new pathid = strval(cmdtext[16]);

        new bool:isValidPath = NPC_IsValidPath(pathid);

        SendClientMessage(playerid, 0x00FF00FF, "Path %d is valid: %s", pathid, isValidPath ? "Yes" : "No");
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

_No specific callbacks are triggered by this function._
