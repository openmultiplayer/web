---
title: NPC_IsShooting
sidebar_label: NPC_IsShooting
description: Checks if an NPC is currently shooting.
tags: ["npc", "weapon", "shooting"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently shooting their weapon.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is shooting, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkshooting", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isShooting = NPC_IsShooting(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is shooting: %s", npcid, isShooting ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true only during the actual shooting action
- NPCs must have a weapon and ammo to shoot

## Related Functions

- [NPC_Shoot](NPC_Shoot): Make NPC shoot
- [NPC_AimAt](NPC_AimAt): Make NPC aim and shoot
- [NPC_StopShoot](NPC_StopShoot): Stop NPC shooting
- [NPC_IsAiming](NPC_IsAiming): Check if aiming

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages player
