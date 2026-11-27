---
title: "NPC_SetArmour | open.mp"
description: "Sets an NPC's armour level."
canonical: https://open.mp/docs/scripting/functions/NPC_SetArmour
language: en
---

# NPC\_SetArmour

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets an NPC's armour level.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| armour | The armour amount (0.0-100.0) |

## Returns

Returns `true` if the armour was set successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setarmour ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:armour = floatstr(cmdtext[11]);
        if (armour < 0.0 || armour > 100.0)
            return SendClientMessage(playerid, 0xFF0000FF, "Armour must be between 0.0 and 100.0.");

        NPC_SetArmour(npcid, armour);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d armour set to %.1f", npcid, armour);

        return 1;
    }
    return 0;
}
```

## Notes

-   Armour value ranges from 0.0 (no armour) to 100.0 (full armour)
-   Armour absorbs damage before health is affected
-   Use NPC\_GetArmour to check current armour level

## Related Functions

-   [NPC\_GetArmour](https://open.mp/docs/scripting/functions/NPC_GetArmour): Get NPC's armour level
-   [NPC\_SetHealth](https://open.mp/docs/scripting/functions/NPC_SetHealth): Set NPC's health
-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Get NPC's health
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead

## Related Callbacks

-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when NPC takes damage
-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when NPC dies
