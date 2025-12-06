---
title: NPC_SetFightingStyle
sidebar_label: NPC_SetFightingStyle
description: Sets an NPC's fighting style for melee combat.
tags: ["npc", "combat", "fighting", "melee"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's fighting style for melee combat.

| Name  | Description           |
| ----- | --------------------- |
| npcid | The ID of the NPC     |
| style | The fighting style ID |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setfightingstyle ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new styleid = strval(cmdtext[18]);
        // Valid fighting styles: 4, 5, 6, 7, 15, 16
        if (styleid != 4 && styleid != 5 && styleid != 6 && styleid != 7 && styleid != 15 && styleid != 16)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid style. Valid: 4(Normal), 5(Boxing), 6(KungFu), 7(KneeHead), 15(GrabKick), 16(Elbow)");

        NPC_SetFightingStyle(npcid, FIGHT_STYLE:styleid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d fighting style set to %d", npcid, styleid);

        return 1;
    }
    return 0;
}
```

## Notes

- Fighting styles affect melee attack animations and damage
- Use NPC_GetFightingStyle to check current style
- Style affects both attack animations and combat effectiveness

## Related Functions

- [NPC_GetFightingStyle](NPC_GetFightingStyle): Get fighting style
- [NPC_MeleeAttack](NPC_MeleeAttack): Make NPC attack
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Check if attacking
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): Stop attacking

## Related Resources

- [Fighting Styles](../resources/fightingstyles)

## Related Callbacks

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages someone
