---
title: NPC_StopMeleeAttack
sidebar_label: NPC_StopMeleeAttack
description: Stops an NPC from performing melee attacks.
tags: ["npc", "melee", "fighting"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Stops an NPC from performing melee attacks.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Fighter");
    NPC_Spawn(npcid);
    
    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);
    
    // Start melee attack
    NPC_MeleeAttack(npcid, 5000, false);
    
    // Stop after 3 seconds
    SetTimerEx("StopFighting", 3000, false, "i", npcid);
    
    return 1;
}

forward StopFighting(npcid);
public StopFighting(npcid)
{
    NPC_StopMeleeAttack(npcid);
    printf("NPC %d stopped fighting", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopfight", true))
    {
        // Stop NPC 0 from melee attacking
        NPC_StopMeleeAttack(0);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 stopped fighting");
        return 1;
    }
    return 0;
}

forward NPCFightSequence(npcid);
public NPCFightSequence(npcid)
{
    if (!NPC_IsValid(npcid))
        return;
    
    if (NPC_IsMeleeAttacking(npcid))
    {
        // Stop current attack
        NPC_StopMeleeAttack(npcid);
        
        // Wait before next attack
        SetTimerEx("NPCFightSequence", 2000, false, "i", npcid);
    }
    else
    {
        // Start new attack sequence
        NPC_MeleeAttack(npcid, 3000, random(2) ? true : false);
        SetTimerEx("NPCFightSequence", 4000, false, "i", npcid);
    }
}
```

## Notes

- This immediately stops any ongoing melee attack animation
- The NPC will return to its normal stance
- Has no effect if the NPC is not currently attacking
- Use this to create controlled combat sequences

## Related Functions

- [NPC_MeleeAttack](NPC_MeleeAttack): Start melee attack
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Check if NPC is attacking
- [NPC_SetFightingStyle](NPC_SetFightingStyle): Set fighting style
- [NPC_GetFightingStyle](NPC_GetFightingStyle): Get fighting style

## Related Callbacks

- [OnNPCGiveDamage](OnNPCGiveDamage): Called when NPC damages someone
