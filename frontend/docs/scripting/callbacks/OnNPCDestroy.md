---
title: OnNPCDestroy
sidebar_label: OnNPCDestroy
description: This callback is called when an NPC is destroyed.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC is destroyed and removed from the server.

| Name  | Description                          |
| ----- | ------------------------------------ |
| npcid | The ID of the NPC that was destroyed |

## Examples

```c
public OnNPCDestroy(npcid)
{
    printf("[NPC] NPC %d has been destroyed", npcid);

    // Clear any player tracking this NPC and notify
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            PlayerNPC[playerid] = INVALID_NPC_ID;
            SendClientMessage(playerid, 0xFF0000FF, "Your tracked NPC %d has been destroyed", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d has been destroyed", npcid);
        }
    }
    return 1;
}

```

## Notes

- This callback is called immediately before the NPC is removed from the server
- The NPC will be disconnected and its player slot freed after this callback

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_Create](../functions/NPC_Create): Create a new NPC
- [NPC_Destroy](../functions/NPC_Destroy): Destroy an existing NPC
- [NPC_IsValid](../functions/NPC_IsValid): Check if NPC ID is valid

## Related Callbacks

- [OnNPCCreate](OnNPCCreate): Called when an NPC is created
