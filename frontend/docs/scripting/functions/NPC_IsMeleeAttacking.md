---
title: NPC_IsMeleeAttacking
sidebar_label: NPC_IsMeleeAttacking
description: Checks if an NPC is performing a melee attack.
tags: ["npc", "melee", "fighting"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is performing a melee attack.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is performing a melee attack, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Fighter");
    NPC_Spawn(npcid);
    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);
    NPC_MeleeAttack(npcid, 5000, false);
    
    SetTimerEx("CheckMeleeStatus", 1000, true, "i", npcid);
    
    return 1;
}

forward CheckMeleeStatus(npcid);
public CheckMeleeStatus(npcid)
{
    if (NPC_IsMeleeAttacking(npcid))
    {
        printf("NPC %d is attacking with melee", npcid);
    }
    else
    {
        printf("NPC %d is not attacking", npcid);
        KillTimer(GetTickCount()); // Stop checking
    }
}
```

## Notes

- Returns true during the melee attack animation
- Use this to check if an NPC is in combat mode
- Melee attacks are started with NPC_MeleeAttack
- Fighting style affects the attack animation

## Related Functions

- [NPC_MeleeAttack](NPC_MeleeAttack): Start melee attack
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): Stop melee attack
- [NPC_SetFightingStyle](NPC_SetFightingStyle): Set fighting style
- [NPC_GetFightingStyle](NPC_GetFightingStyle): Get fighting style

## Related Callbacks

- [OnNPCGiveDamage](OnNPCGiveDamage): Called when NPC damages someone
