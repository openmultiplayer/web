---
title: NPC_Shoot
sidebar_label: NPC_Shoot
description: Makes an NPC fire a weapon shot.
tags: ["npc", "weapon", "shoot", "combat"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC fire a weapon shot.

| Name                | Description                                               |
| ------------------- | --------------------------------------------------------- |
| npcid               | The ID of the NPC                                         |
| weapon              | The weapon ID to use for shooting                         |
| hitId               | The ID of the target entity being shot                    |
| hitType             | The type of entity being hit (player, NPC, vehicle, etc.) |
| endPointX           | X coordinate of the bullet end point                      |
| endPointY           | Y coordinate of the bullet end point                      |
| endPointZ           | Z coordinate of the bullet end point                      |
| offsetX             | X offset from the hit point                               |
| offsetY             | Y offset from the hit point                               |
| offsetZ             | Z offset from the hit point                               |
| isHit               | Whether the shot actually hits the target                 |
| checkInBetweenFlags | Entity check flags (default: NPC_ENTITY_CHECK_ALL)        |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Sniper");
    NPC_Spawn(npcid);
    NPC_SetWeapon(npcid, WEAPON_SNIPER);

    // Shoot at position (100.0, 100.0, 10.0)
    NPC_Shoot(npcid, WEAPON_SNIPER, INVALID_PLAYER_ID, BULLET_HIT_TYPE_NONE,
             100.0, 100.0, 10.0, 0.0, 0.0, 0.0, false, NPC_ENTITY_CHECK_ALL);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attack", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new npcid = NPC_Create("Attacker");
        NPC_Spawn(npcid);
        NPC_SetWeapon(npcid, WEAPON_DEAGLE);

        // Shoot at player
        NPC_Shoot(npcid, WEAPON_DEAGLE, playerid, BULLET_HIT_TYPE_PLAYER,
                 x, y, z, 0.0, 0.0, 0.0, true, NPC_ENTITY_CHECK_ALL);
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC must have a weapon set with `NPC_SetWeapon` before shooting
- Shot effects (muzzle flash, sound) are automatically handled
- Use `isHit = false` for warning shots or suppression fire
- The `checkInBetweenFlags` parameter determines what entities block the shot

## Related Functions

- [NPC_SetWeapon](NPC_SetWeapon): Set NPC weapon
- [NPC_GetWeapon](NPC_GetWeapon): Get NPC current weapon
- [NPC_IsShooting](NPC_IsShooting): Check if NPC is currently shooting
- [NPC_AimAt](NPC_AimAt): Make NPC aim at position

## Related Callbacks

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Called when NPC fires weapon
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages another entity
