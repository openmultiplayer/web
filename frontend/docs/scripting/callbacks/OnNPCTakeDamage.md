---
title: OnNPCTakeDamage
sidebar_label: OnNPCTakeDamage
description: This callback is called when a NPC takes damage.
tags: ["npc", "damage"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

**## Description**

This callback is called when a NPC takes damage from a player or another NPC.

| Name       | Description                                      |
| ---------- | ------------------------------------------------ |
| npcid      | The ID of the NPC that took damage              |
| issuerid   | The ID of the player/NPC that caused the damage |
| amount     | The amount of damage that was taken             |
| weapon     | The weapon ID used to cause the damage          |
| bodypart | The [body part](../resources/bodyparts) that was hit   |

**## Returns**

Return `false` to prevent the damage from being applied, or `true` to allow it.

**## Examples**

```c
public OnNPCTakeDamage(npcid, issuerid, Float:amount, weapon, bodypart)
{
    printf("NPC %d took %.2f damage from %d", npcid, amount, issuerid);
    
    // Make NPC aggressive when attacked
    if (issuerid != INVALID_PLAYER_ID && !IsPlayerNPC(issuerid))
    {
        NPC_AimAtPlayer(npcid, issuerid, true, 100, true);
    }
    
    return true;
}
```

**## Notes**

- This callback is called before the damage is actually applied to the NPC
- Returning `false` will prevent the damage from being applied
- The `issuerid` parameter will be `INVALID_PLAYER_ID` if damage is not caused by player
- Body parts use the same constants as `OnPlayerTakeDamage`

**## Related Functions**

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_GetHealth](NPC_GetHealth): Get NPC's current health
- [NPC_SetHealth](NPC_SetHealth): Set NPC's health
- [NPC_GetArmour](NPC_GetArmour): Get NPC's armor
- [NPC_SetArmour](NPC_SetArmour): Set NPC's armor

**## Related Callbacks**

- [OnNPCGiveDamage](OnNPCGiveDamage): Called when a NPC gives damage to a player
- [OnNPCDeath](OnNPCDeath): Called when a NPC dies
- [OnPlayerTakeDamage](OnPlayerTakeDamage): Called when a player takes damage
