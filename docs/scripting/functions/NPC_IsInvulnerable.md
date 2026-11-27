---
title: "NPC_IsInvulnerable | open.mp"
description: "Checks if an NPC is invulnerable to damage."
canonical: https://open.mp/docs/scripting/functions/NPC_IsInvulnerable
language: en
---

# NPC\_IsInvulnerable

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is invulnerable to damage.

| Name | Description |
| --- | --- |
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

-   Returns the invulnerability status set by `NPC_SetInvulnerable`
-   NPCs are vulnerable by default when created

## Related Functions

-   [NPC\_SetInvulnerable](https://open.mp/docs/scripting/functions/NPC_SetInvulnerable): Set NPC invulnerability
-   [NPC\_IsValid](https://open.mp/docs/scripting/functions/NPC_IsValid): Check if NPC ID is valid
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead
-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Get NPC health

## Related Callbacks

-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when NPC takes damage (not called for invulnerable NPCs)
-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when NPC dies (invulnerable NPCs cannot die)
