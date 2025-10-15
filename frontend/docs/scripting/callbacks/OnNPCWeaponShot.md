---
title: OnNPCWeaponShot
sidebar_label: OnNPCWeaponShot
description: This callback is called when an NPC fires a weapon.
tags: ["npc", "weapon", "shooting"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when an NPC fires a weapon.

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| npcid    | The ID of the NPC that fired the weapon         |
| weaponid | The weapon ID that was fired                    |
| hittype  | The type of entity that was hit (if any)        |
| hitid    | The ID of the entity that was hit (if any)      |
| fX       | The X coordinate where the bullet hit           |
| fY       | The Y coordinate where the bullet hit           |
| fZ       | The Z coordinate where the bullet hit           |

## Returns

Return `false` to prevent the shot from being processed, or `true` to allow it.

## Examples

```c
public OnNPCWeaponShot(npcid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    printf("NPC %d fired weapon %d at %.2f, %.2f, %.2f", npcid, weaponid, fX, fY, fZ);
    
    switch(hittype)
    {
        case BULLET_HIT_TYPE_PLAYER:
        {
            printf("Hit player %d", hitid);
        }
        case BULLET_HIT_TYPE_VEHICLE:
        {
            printf("Hit vehicle %d", hitid);
        }
    }
    
    return true;
}
```

## Notes

- This callback is called for each shot fired by the NPC
- The `hittype` parameter indicates what was hit (none, player, vehicle, object, etc.)
- The `hitid` parameter contains the ID of the hit entity (player ID, vehicle ID, etc.)
- Hit coordinates show where the bullet impacted
- Returning `false` prevents the shot from being processed by the server

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_AimAt](../functions/NPC_AimAt): Make NPC aim at a position
- [NPC_AimAtPlayer](../functions/NPC_AimAtPlayer): Make NPC aim at a player
- [NPC_StopAim](../functions/NPC_StopAim): Stop NPC from aiming
- [NPC_SetWeapon](../functions/NPC_SetWeapon): Set NPC's weapon
- [NPC_GetAmmo](../functions/NPC_GetAmmo): Get NPC's ammo count

## Related Callbacks

- [OnNPCGiveDamage](OnNPCGiveDamage): Called when NPC gives damage to a player
- [OnPlayerWeaponShot](OnPlayerWeaponShot): Called when a player fires a weapon
