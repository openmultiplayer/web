---
title: NPC_IsInvulnerable
sidebar_label: NPC_IsInvulnerable
description: Checks if an NPC is invulnerable to damage.
tags: ["npc", "invulnerable", "damage", "protection"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Checks if an NPC is invulnerable to damage.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns true if the NPC is invulnerable, false otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinvulnerable", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isInvulnerable = NPC_IsInvulnerable(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is invulnerable: %s", npcid, isInvulnerable ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the invulnerability status set by `NPC_SetInvulnerable`
- NPCs are vulnerable by default when created

## Related Functions

- [NPC_SetInvulnerable](NPC_SetInvulnerable): Set NPC invulnerability
- [NPC_IsValid](NPC_IsValid): Check if NPC ID is valid
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead
- [NPC_GetHealth](NPC_GetHealth): Get NPC health

## Related Callbacks

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Called when NPC takes damage (not called for invulnerable NPCs)
- [OnNPCDeath](../callbacks/OnNPCDeath): Called when NPC dies (invulnerable NPCs cannot die)
