---
title: NPC_Respawn
sidebar_label: NPC_Respawn
description: Respawns an NPC to their spawn position, resetting their state.
tags: ["npc", "spawn", "respawn"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Respawns an NPC to their spawn position, resetting their state.

| Name  | Description        |
| ----- | ------------------ |
| npcid | The ID of the NPC. |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/respawnnpc", true))
    {
        new npcid = PlayerNPC[playerid];

        if (!NPC_IsValid(npcid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "You don't have a valid NPC to respawn.");
            return 1;
        }

        if (NPC_Respawn(npcid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Your NPC (ID %d) has been respawned.", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to respawn your NPC (ID %d).", npcid);
        }

        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- Resets NPC health, position, and state.
- NPC returns to their original spawn coordinates.
- All current activities (movement, combat) are stopped.

:::

## Related Functions

- [NPC_Spawn](NPC_Spawn): Initial spawn of NPC.
- [NPC_SetPos](NPC_SetPos): Set NPC position.
- [NPC_GetHealth](NPC_GetHealth): Get NPC health.
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead.

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns.
- [OnNPCRespawn](../callbacks/OnNPCRespawn): Called when NPC respawns.
