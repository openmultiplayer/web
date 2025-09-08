---
title: NPC_MeleeAttack
sidebar_label: NPC_MeleeAttack
description: Makes an NPC perform a melee attack.
tags: ["npc", "combat", "melee"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC perform a melee attack for a specified duration.

| Name            | Description                                      |
| --------------- | ------------------------------------------------ |
| npcid           | The ID of the NPC                               |
| time            | The duration of the attack                       |
| secondaryAttack | Whether to use secondary attack (default: false)|

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("CombatTrainer");
    NPC_Spawn(npcid);
    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);
    
    // Set up combat training routine
    SetTimer("CombatTraining", 5000, true);
    
    return 1;
}

forward CombatTraining();
public CombatTraining()
{
    if (NPC_IsValid(0) && !NPC_IsDead(0))
    {
        // Alternate between primary and secondary attacks
        new bool:useSecondary = (gettime() % 2 == 0);
        NPC_MeleeAttack(0, 1200, useSecondary);
        
        printf("NPC 0 performing %s melee attack", 
            useSecondary ? "secondary" : "primary");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/punch", true))
    {
        // Make NPC perform a quick punch
        NPC_MeleeAttack(0, 800, false);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 throws a punch!");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/combo", true))
    {
        // Execute a combo attack sequence
        NPC_MeleeAttack(0, 500, false);  // Quick jab
        
        SetTimerEx("ComboStep2", 600, false, "i", playerid);
        SetTimerEx("ComboStep3", 1300, false, "i", playerid);
        
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 executing combo attack!");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/spar", true))
    {
        // Start sparring mode with different fighting styles
        new styles[] = {
            FIGHT_STYLE_BOXING,
            FIGHT_STYLE_KUNGFU,
            FIGHT_STYLE_KNEEHEAD,
            FIGHT_STYLE_GRABKICK
        };
        
        new randomStyle = styles[random(sizeof(styles))];
        NPC_SetFightingStyle(0, randomStyle);
        NPC_MeleeAttack(0, 2000, true);  // Long secondary attack
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 sparring with fighting style %d", randomStyle);
        SendClientMessage(playerid, 0xFFFF00FF, msg);
        return 1;
    }
    return 0;
}

forward ComboStep2(playerid);
public ComboStep2(playerid)
{
    NPC_MeleeAttack(0, 700, true);  // Secondary attack
    SendClientMessage(playerid, 0xFF8000FF, "Combo: Step 2!");
}

forward ComboStep3(playerid);
public ComboStep3(playerid)
{
    NPC_MeleeAttack(0, 900, false);  // Finishing move
    SendClientMessage(playerid, 0xFF4000FF, "Combo: Finishing move!");
}
```

## Notes

- The NPC must have a melee weapon or use fists for the attack
- Duration affects how long the attack animation plays
- Secondary attacks often have different animations and effects
- Use fighting styles to change attack animations and effectiveness

## Related Functions

- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): Stop melee attacking
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Check if attacking
- [NPC_SetFightingStyle](NPC_SetFightingStyle): Set fighting style
- [NPC_GetFightingStyle](NPC_GetFightingStyle): Get fighting style

## Related Callbacks

- [OnNPCGiveDamage](OnNPCGiveDamage): Called when NPC damages player
- [OnNPCMeleeAttack](OnNPCMeleeAttack): Called when NPC attacks