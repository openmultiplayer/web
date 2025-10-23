---
title: NPC_Create
sidebar_label: NPC_Create
description: Creates a new NPC.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Creates a new NPC.

| Name         | Description                              |
| ------------ | ---------------------------------------- |
| const name[] | The name of the NPC (max 24 characters). |

## Returns

Returns the ID of the created NPC, or `INVALID_NPC_ID` on failure.

## Examples

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("MyBot");
    if (npcid != INVALID_NPC_ID)
    {
        printf("NPC created with ID: %d", npcid);
        NPC_Spawn(npcid);
    }
    return 1;
}
```

## Notes

:::warning

- The NPC will not be spawned automatically. Use [NPC_Spawn](NPC_Spawn) to spawn it.
- NPC names must follow the same rules as player names.
- Maximum name length is 24 characters.

:::

## Related Functions

- [NPC_Destroy](NPC_Destroy): Destroys an NPC.
- [NPC_Spawn](NPC_Spawn): Spawns an NPC.
- [NPC_IsValid](NPC_IsValid): Checks if an NPC ID is valid.

## Related Callbacks

- [OnNPCCreate](../callbacks/OnNPCCreate): Called when an NPC is created.
