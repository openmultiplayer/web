---
title: NPC_GetHealth
sidebar_label: NPC_GetHealth
description: Gets the health value of an NPC.
tags: ["npc", "health"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the health value of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the NPC's health as a float value.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("HealthBot");
    NPC_Spawn(npcid);
    
    NPC_SetHealth(npcid, 75.5);
    
    new Float:health = NPC_GetHealth(npcid);
    printf("NPC %d has %.1f health", npcid, health); // Output: 75.5
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkhealth", true))
    {
        new Float:health = NPC_GetHealth(0);
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 health: %.1f", health);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Health values typically range from 0.0 to 100.0
- An NPC with 0.0 health is considered dead
- Health can be set to values above 100.0 for enhanced NPCs
- Use this function to monitor NPC status in combat scenarios

## Related Functions

- [NPC_SetHealth](NPC_SetHealth): Set NPC health
- [NPC_GetArmour](NPC_GetArmour): Get NPC armour
- [NPC_SetArmour](NPC_SetArmour): Set NPC armour
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead

## Related Callbacks

- [OnNPCTakeDamage](OnNPCTakeDamage): Called when NPC takes damage
- [OnNPCDeath](OnNPCDeath): Called when NPC dies
