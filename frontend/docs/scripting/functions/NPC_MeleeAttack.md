---
title: NPC_MeleeAttack
sidebar_label: NPC_MeleeAttack
description: Makes an NPC perform a melee attack.
tags: ["npc", "combat", "melee"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Makes an NPC perform a melee attack for a specified duration.

| Name            | Description                                      |
| --------------- | ------------------------------------------------ |
| npcid           | The ID of the NPC                                |
| time            | The duration of the attack                       |
| secondaryAttack | Whether to use secondary attack (default: false) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmeleeattack", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new time = 1000;
        if (strlen(cmdtext) > 16)
            time = strval(cmdtext[16]);

        new bool:success = NPC_MeleeAttack(npcid, time, false);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d melee attack for %dms: %s", npcid, time, success ? "Success" : "Failed");
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

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages player
