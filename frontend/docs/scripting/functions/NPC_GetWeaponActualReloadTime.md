---
title: NPC_GetWeaponActualReloadTime
sidebar_label: NPC_GetWeaponActualReloadTime
description: Gets the actual (default) reload time for an NPC's weapon.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the actual (default) reload time for an NPC's weapon from the game data.

| Name      | Description              |
| --------- | ------------------------ |
| npcid     | The ID of the NPC        |
| weaponid  | The weapon ID to check   |

## Returns

Returns the default reload time in milliseconds, or -1 on error.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Reloader");
    NPC_Spawn(npcid);
    
    NPC_SetWeapon(npcid, WEAPON_AK47);
    
    new actualReloadTime = NPC_GetWeaponActualReloadTime(npcid, WEAPON_AK47);
    new customReloadTime = NPC_GetWeaponReloadTime(npcid, WEAPON_AK47);
    
    printf("NPC %d AK47 - Actual reload: %dms, Custom: %dms", 
        npcid, actualReloadTime, customReloadTime);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/defaulttime", true))
    {
        new actualTime = NPC_GetWeaponActualReloadTime(0, WEAPON_AK47);
        if (actualTime != -1)
        {
            new msg[64];
            format(msg, sizeof(msg), "AK47 default reload: %dms", actualTime);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the original game reload time for the weapon
- This is different from custom reload times set with `NPC_SetWeaponReloadTime`
- Use this to compare against custom settings or reset to defaults

## Related Functions

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): Set custom reload time
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Get current reload time
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when weapon state changes