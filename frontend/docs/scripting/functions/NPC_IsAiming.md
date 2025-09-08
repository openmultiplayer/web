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
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_SNIPER);
    NPC_SetAmmo(npcid, 50);
    
    // Make NPC aim at a distant target
    NPC_AimAt(npcid, 2000.0, 1500.0, 20.0, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);
    
    // Check aiming status after 2 seconds
    SetTimerEx("CheckAimingStatus", 2000, false, "i", npcid);
    
    return 1;
}

forward CheckAimingStatus(npcid);
public CheckAimingStatus(npcid)
{
    if (NPC_IsAiming(npcid))
    {
        printf("NPC %d is successfully aiming at target", npcid);
    }
    else
    {
        printf("NPC %d is not aiming", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkaim", true))
    {
        if (NPC_IsAiming(0))
        {
            new weapon = NPC_GetWeapon(0);
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 is aiming with weapon %d", weapon);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is not aiming");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/aimatme", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        // Make NPC 0 aim at player
        NPC_AimAt(0, x, y, z + 1.0, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);
        
        SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is now aiming at you!");
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

- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC fires weapon