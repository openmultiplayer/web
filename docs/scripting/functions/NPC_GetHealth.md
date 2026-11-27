---
title: "NPC_GetHealth | open.mp"
description: "Gets the health value of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetHealth
language: en
---

# NPC\_GetHealth

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the health value of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the NPC's health as a float value.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkhealth", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:health = NPC_GetHealth(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d health: %.2f", npcid, health);
        return 1;
    }
    return 0;
}
```

## Notes

-   Health values typically range from 0.0 to 100.0
-   An NPC with 0.0 health is considered dead

## Related Functions

-   [NPC\_SetHealth](https://open.mp/docs/scripting/functions/NPC_SetHealth): Set NPC health
-   [NPC\_GetArmour](https://open.mp/docs/scripting/functions/NPC_GetArmour): Get NPC armour
-   [NPC\_SetArmour](https://open.mp/docs/scripting/functions/NPC_SetArmour): Set NPC armour
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead

## Related Callbacks

-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when NPC takes damage
-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when NPC dies
