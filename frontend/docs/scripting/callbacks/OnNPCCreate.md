---
title: OnNPCCreate
sidebar_label: OnNPCCreate
description: This callback is called when an NPC is successfully created.
tags: ["npc"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

This callback is called when an NPC is successfully created and added to the server.

| Name  | Description                        |
| ----- | ---------------------------------- |
| npcid | The ID of the NPC that was created |

## Examples

```c
public OnNPCCreate(npcid)
{
    printf("[NPC] NPC %d has been created", npcid);

    // Notify all connected players
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been created", npcid);
    }
    return 1;
}
```

## Notes

- This callback is called immediately after the NPC is created but before it's spawned
- The NPC will need to be spawned using `NPC_Spawn` to become visible in the game world

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Create](../functions/NPC_Create): Create a new NPC
- [NPC_Destroy](../functions/NPC_Destroy): Destroy an existing NPC
- [NPC_Spawn](../functions/NPC_Spawn): Spawn the NPC in the game world

## Related Callbacks

- [OnNPCDestroy](OnNPCDestroy): Called when an NPC is destroyed
- [OnNPCSpawn](OnNPCSpawn): Called when an NPC is spawned
