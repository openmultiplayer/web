---
title: "NPC_GetArmour | open.mp"
description: "Gets the armour value of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetArmour
language: en
---

# NPC\_GetArmour

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the armour value of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the NPC's armour as a float value (0.0 to 100.0).

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkarmour", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:armour = NPC_GetArmour(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has %.1f% armour", npcid, armour);
        return 1;
    }
    return 0;
}
```

## Notes

-   Armour values range from 0.0 to 100.0
-   NPCs start with 0.0 armour by default, use [NPC\_SetArmour](https://open.mp/docs/scripting/functions/NPC_SetArmour) to define a higher value

## Related Functions

-   [NPC\_SetArmour](https://open.mp/docs/scripting/functions/NPC_SetArmour): Set NPC armour
-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Get NPC health
-   [NPC\_SetHealth](https://open.mp/docs/scripting/functions/NPC_SetHealth): Set NPC health
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead

## Related Callbacks

-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when NPC takes damage
-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when NPC dies
