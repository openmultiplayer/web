---
title: NPC_GetWeaponState
sidebar_label: NPC_GetWeaponState
description: Gets the weapon state of an NPC.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the weapon state of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the weapon state ID.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("CombatBot");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 30);
    
    // Start monitoring weapon state
    SetTimer("MonitorWeaponState", 1000, true);
    
    return 1;
}

forward MonitorWeaponState();
public MonitorWeaponState()
{
    new weaponState = NPC_GetWeaponState(0);
    
    new stateName[32];
    switch(weaponState)
    {
        case WEAPONSTATE_NO_BULLETS: stateName = "No Bullets";
        case WEAPONSTATE_LAST_BULLET: stateName = "Last Bullet";
        case WEAPONSTATE_MORE_BULLETS: stateName = "Has Bullets";
        case WEAPONSTATE_RELOADING: stateName = "Reloading";
        default: stateName = "Unknown";
    }
    
    printf("NPC 0 weapon state: %s (%d)", stateName, weaponState);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/weaponstate", true))
    {
        new weaponState = NPC_GetWeaponState(0);
        new weapon = NPC_GetWeapon(0);
        new ammo = NPC_GetAmmoInClip(0);
        
        new msg[128];
        format(msg, sizeof(msg), "NPC 0: Weapon %d, State %d, Ammo in clip: %d", 
            weapon, weaponState, ammo);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Weapon states include reloading, shooting, out of ammo, etc.
- Use this to check the current status of the NPC's weapon
- State values correspond to PlayerWeaponState constants
- Useful for AI decision making and combat monitoring

## Related Functions

- [NPC_GetWeapon](NPC_GetWeapon): Get NPC's current weapon
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading
- [NPC_IsShooting](NPC_IsShooting): Check if NPC is shooting
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get ammo in clip

## Related Callbacks

- [OnNPCWeaponStateChange](OnNPCWeaponStateChange): Called when weapon state changes