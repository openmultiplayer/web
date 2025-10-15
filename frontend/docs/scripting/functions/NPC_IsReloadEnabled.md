---
title: NPC_IsReloadEnabled
sidebar_label: NPC_IsReloadEnabled
description: Checks if automatic reloading is enabled for an NPC.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if automatic reloading is enabled for an NPC.

| Name  | Description           |
| ----- | --------------------- |
| npcid | The ID of the NPC     |

## Returns

Returns `true` if auto-reload is enabled, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Gunner");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_M4); // M4
    NPC_SetAmmo(npcid, 500);
    
    // Enable auto-reload
    NPC_EnableReloading(npcid, true);
    
    // Check if enabled
    if (NPC_IsReloadEnabled(npcid))
    {
        printf("Auto-reload enabled for NPC %d", npcid);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreload", true))
    {
        if (NPC_IsReloadEnabled(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 auto-reload is enabled");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 auto-reload is disabled");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Auto-reload makes NPCs automatically reload when their clip is empty
- NPCs without auto-reload will stop shooting when their clip runs out
- This only affects clip ammunition, not total ammunition
- Use `NPC_EnableReloading` to change the reload setting

## Related Functions

- [NPC_EnableReloading](NPC_EnableReloading): Enable/disable auto-reload
- [NPC_IsReloading](NPC_IsReloading): Check if currently reloading
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Get clip ammunition
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Set clip ammunition

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires