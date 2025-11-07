---
title: OnNPCWeaponStateChange
sidebar_label: OnNPCWeaponStateChange
description: This callback is called when an NPC's weapon state changes.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC's weapon state changes (e.g., reloading, running out of ammo, etc.).

| Name     | Description               |
| -------- | ------------------------- |
| npcid    | The ID of the NPC         |
| newstate | The new weapon state      |
| oldstate | The previous weapon state |

## Examples

```c
public OnNPCWeaponStateChange(npcid, newState, oldState)
{
    static weaponStates[5][64] = {
        "Unknown",
        "No ammo remaining",
        "Single bullet left",
        "More than one bullet left",
        "Reloading"
    };

    // Only notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d weapon state: %s -> %s",
                npcid, weaponStates[oldState], weaponStates[newState]);
        }
    }
    return 1;
}
```

## Notes

- This callback is triggered automatically based on NPC's ammo count and weapon actions
- Weapon states include: no bullets, reloading, more bullets, last bullet, unknown

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_GetWeaponState](../functions/NPC_GetWeaponState): Get NPC's current weapon state
- [NPC_GetAmmo](../functions/NPC_GetAmmo): Get NPC's ammo count
- [NPC_SetAmmo](../functions/NPC_SetAmmo): Set NPC's ammo count
- [NPC_GetAmmoInClip](../functions/NPC_GetAmmoInClip): Get ammo in current clip
- [NPC_EnableReloading](../functions/NPC_EnableReloading): Enable/disable automatic reloading

## Related Callbacks

- [OnNPCWeaponShot](OnNPCWeaponShot): Called when NPC fires a weapon
