---
title: NPC_SetWeaponShootTime
sidebar_label: NPC_SetWeaponShootTime
description: Sets the shooting interval for an NPC's weapon.
tags: ["npc", "weapon", "shooting", "time"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the shooting interval for a specific weapon of an NPC.

| Name     | Description                            |
| -------- | -------------------------------------- |
| npcid    | The ID of the NPC                     |
| weaponid | The weapon ID to set shoot time for   |
| time     | The shooting interval in milliseconds  |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("RapidFire");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_M4, 500); // M4 with 500 ammo
    
    // Set rapid fire (100ms between shots)
    NPC_SetWeaponShootTime(npcid, 100);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rapidfire", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);
        
        // Set rapid fire for NPC 0
        NPC_SetWeaponShootTime(0, 50);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 has rapid fire enabled");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/slowfire", true))
    {
        // Set slow fire for NPC 0
        NPC_SetWeaponShootTime(0, 2000);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 has slow fire rate");
        return 1;
    }
    return 0;
}
```

## Notes

- Shoot time is measured in milliseconds between shots
- Lower values = faster firing rate
- Use NPC_GetWeaponShootTime to check current shoot time
- Affects weapon's rate of fire and combat effectiveness

## Related Functions

- [NPC_GetWeaponShootTime](NPC_GetWeaponShootTime): Get shoot time
- [NPC_IsShooting](NPC_IsShooting): Check if shooting
- [NPC_Shoot](NPC_Shoot): Make NPC shoot
- [NPC_GetWeapon](NPC_GetWeapon): Get current weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC shoots
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages someone
