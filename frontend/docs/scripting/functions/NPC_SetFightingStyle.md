---
title: NPC_SetFightingStyle
sidebar_label: NPC_SetFightingStyle
description: Sets an NPC's fighting style for melee combat.
tags: ["npc", "combat", "fighting", "melee"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's fighting style for melee combat.

| Name         | Description                    |
| ------------ | ------------------------------ |
| npcid        | The ID of the NPC             |
| fightingstyle| The fighting style ID         |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Fighter");
    NPC_Spawn(npcid);
    
    // Set boxing fighting style
    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setboxing", true))
    {
        // Set NPC 0 to boxing style
        NPC_SetFightingStyle(0, FIGHT_STYLE_BOXING);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 now uses boxing style");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/randomstyle", true))
    {
        new styles[] = {
            FIGHT_STYLE_NORMAL,
            FIGHT_STYLE_BOXING,
            FIGHT_STYLE_KUNGFU,
            FIGHT_STYLE_KNEEHEAD,
            FIGHT_STYLE_GRABKICK,
            FIGHT_STYLE_ELBOW
        };
        
        new style = styles[random(sizeof(styles))];
        NPC_SetFightingStyle(0, style);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 random fighting style set");
        }
        
        SendClientMessage(playerid, 0x00FF00FF, "Randomized NPC fighting styles");
        return 1;
    }
    return 0;
}
```

## Notes

- Fighting styles affect melee attack animations and damage
- Common styles: NORMAL, BOXING, KUNGFU, KNEEHEAD, GRABKICK, ELBOW
- Use NPC_GetFightingStyle to check current style
- Style affects both attack animations and combat effectiveness

## Related Functions

- [NPC_GetFightingStyle](NPC_GetFightingStyle): Get fighting style
- [NPC_MeleeAttack](NPC_MeleeAttack): Make NPC attack
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Check if attacking
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): Stop attacking

## Related Callbacks

- [OnNPCGiveDamage](OnNPCGiveDamage): Called when NPC damages someone
