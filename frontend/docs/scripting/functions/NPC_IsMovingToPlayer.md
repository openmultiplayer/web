---
title: NPC_IsMovingToPlayer
sidebar_label: NPC_IsMovingToPlayer
description: Checks if an NPC is moving toward a specific player.
tags: ["npc", "player", "movement"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Checks if an NPC is moving toward a specific player.

| Name     | Description                    |
| -------- | ------------------------------ |
| npcid    | The ID of the NPC              |
| playerid | The ID of the player to check  |

## Returns

Returns `true` if the NPC is moving toward the specified player, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmovingtowardme", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isMovingToPlayer = NPC_IsMovingToPlayer(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is moving toward you: %s", npcid, isMovingToPlayer ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- This function checks if the NPC was commanded to move toward a specific player using [NPC_MoveToPlayer](NPC_MoveToPlayer)
- Returns false if the NPC is not moving or is moving toward a different target

## Related Functions

- [NPC_MoveToPlayer](NPC_MoveToPlayer): Make NPC move toward a player
- [NPC_IsMoving](NPC_IsMoving): Check if NPC is moving
- [NPC_StopMove](NPC_StopMove): Stop NPC movement
- [NPC_GetPlayerMovingTo](NPC_GetPlayerMovingTo): Get the player ID the NPC is moving toward

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
