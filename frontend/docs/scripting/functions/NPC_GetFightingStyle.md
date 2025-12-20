---
title: NPC_GetFightingStyle
sidebar_label: NPC_GetFightingStyle
description: Gets the fighting style of an NPC.
tags: ["npc", "fighting"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the fighting style of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the fighting style ID of the NPC.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkfightingstyle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new style = NPC_GetFightingStyle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d fighting style: %d", npcid, style);
        return 1;
    }
    return 0;
}
```

## Notes

- Fighting styles affect melee combat animations and damage
- Each style has different punch and kick animations
- The default fighting style is FIGHT_STYLE_NORMAL

## Related Functions

- [NPC_SetFightingStyle](NPC_SetFightingStyle): Set NPC fighting style
- [NPC_MeleeAttack](NPC_MeleeAttack): Make NPC perform melee attack
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Check if NPC is attacking

## Related Callbacks

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Called when NPC damages someone
