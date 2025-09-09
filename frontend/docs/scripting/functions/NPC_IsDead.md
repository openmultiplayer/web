---
title: NPC_IsDead
sidebar_label: NPC_IsDead
description: Checks if an NPC is dead.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is dead.

| Name   | Description                      |
| ------ | -------------------------------- |
| npcid  | The ID of the NPC to check.      |

## Returns

Returns `true` if the NPC is dead, `false` otherwise.

## Examples

```c
public OnNPCTakeDamage(npcid, damagerid, Float:damage, WEAPON:weapon, bodypart)
{
    if (NPC_IsDead(npcid))
    {
        printf("NPC %d has died!", npcid);
        return 1;
    }
    
    new const Float:health = NPC_GetHealth(npcid);
    printf("NPC %d took %.1f damage, health remaining: %.1f", npcid, damage, health);
    return 1;
}
```

## Notes

:::warning

- An NPC is considered dead when its health reaches 0.0 or below.
- Dead NPCs can be respawned using [NPC_Respawn](NPC_Respawn).

:::

## Related Functions

- [NPC_GetHealth](NPC_GetHealth): Gets the health of an NPC
- [NPC_SetHealth](NPC_SetHealth): Sets the health of an NPC
- [NPC_Respawn](NPC_Respawn): Respawns an NPC

## Related Callbacks

- [OnNPCDeath](OnNPCDeath): Called when an NPC dies
- [OnNPCTakeDamage](OnNPCTakeDamage): Called when an NPC takes damage