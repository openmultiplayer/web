---
title: NPC_IsAimingAtPlayer
sidebar_label: NPC_IsAimingAtPlayer
description: Checks if an NPC is aiming at a specific player.
tags: ["npc", "weapon", "aiming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is aiming at a specific player.

| Name     | Description                   |
| -------- | ----------------------------- |
| npcid    | The ID of the NPC             |
| playerid | The ID of the player to check |

## Returns

Returns `true` if the NPC is aiming at the specified player, `false` otherwise.

## Examples

```c

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaimingat", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isAimingAtPlayer = NPC_IsAimingAtPlayer(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is aiming at you: %s", npcid, isAimingAtPlayer ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true only when the NPC is specifically targeting the given player
- Use this to check if a player is being targeted by an NPC
- The NPC must be using NPC_AimAtPlayer for this to return true

## Related Functions

- [NPC_AimAtPlayer](NPC_AimAtPlayer): Make NPC aim at player
- [NPC_IsAiming](NPC_IsAiming): Check if NPC is aiming
- [NPC_StopAim](NPC_StopAim): Stop NPC from aiming
- [NPC_AimAt](NPC_AimAt): Make NPC aim at position

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
