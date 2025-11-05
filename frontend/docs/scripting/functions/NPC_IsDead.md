---
title: NPC_IsDead
sidebar_label: NPC_IsDead
description: Checks if an NPC is dead.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is dead.

| Name  | Description                 |
| ----- | --------------------------- |
| npcid | The ID of the NPC to check. |

## Returns

Returns `true` if the NPC is dead, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkdead", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isDead = NPC_IsDead(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is dead: %s", npcid, isDead ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- An NPC is considered dead when its health reaches 0.0 or below.
- Dead NPCs can be respawned using [NPC_Respawn](NPC_Respawn).

:::

## Related Functions

- [NPC_GetHealth](NPC_GetHealth): Gets the health of an NPC
- [NPC_SetHealth](NPC_SetHealth): Sets the health of an NPC
- [NPC_Respawn](NPC_Respawn): Respawns an NPC

## Related Callbacks

- [OnNPCDeath](../callbacks/OnNPCDeath): Called when an NPC dies
- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when an NPC takes damage
