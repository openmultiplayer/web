---
title: NPC_SetArmour
sidebar_label: NPC_SetArmour
description: Sets an NPC's armour level.
tags: ["npc", "armour", "health"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's armour level.

| Name   | Description                   |
| ------ | ----------------------------- |
| npcid  | The ID of the NPC             |
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

- Armour value ranges from 0.0 (no armour) to 100.0 (full armour)
- Armour absorbs damage before health is affected
- Use NPC_GetArmour to check current armour level

## Related Functions

- [NPC_GetArmour](NPC_GetArmour): Get NPC's armour level
- [NPC_SetHealth](NPC_SetHealth): Set NPC's health
- [NPC_GetHealth](NPC_GetHealth): Get NPC's health
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead

## Related Callbacks

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when NPC takes damage
- [OnNPCDeath](../callbacks/OnNPCDeath): Called when NPC dies
