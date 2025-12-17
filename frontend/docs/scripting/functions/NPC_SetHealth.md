---
title: NPC_SetHealth
sidebar_label: NPC_SetHealth
description: Sets the health value of an NPC.
tags: ["npc", "health"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the health value of an NPC.

| Name   | Description             |
| ------ | ----------------------- |
| npcid  | The ID of the NPC       |
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

- Health values typically range from 0.0 to 100.0, but can be set higher
- Setting health to 0.0 will kill the NPC
- NPCs spawn with 100.0 health by default

## Related Functions

- [NPC_GetHealth](NPC_GetHealth): Get NPC health
- [NPC_SetArmour](NPC_SetArmour): Set NPC armour
- [NPC_GetArmour](NPC_GetArmour): Get NPC armour
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead
- [NPC_SetInvulnerable](NPC_SetInvulnerable): Make NPC invulnerable

## Related Callbacks

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when NPC takes damage
- [OnNPCDeath](../callbacks/OnNPCDeath): Called when NPC dies
