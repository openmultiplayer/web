---
title: "NPC_SetHealth | open.mp"
description: "Sets the health value of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_SetHealth
language: en
---

# NPC\_SetHealth

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the health value of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| health | The health value to set |

## Returns

Returns `true` if the health was set successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sethealth ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:health = floatstr(cmdtext[11]);
        if (health < 0.0 || health > 100.0)
            return SendClientMessage(playerid, 0xFF0000FF, "Health must be between 0.0 and 100.0.");

        NPC_SetHealth(npcid, health);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d health set to %.1f", npcid, health);

        return 1;
    }
    return 0;
}
```

## Notes

-   Health values typically range from 0.0 to 100.0, but can be set higher
-   Setting health to 0.0 will kill the NPC
-   NPCs spawn with 100.0 health by default

## Related Functions

-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Get NPC health
-   [NPC\_SetArmour](https://open.mp/docs/scripting/functions/NPC_SetArmour): Set NPC armour
-   [NPC\_GetArmour](https://open.mp/docs/scripting/functions/NPC_GetArmour): Get NPC armour
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead
-   [NPC\_SetInvulnerable](https://open.mp/docs/scripting/functions/NPC_SetInvulnerable): Make NPC invulnerable

## Related Callbacks

-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when NPC takes damage
-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when NPC dies
