---
title: NPC_GetAll
sidebar_label: NPC_GetAll
description: Gets all NPC IDs and stores them in an array.
tags: ["npc"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets all NPC IDs and stores them in an array.

| Name   | Description                                      |
| ------ | ------------------------------------------------ |
| npcs[] | Array to store the NPC IDs, passed by reference. |
| size   | Size of the array.                               |

## Returns

Returns the number of NPCs found.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/countnpcs", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        SendClientMessage(playerid, 0x00FF00FF, "There are %d NPCs on the server.", count);

        return 1;
    }
   return 0;
}
```

## Notes

:::warning

- The array must be large enough to hold all NPC IDs.
- Only valid NPCs are included in the array.
- The function returns the actual number of NPCs found.
- Use this to iterate through all NPCs on the server.

:::

## Related Functions

- [NPC_Create](NPC_Create): Create a new NPC.
- [NPC_IsValid](NPC_IsValid): Check if an NPC ID is valid.
- [NPC_Destroy](NPC_Destroy): Destroy an NPC.

## Related Callbacks

- [OnNPCCreate](../callbacks/OnNPCCreate): Called when an NPC is created.
