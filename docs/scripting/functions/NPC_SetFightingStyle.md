---
title: "NPC_SetFightingStyle | open.mp"
description: "Sets an NPC's fighting style for melee combat."
canonical: https://open.mp/docs/scripting/functions/NPC_SetFightingStyle
language: en
---

# NPC\_SetFightingStyle

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets an NPC's fighting style for melee combat.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
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

-   Fighting styles affect melee attack animations and damage
-   Use NPC\_GetFightingStyle to check current style
-   Style affects both attack animations and combat effectiveness

## Related Functions

-   [NPC\_GetFightingStyle](https://open.mp/docs/scripting/functions/NPC_GetFightingStyle): Get fighting style
-   [NPC\_MeleeAttack](https://open.mp/docs/scripting/functions/NPC_MeleeAttack): Make NPC attack
-   [NPC\_IsMeleeAttacking](https://open.mp/docs/scripting/functions/NPC_IsMeleeAttacking): Check if attacking
-   [NPC\_StopMeleeAttack](https://open.mp/docs/scripting/functions/NPC_StopMeleeAttack): Stop attacking

## Related Resources

-   [Fighting Styles](https://open.mp/docs/scripting/resources/fightingstyles)

## Related Callbacks

-   [OnNPCGiveDamage](https://open.mp/docs/scripting/callbacks/OnNPCGiveDamage): Called when NPC damages someone
