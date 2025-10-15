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
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_M4, 100); // M4 with 100 ammo
    
    // Make NPC aim and shoot at a position
    NPC_AimAt(npcid, 2000.0, 1500.0, 15.0, true, 500);
    
    SetTimer("CheckShooting", 500, true);
    
    return 1;
}

public CheckShooting()
{
    if (NPC_IsShooting(0))
    {
        printf("NPC 0 is currently shooting");
    }
    else
    {
        printf("NPC 0 is not shooting");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkshoot", true))
    {
        if (NPC_IsShooting(0))
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is shooting");
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is not shooting");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true only during the actual shooting action
- NPCs must have a weapon and ammo to shoot
- Use this to detect active combat situations

## Related Functions

- [NPC_Shoot](NPC_Shoot): Make NPC shoot
- [NPC_AimAt](NPC_AimAt): Make NPC aim and shoot
- [NPC_StopShoot](NPC_StopShoot): Stop NPC shooting
- [NPC_IsAiming](NPC_IsAiming): Check if aiming

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages player
