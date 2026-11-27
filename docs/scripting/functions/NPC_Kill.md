---
title: "NPC_Kill | open.mp"
description: "Kills an NPC with a specific weapon/reason."
canonical: https://open.mp/docs/scripting/functions/NPC_Kill
language: en
---

# NPC\_Kill

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Kills an NPC with a specific weapon/reason.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC to kill |
| killerid | The ID of the player who killed the NPC (optional, use INVALID\_PLAYER\_ID for no killer) |
| reason | The weapon ID or reason for death (default: 255 for suicide) |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npckill", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        NPC_Kill(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been killed.", npcid);
        return 1;
    }
    return 0;
}
```

## Notes

-   Use `INVALID_PLAYER_ID` for killerid if there is no killer
-   The reason parameter uses weapon IDs (WEAPON enum)
-   This triggers the [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath) callback

## Related Functions

-   [NPC\_SetHealth](https://open.mp/docs/scripting/functions/NPC_SetHealth): Set NPC health
-   [NPC\_GetHealth](https://open.mp/docs/scripting/functions/NPC_GetHealth): Get NPC health
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead
-   [NPC\_Respawn](https://open.mp/docs/scripting/functions/NPC_Respawn): Respawn an NPC

## Related Callbacks

-   [OnNPCDeath](https://open.mp/docs/scripting/callbacks/OnNPCDeath): Called when NPC dies
-   [OnNPCTakeDamage](https://open.mp/docs/scripting/callbacks/OnNPCTakeDamage): Called when NPC takes damage
