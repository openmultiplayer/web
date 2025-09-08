---
title: NPC_SetWeaponReloadTime
sidebar_label: NPC_SetWeaponReloadTime
description: Sets the reload time for an NPC's weapon.
tags: ["npc", "weapon", "reload", "time"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the reload time for a specific weapon of an NPC.

| Name       | Description                            |
| ---------- | -------------------------------------- |
| npcid      | The ID of the NPC                     |
| weaponid   | The weapon ID to set reload time for  |
| time       | The reload time in milliseconds        |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("QuickReloader");
    NPC_Spawn(npcid);
    NPC_GiveWeapon(npcid, WEAPON_M4, 200); // M4 with 200 ammo
    
    // Set fast reload (500ms)
    NPC_SetWeaponReloadTime(npcid, 500);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fastreload", true))
    {
        // Set fast reload for NPC 0
        NPC_SetWeaponReloadTime(0, 100);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 has lightning-fast reload");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/slowreload", true))
    {
        // Set slow reload for NPC 0
        NPC_SetWeaponReloadTime(0, 5000);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 has very slow reload");
        return 1;
    }
    return 0;
}
```

## Notes

- Reload time is measured in milliseconds
- Lower values = faster reloading
- Use NPC_GetWeaponReloadTime to check current reload time
- Affects combat effectiveness and firing rate

## Related Functions

- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Get reload time
- [NPC_GetWeaponActualReloadTime](NPC_GetWeaponActualReloadTime): Get actual reload time
- [NPC_IsReloading](NPC_IsReloading): Check if reloading
- [NPC_EnableReloading](NPC_EnableReloading): Enable/disable reloading

## Related Callbacks

- [OnNPCReload](OnNPCReload): Called when NPC reloads
- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC shoots
