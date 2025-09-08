---
title: NPC_EnableReloading
sidebar_label: NPC_EnableReloading
description: Enables or disables automatic reloading for an NPC.
tags: ["npc", "weapon", "reload"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Enables or disables automatic reloading for an NPC.

| Name   | Description                                        |
| ------ | -------------------------------------------------- |
| npcid  | The ID of the NPC                                 |
| enable | `true` to enable reloading, `false` to disable   |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("GuardBot");
    NPC_Spawn(npcid);
    
    // Give the NPC a weapon
    NPC_SetWeapon(npcid, WEAPON_M4);
    NPC_SetAmmo(npcid, 500);
    
    // Enable automatic reloading
    NPC_EnableReloading(npcid, true);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/togglereload", true))
    {
        new npcid = 0; // Assume first NPC
        if (NPC_IsValid(npcid))
        {
            new bool:reloadEnabled = NPC_IsReloadEnabled(npcid);
            NPC_EnableReloading(npcid, !reloadEnabled);
            
            new msg[64];
            format(msg, sizeof(msg), "NPC reloading: %s", !reloadEnabled ? "Enabled" : "Disabled");
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        return 1;
    }
    return 0;
}
```

## Notes

- When enabled, the NPC will automatically reload when its clip is empty
- When disabled, the NPC will not reload and will eventually run out of ammo in clip
- The reload time can be customized with `NPC_SetWeaponReloadTime`
- This setting affects the realism of NPC combat behavior

## Related Functions

- [NPC_IsReloadEnabled](NPC_IsReloadEnabled): Check if reloading is enabled
- [NPC_IsReloading](NPC_IsReloading): Check if NPC is currently reloading
- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): Set weapon reload time
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Get weapon reload time

## Related Callbacks

- [OnNPCWeaponStateChange](OnNPCWeaponStateChange): Called when NPC weapon state changes
