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

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopmelee", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopMeleeAttack(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stop melee attack: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}

```

## Notes

- This immediately stops any ongoing melee attack animation
- The NPC will return to its normal stance
- Has no effect if the NPC is not currently attacking

## Related Functions

- [NPC_MeleeAttack](NPC_MeleeAttack): Start melee attack
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Check if NPC is attacking
- [NPC_SetFightingStyle](NPC_SetFightingStyle): Set fighting style
- [NPC_GetFightingStyle](NPC_GetFightingStyle): Get fighting style

## Related Callbacks

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages someone
