---
title: "OnNPCCreate | open.mp"
description: "This callback is called when an NPC is successfully created."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCCreate
language: en
---

# OnNPCCreate

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC is successfully created and added to the server.

| Name | Description |
| --- | --- |
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

-   This callback is called immediately after the NPC is created but before it's spawned
-   The NPC will need to be spawned using `NPC_Spawn` to become visible in the game world

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_Create](https://open.mp/docs/scripting/functions/NPC_Create): Create a new NPC
-   [NPC\_Destroy](https://open.mp/docs/scripting/functions/NPC_Destroy): Destroy an existing NPC
-   [NPC\_Spawn](https://open.mp/docs/scripting/functions/NPC_Spawn): Spawn the NPC in the game world

## Related Callbacks

-   [OnNPCDestroy](https://open.mp/docs/scripting/callbacks/OnNPCDestroy): Called when an NPC is destroyed
-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when an NPC is spawned
