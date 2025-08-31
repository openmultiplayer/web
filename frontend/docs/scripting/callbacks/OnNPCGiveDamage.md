---
title: OnNPCGiveDamage
sidebar_label: OnNPCGiveDamage
description: This callback is called when a NPC gives damage to a player.
tags: ["npc", "damage"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

This callback is called when a NPC gives damage to a player.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| npcid    | The ID of the NPC that gave the damage        |
| playerid | The ID of the player that received the damage |
| amount   | The amount of damage that was given            |
| weapon   | The weapon ID used to give the damage         |
| bodypart | The [body part](../resources/bodyparts) that was hit   |

## Returns

Return `false` to prevent the damage from being applied, or `true` to allow it.

## Examples

```c
public OnNPCGiveDamage(npcid, playerid, Float:amount, weapon, bodypart)
{
    printf("NPC %d gave %.2f damage to player %d", npcid, amount, playerid);
    
    // Prevent NPCs from killing admins
    if (IsPlayerAdmin(playerid))
    {
        return false; // Block the damage
    }
    
    return true; // Allow the damage
}
```

## Notes

- This callback is called before the damage is actually applied to the player
- Returning `false` will prevent the damage from being applied
- The `bodypart` parameter uses the same values as `OnPlayerTakeDamage`

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_AimAt](NPC_AimAt): Make NPC aim at a position
- [NPC_AimAtPlayer](NPC_AimAtPlayer): Make NPC aim at a player
- [NPC_Shoot](NPC_Shoot): Make NPC shoot
- [NPC_SetWeapon](NPC_SetWeapon): Set NPC's weapon

## Related Callbacks

- [OnNPCTakeDamage](OnNPCTakeDamage): Called when a NPC takes damage
- [OnPlayerTakeDamage](OnPlayerTakeDamage): Called when a player takes damage
- [OnPlayerGiveDamage](OnPlayerGiveDamage): Called when a player gives damage
