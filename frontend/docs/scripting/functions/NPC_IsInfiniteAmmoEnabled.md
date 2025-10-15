---
title: NPC_IsInfiniteAmmoEnabled
sidebar_label: NPC_IsInfiniteAmmoEnabled
description: Checks if infinite ammo is enabled for an NPC.
tags: ["npc", "weapon", "ammo"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if infinite ammo is enabled for an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if infinite ammo is enabled, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Soldier");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_AK47);
    NPC_EnableInfiniteAmmo(npcid, true);
    
    if (NPC_IsInfiniteAmmoEnabled(npcid))
    {
        print("NPC has infinite ammo enabled");
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinfinite", true))
    {
        new bool:infiniteAmmo = NPC_IsInfiniteAmmoEnabled(0);
        new ammo = NPC_GetAmmo(0);
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0: %d ammo, Infinite: %s", ammo, infiniteAmmo ? "Yes" : "No");
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Infinite ammo prevents the NPC from running out of ammunition
- The ammo count may still display as decreasing but weapon functionality remains
- Useful for NPCs that need continuous combat capability
- Can be toggled with NPC_EnableInfiniteAmmo

## Related Functions

- [NPC_EnableInfiniteAmmo](NPC_EnableInfiniteAmmo): Enable/disable infinite ammo
- [NPC_GetAmmo](NPC_GetAmmo): Get NPC ammunition
- [NPC_SetAmmo](NPC_SetAmmo): Set NPC ammunition
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC weapon

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires a weapon
