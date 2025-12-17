---
title: NPC_IsAiming
sidebar_label: NPC_IsAiming
description: Checks if an NPC is currently aiming.
tags: ["npc", "weapon", "aiming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently aiming.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is aiming, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaiming", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isAiming = NPC_IsAiming(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is aiming: %s", npcid, isAiming ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true when the NPC is actively aiming at a target
- Use this to check if an NPC is in combat mode
- Aiming can be started with NPC_AimAt or NPC_AimAtPlayer
- NPCs continue aiming until stopped with NPC_StopAim

## Related Functions

- [NPC_AimAt](NPC_AimAt): Make NPC aim at position
- [NPC_AimAtPlayer](NPC_AimAtPlayer): Make NPC aim at player
- [NPC_StopAim](NPC_StopAim): Stop NPC from aiming
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): Check if aiming at specific player

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
