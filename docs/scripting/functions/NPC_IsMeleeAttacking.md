---
title: "NPC_IsMeleeAttacking | open.mp"
description: "Checks if an NPC is performing a melee attack."
canonical: https://open.mp/docs/scripting/functions/NPC_IsMeleeAttacking
language: en
---

# NPC\_IsMeleeAttacking

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is performing a melee attack.

| Name | Description |
| --- | --- |
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

-   Returns true during the melee attack animation
-   Melee attacks are started with NPC\_MeleeAttack

## Related Functions

-   [NPC\_MeleeAttack](https://open.mp/docs/scripting/functions/NPC_MeleeAttack): Start melee attack
-   [NPC\_StopMeleeAttack](https://open.mp/docs/scripting/functions/NPC_StopMeleeAttack): Stop melee attack
-   [NPC\_SetFightingStyle](https://open.mp/docs/scripting/functions/NPC_SetFightingStyle): Set fighting style
-   [NPC\_GetFightingStyle](https://open.mp/docs/scripting/functions/NPC_GetFightingStyle): Get fighting style

## Related Callbacks

-   [OnNPCGiveDamage](https://open.mp/docs/scripting/callbacks/OnNPCGiveDamage): Called when NPC damages someone
