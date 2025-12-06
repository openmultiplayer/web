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
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmeleeattacking", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isMeleeAttacking = NPC_IsMeleeAttacking(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is melee attacking: %s", npcid, isMeleeAttacking ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true during the melee attack animation
- Melee attacks are started with NPC_MeleeAttack

## Related Functions

- [NPC_MeleeAttack](NPC_MeleeAttack): Start melee attack
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): Stop melee attack
- [NPC_SetFightingStyle](NPC_SetFightingStyle): Set fighting style
- [NPC_GetFightingStyle](NPC_GetFightingStyle): Get fighting style

## Related Callbacks

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages someone
