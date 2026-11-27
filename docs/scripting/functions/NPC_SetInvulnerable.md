---
title: "NPC_SetInvulnerable | open.mp"
description: "Sets whether an NPC is invulnerable to damage."
canonical: https://open.mp/docs/scripting/functions/NPC_SetInvulnerable
language: en
---

# NPC\_SetInvulnerable

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets whether an NPC is invulnerable to damage.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| toggle | true to make invulnerable, false to make vulnerable |

## Returns

Returns `true` if the invulnerability was set successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/toggleinvulnerable", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:invulnerable = NPC_IsInvulnerable(npcid);
        NPC_SetInvulnerable(npcid, !invulnerable);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d invulnerable: %s", npcid, !invulnerable ? "Enabled" : "Disabled");

        return 1;
    }
    return 0;
}

```

## Notes

-   Invulnerable NPCs will not take any damage from weapons, explosions, or other damage sources
-   This setting persists until changed or the NPC is destroyed
-   Invulnerable NPCs can still be moved, teleported, or have their animations changed

## Related Functions

-   [NPC\_IsInvulnerable](https://open.mp/docs/scripting/functions/NPC_IsInvulnerable): Check if an NPC is invulnerable
-   [NPC\_SetHealth](https://open.mp/docs/scripting/functions/NPC_SetHealth): Set NPC health
-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Get NPC health
-   [NPC\_SetArmour](https://open.mp/docs/scripting/functions/NPC_SetArmour): Set NPC armour

## Related Callbacks

-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when NPC takes damage (not called for invulnerable NPCs)
-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when NPC dies (invulnerable NPCs cannot die)
