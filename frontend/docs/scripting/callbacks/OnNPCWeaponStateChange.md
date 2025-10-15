---
title: OnNPCWeaponStateChange
sidebar_label: OnNPCWeaponStateChange
description: This callback is called when an NPC's weapon state changes.
tags: ["npc", "weapon"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC's weapon state changes (e.g., reloading, running out of ammo, etc.).

| Name     | Description                           |
| -------- | ------------------------------------- |
| npcid    | The ID of the NPC                     |
| newstate | The new weapon state                  |
| oldstate | The previous weapon state             |

## Examples

```c
public OnNPCWeaponStateChange(npcid, newstate, oldstate)
{
    printf("NPC %d weapon state: %d -> %d", npcid, oldstate, newstate);
    
    if (newstate == WEAPONSTATE_NO_BULLETS)
    {
        // Give more ammo
        NPC_SetAmmo(npcid, 100);
    }
    
    return true;
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
