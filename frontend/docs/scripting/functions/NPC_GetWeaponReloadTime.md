---
title: NPC_GetWeaponReloadTime
sidebar_label: NPC_GetWeaponReloadTime
description: Gets the reload time of an NPC's weapon.
tags: ["npc", "weapon", "reload"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the reload time of an NPC's weapon.

| Name     | Description                          |
| -------- | ------------------------------------ |
| npcid    | The ID of the NPC                    |
| weaponid | The weapon ID to get reload time for |

## Returns

Returns the reload time in milliseconds for the specified weapon.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("WeaponTester");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 300);

    // Set custom reload time
    NPC_SetWeaponReloadTime(npcid, WEAPON_AK47, 1500);

    // Check the reload time
    new reloadTime = NPC_GetWeaponReloadTime(npcid, WEAPON_AK47);
    printf("NPC %d AK47 reload time set to: %dms", npcid, reloadTime);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreloadtime", true))
    {
        new weapon = NPC_GetWeapon(0);
        if (weapon > 0)
        {
            new reloadTime = NPC_GetWeaponReloadTime(0, weapon);
            new actualTime = NPC_GetWeaponActualReloadTime(0, weapon);

            new msg[128];
            format(msg, sizeof(msg), "NPC 0 weapon %d: Custom reload %dms, Default %dms",
                weapon, reloadTime, actualTime);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 has no weapon");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the current custom reload time setting
- Use NPC_GetWeaponActualReloadTime to get the default game reload time
- Reload time affects how long the NPC takes to reload the weapon
- Custom reload times override default weapon reload speeds

## Related Functions

- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): Set reload time
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): Get default reload time
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is reloading
- [NPC_EnableReloading](NPC_EnableReloading): Enable/disable reloading

## Related Callbacks

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Called when weapon state changes
