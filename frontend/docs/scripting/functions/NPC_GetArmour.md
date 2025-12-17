---
title: NPC_GetArmour
sidebar_label: NPC_GetArmour
description: Gets the armour value of an NPC.
tags: ["npc", "health"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the armour value of an NPC.

| Name  | Description       |
| ----- | ----------------- |
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

- Armour values range from 0.0 to 100.0
- NPCs start with 0.0 armour by default, use [NPC_SetArmour](NPC_SetArmour) to define a higher value

## Related Functions

- [NPC_SetArmour](NPC_SetArmour): Set NPC armour
- [NPC_GetHealth](NPC_GetHealth): Get NPC health
- [NPC_SetHealth](NPC_SetHealth): Set NPC health
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead

## Related Callbacks

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when NPC takes damage
- [OnNPCDeath](../callbacks/OnNPCDeath): Called when NPC dies
