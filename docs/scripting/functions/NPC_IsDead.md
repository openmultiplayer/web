---
title: "NPC_IsDead | open.mp"
description: "Checks if an NPC is dead."
canonical: https://open.mp/docs/scripting/functions/NPC_IsDead
language: en
---

# NPC\_IsDead

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is dead.

| Name | Description |
| --- | --- |
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

note

-   An NPC is considered dead when its health reaches 0.0 or below.
-   Dead NPCs can be respawned using [NPC\_Respawn](https://open.mp/docs/scripting/functions/NPC_Respawn).

## Related Functions

-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Gets the health of an NPC
-   [NPC\_SetHealth](https://open.mp/docs/scripting/functions/NPC_SetHealth): Sets the health of an NPC
-   [NPC\_Respawn](https://open.mp/docs/scripting/functions/NPC_Respawn): Respawns an NPC

## Related Callbacks

-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when an NPC dies
-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when an NPC takes damage
