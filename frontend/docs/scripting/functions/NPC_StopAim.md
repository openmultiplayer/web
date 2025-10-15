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
public OnGameModeInit()
{
    new npcid = NPC_Create("Marksman");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_SNIPER);
    NPC_SetAmmo(npcid, 50); // Give 50 ammo

    // Start aiming at target location
    NPC_AimAt(npcid, 2000.0, 1500.0, 20.0, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);

    // Auto-cease fire after 15 seconds
    SetTimerEx("CeaseFire", 15000, false, "i", npcid);

    return 1;
}

forward CeaseFire(npcid);
public CeaseFire(npcid)
{
    if (NPC_IsAiming(npcid))
    {
        NPC_StopAim(npcid);
        printf("NPC %d ceased fire and stopped aiming", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ceasefire", true))
    {
        if (NPC_IsAiming(0))
        {
            NPC_StopAim(0);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 ceased fire");
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is not aiming");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/standdown", true))
    {
        // Complete standdown procedure
        if (NPC_IsShooting(0))
        {
            NPC_StopShoot(0);
        }

        if (NPC_IsAiming(0))
        {
            NPC_StopAim(0);
        }

        // Return to passive stance
        NPC_SetWeapon(0, WEAPON_FIST);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 standing down from combat");
        return 1;
    }

    if (!strcmp(cmdtext, "/combatmode", true))
    {
        // Toggle between combat and peaceful mode
        if (NPC_IsAiming(0))
        {
            // Switch to peaceful
            NPC_StopAim(0);
            NPC_SetWeapon(0, WEAPON_FIST);
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 switched to peaceful mode");
        }
        else
        {
            // Switch to combat
            NPC_SetWeapon(0, WEAPON_M4);
            NPC_SetAmmo(0, 300); // Give 300 ammo

            new Float:px, Float:py, Float:pz;
            GetPlayerPos(playerid, px, py, pz);
            NPC_AimAt(0, px, py, pz + 1.0, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);

            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 switched to combat mode");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- This stops both aiming and shooting if the NPC was doing both
- The NPC will return to its normal stance after stopping aim
- Use this to control NPC combat behavior
- Has no effect if the NPC is not currently aiming

## Related Functions

- [NPC_AimAt](NPC_AimAt): Make NPC aim at position
- [NPC_AimAtPlayer](NPC_AimAtPlayer): Make NPC aim at player
- [NPC_IsAiming](NPC_IsAiming): Check if NPC is aiming
- [NPC_Shoot](NPC_Shoot): Make NPC shoot

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
