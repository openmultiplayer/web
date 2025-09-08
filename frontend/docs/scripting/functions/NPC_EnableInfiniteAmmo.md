---
title: NPC_EnableInfiniteAmmo
sidebar_label: NPC_EnableInfiniteAmmo
description: Enables or disables infinite ammo for an NPC.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Enables or disables infinite ammo for an NPC.

| Name   | Description                                    |
| ------ | ---------------------------------------------- |
| npcid  | The ID of the NPC                             |
| enable | `true` to enable infinite ammo, `false` to disable |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("ShooterBot");
    NPC_Spawn(npcid);
    
    // Give the NPC a weapon
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_SetAmmo(npcid, 100); // Give 100 ammo
    // Enable infinite ammo so it never runs out
    NPC_EnableInfiniteAmmo(npcid, true);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/togglenpcammo", true))
    {
        new npcid = 0; // Assume first NPC
        if (NPC_IsValid(npcid))
        {
            new bool:infinite = NPC_IsInfiniteAmmoEnabled(npcid);
            NPC_EnableInfiniteAmmo(npcid, !infinite);
            
            new msg[64];
            format(msg, sizeof(msg), "NPC infinite ammo: %s", !infinite ? "Enabled" : "Disabled");
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        return 1;
    }
    return 0;
}
```

## Notes

- When enabled, the NPC will never run out of ammunition
- This affects all weapons the NPC uses
- The ammo count display may still decrease but weapon functionality remains
- Useful for security NPCs or continuous combat scenarios

## Related Functions

- [NPC_IsInfiniteAmmoEnabled](NPC_IsInfiniteAmmoEnabled): Check if infinite ammo is enabled
- [NPC_SetAmmo](NPC_SetAmmo): Set NPC ammunition
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC ammunition
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC fires a weapon
