---
title: NPC_GetPlayerMovingTo
sidebar_label: NPC_GetPlayerMovingTo
description: Gets the ID of the player that an NPC is currently moving toward.
tags: ["npc", "player", "movement"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the ID of the player that an NPC is currently moving toward.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the ID of the player being moved toward, or `INVALID_PLAYER_ID` if not moving toward anyone.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkwhonpcmoving", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new targetid = NPC_GetPlayerMovingTo(npcid);

        if (targetid == INVALID_PLAYER_ID)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is not moving toward any player", npcid);
        else
        {
            new targetName[MAX_PLAYER_NAME];
            GetPlayerName(targetid, targetName, sizeof(targetName));
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is moving toward player %s (ID %d)", npcid, targetName, targetid);
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the player ID if the NPC is moving using [NPC_MoveToPlayer](NPC_MoveToPlayer)
- Returns `INVALID_PLAYER_ID` if the NPC is not moving toward any player
- This is different from moving to a fixed position with [NPC_Move](NPC_Move)

## Related Functions

- [NPC_MoveToPlayer](NPC_MoveToPlayer): Make NPC move toward a player
- [NPC_IsMovingToPlayer](NPC_IsMovingToPlayer): Check if NPC is moving toward specific player
- [NPC_IsMoving](NPC_IsMoving): Check if NPC is moving
- [NPC_GetPlayerAimingAt](NPC_GetPlayerAimingAt): Get player NPC is aiming at

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
