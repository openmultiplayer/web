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
public OnGameModeInit()
{
    new npcid = NPC_Create("Tank");
    NPC_Spawn(npcid);

    // Give full armour
    NPC_SetArmour(npcid, 100.0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setarmour", true))
    {
        // Set armour for first NPC
        NPC_SetArmour(0, 75.0);

        SendClientMessage(playerid, 0x00FF00FF, "Set NPC armour to 75%");
        return 1;
    }

    if (!strcmp(cmdtext, "/checkarmour", true))
    {
        new Float:armour = NPC_GetArmour(0);
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 armour: %.1f", armour);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Armour value ranges from 0.0 (no armour) to 100.0 (full armour)
- Armour absorbs damage before health is affected
- Use NPC_GetArmour to check current armour level
- Armour doesn't regenerate automatically

## Related Functions

- [NPC_GetArmour](NPC_GetArmour): Get NPC's armour level
- [NPC_SetHealth](NPC_SetHealth): Set NPC's health
- [NPC_GetHealth](NPC_GetHealth): Get NPC's health
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead

## Related Callbacks

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when NPC takes damage
- [OnNPCDeath](../callbacks/OnNPCDeath): Called when NPC dies
