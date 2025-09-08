---
title: NPC_IsAimingAtPlayer
sidebar_label: NPC_IsAimingAtPlayer
description: Checks if an NPC is aiming at a specific player.
tags: ["npc", "weapon", "aiming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is aiming at a specific player.

| Name     | Description                    |
| -------- | ------------------------------ |
| npcid    | The ID of the NPC             |
| playerid | The ID of the player to check |

## Returns

Returns `true` if the NPC is aiming at the specified player, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Bodyguard");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 300);
    
    printf("Bodyguard NPC %d created and armed", npcid);
    
    return 1;
}

public OnPlayerConnect(playerid)
{
    // Make NPC aim at new player
    NPC_AimAtPlayer(0, playerid, false, 0, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
    
    new msg[64];
    format(msg, sizeof(msg), "Bodyguard is now watching player %d", playerid);
    print(msg);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/amitargeted", true))
    {
        if (NPC_IsAimingAtPlayer(0, playerid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "WARNING: NPC 0 is aiming at you!");
            
            // Show weapon info
            new weapon = NPC_GetWeapon(0);
            new ammo = NPC_GetAmmo(0);
            
            new msg[128];
            format(msg, sizeof(msg), "NPC weapon: %d, Ammo: %d", weapon, ammo);
            SendClientMessage(playerid, 0xFFFF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "You are safe - NPC 0 is not targeting you");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/stoptargeting", true))
    {
        // Stop NPC from aiming
        NPC_StopAim(0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 stopped aiming");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/hostile", true))
    {
        // Make NPC hostile towards player
        NPC_AimAtPlayer(0, playerid, true, 500, true, 0.0, 0.0, 0.8, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is now hostile towards you!");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true only when the NPC is specifically targeting the given player
- Use this to check if a player is being targeted by an NPC
- The NPC must be using NPC_AimAtPlayer for this to return true
- Useful for threat detection and player safety systems

## Related Functions

- [NPC_AimAtPlayer](NPC_AimAtPlayer): Make NPC aim at player
- [NPC_IsAiming](NPC_IsAiming): Check if NPC is aiming
- [NPC_StopAim](NPC_StopAim): Stop NPC from aiming
- [NPC_AimAt](NPC_AimAt): Make NPC aim at position

## Related Callbacks

- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC fires weapon