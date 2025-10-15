---
title: NPC_SetHealth
sidebar_label: NPC_SetHealth
description: Sets the health value of an NPC.
tags: ["npc", "health"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the health value of an NPC.

| Name   | Description                 |
| ------ | --------------------------- |
| npcid  | The ID of the NPC          |
| health | The health value to set    |

## Returns

Returns `true` if the health was set successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("HealthBot");
    NPC_Spawn(npcid);
    
    // Set NPC health to 75.5
    NPC_SetHealth(npcid, 75.5);
    
    new Float:health = NPC_GetHealth(npcid);
    printf("NPC health: %.1f", health);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/heal", true))
    {
        new npcid = NPC_Create("Patient");
        NPC_Spawn(npcid);
        
        NPC_SetHealth(npcid, 100.0); // Full health
        SendClientMessage(playerid, 0x00FF00FF, "NPC healed!");
        return 1;
    }
    return 0;
}
```

## Notes

- Health values typically range from 0.0 to 100.0, but can be set higher
- Setting health to 0.0 will kill the NPC
- NPCs spawn with 100.0 health by default
- You can set health above 100.0 for enhanced NPCs
- Use floating-point values for precise health control

## Related Functions

- [NPC_GetHealth](NPC_GetHealth): Get NPC health
- [NPC_SetArmour](NPC_SetArmour): Set NPC armour
- [NPC_GetArmour](NPC_GetArmour): Get NPC armour  
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead
- [NPC_SetInvulnerable](NPC_SetInvulnerable): Make NPC invulnerable

## Related Callbacks

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when NPC takes damage
- [OnNPCDeath](../callbacks/OnNPCDeath): Called when NPC dies