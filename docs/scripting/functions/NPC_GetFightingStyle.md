---
title: "NPC_GetFightingStyle | open.mp"
description: "Gets the fighting style of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetFightingStyle
language: en
---

# NPC\_GetFightingStyle

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the fighting style of an NPC.

| Name | Description |
| --- | --- |
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

-   Fighting styles affect melee combat animations and damage
-   Each style has different punch and kick animations
-   The default fighting style is FIGHT\_STYLE\_NORMAL

## Related Functions

-   [NPC\_SetFightingStyle](https://open.mp/docs/scripting/functions/NPC_SetFightingStyle): Set NPC fighting style
-   [NPC\_MeleeAttack](https://open.mp/docs/scripting/functions/NPC_MeleeAttack): Make NPC perform melee attack
-   [NPC\_IsMeleeAttacking](https://open.mp/docs/scripting/functions/NPC_IsMeleeAttacking): Check if NPC is attacking

## Related Callbacks

-   [OnNPCGiveDamage](https://open.mp/docs/scripting/callbacks/OnNPCGiveDamage): Called when NPC damages someone
