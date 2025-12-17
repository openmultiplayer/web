---
title: OnNPCTakeDamage
sidebar_label: OnNPCTakeDamage
description: This callback is called when an NPC takes damage.
tags: ["npc", "damage"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

This callback is called when an NPC takes damage from a player or another NPC.

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| npcid     | The ID of the NPC that took damage                   |
| damagerid | The ID of the player/NPC that caused the damage      |
| damage    | The amount of damage that was taken                  |
| weaponid  | The weapon ID used to cause the damage               |
| bodypart  | The [body part](../resources/bodyparts) that was hit |

## Returns

Return `false` to prevent the damage from being applied, or `true` to allow it.

## Examples

```c
public OnNPCTakeDamage(npcid, damagerid, Float:damage, WEAPON:weaponid, bodypart)
{
    // Only notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            if (damagerid == INVALID_PLAYER_ID)
            {
                SendClientMessage(playerid, 0xFF8800FF, "NPC %d took %.1f damage (weapon: %d, bodypart: %d)",
                    npcid, damage, _:weaponid, bodypart);
            }
            else
            {
                SendClientMessage(playerid, 0xFF8800FF, "NPC %d took %.1f damage from player %d (weapon: %d, bodypart: %d)",
                    npcid, damage, damagerid, _:weaponid, bodypart);
            }
        }
    }
    return 1;
}
```

## Notes

- This callback is called before the damage is actually applied to the NPC
- Returning `false` will prevent the damage from being applied
- The `damagerid` parameter will be `INVALID_PLAYER_ID` if damage is not caused by player
- Body parts use the same constants as `OnPlayerTakeDamage`

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_GetHealth](../functions/NPC_GetHealth): Get NPC's current health
- [NPC_SetHealth](../functions/NPC_SetHealth): Set NPC's health
- [NPC_GetArmour](../functions/NPC_GetArmour): Get NPC's armor
- [NPC_SetArmour](../functions/NPC_SetArmour): Set NPC's armor

## Related Callbacks

- [OnNPCGiveDamage](OnNPCGiveDamage): Called when an NPC gives damage to a player
- [OnNPCDeath](OnNPCDeath): Called when an NPC dies
- [OnPlayerTakeDamage](OnPlayerTakeDamage): Called when a player takes damage
