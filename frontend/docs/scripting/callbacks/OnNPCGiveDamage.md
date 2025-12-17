---
title: OnNPCGiveDamage
sidebar_label: OnNPCGiveDamage
description: This callback is called when an NPC gives damage to a player.
tags: ["npc", "damage"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

This callback is called when an NPC gives damage to a player.

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| npcid     | The ID of the NPC that gave the damage               |
| damagedid | The ID of the player that received the damage        |
| damage    | The amount of damage that was given                  |
| weaponid  | The weapon ID used to give the damage                |
| bodypart  | The [body part](../resources/bodyparts) that was hit |

## Returns

Return `false` to prevent the damage from being applied, or `true` to allow it.

## Examples

```c
public OnNPCGiveDamage(npcid, damagedid, Float:damage, WEAPON:weaponid, bodypart)
{
    // Only notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFF8800FF, "NPC %d dealt %.1f damage to player %d (weapon: %d, bodypart: %d)",
                npcid, damage, damagedid, _:weaponid, bodypart);
        }
    }
    return 1;
}
```

## Notes

- This callback is called before the damage is actually applied to the player
- Returning `false` will prevent the damage from being applied
- The `bodypart` parameter uses the same values as `OnPlayerTakeDamage`

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_AimAt](../functions/NPC_AimAt): Make NPC aim at a position
- [NPC_AimAtPlayer](../functions/NPC_AimAtPlayer): Make NPC aim at a player
- [NPC_Shoot](../functions/NPC_Shoot): Make NPC shoot
- [NPC_SetWeapon](../functions/NPC_SetWeapon): Set NPC's weapon

## Related Callbacks

- [OnNPCTakeDamage](OnNPCTakeDamage): Called when an NPC takes damage
- [OnPlayerTakeDamage](OnPlayerTakeDamage): Called when a player takes damage
- [OnPlayerGiveDamage](OnPlayerGiveDamage): Called when a player gives damage
