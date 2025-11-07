---
title: NPC_StopAim
sidebar_label: NPC_StopAim
description: Stops an NPC from aiming.
tags: ["npc", "weapon", "aiming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Stops an NPC from aiming at any target.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/friendly", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_StopAim(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stopped aiming.", npcid);
        return 1;
    }
    return 0;
}
```

## Notes

- This stops both aiming and shooting if the NPC was doing both
- The NPC will return to its normal stance after stopping aim
- Has no effect if the NPC is not currently aiming

## Related Functions

- [NPC_AimAt](NPC_AimAt): Make NPC aim at position
- [NPC_AimAtPlayer](NPC_AimAtPlayer): Make NPC aim at player
- [NPC_IsAiming](NPC_IsAiming): Check if NPC is aiming
- [NPC_Shoot](NPC_Shoot): Make NPC shoot

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
