---
title: NPC_Respawn
sidebar_label: NPC_Respawn
description: Respawns an NPC to their spawn position, resetting their state.
tags: ["npc", "spawn", "respawn"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Respawns an NPC to their spawn position, resetting their state.

| Name  | Description        |
| ----- | ------------------ |
| npcid | The ID of the NPC. |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("Respawner");
    NPC_Spawn(npcid);
    
    // Respawn every 30 seconds
    SetTimerEx("RespawnNPC", 30000, true, "i", npcid);
    
    return 1;
}

forward RespawnNPC(npcid);
public RespawnNPC(npcid)
{
    if (NPC_Respawn(npcid))
    {
        printf("NPC %d respawned", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/respawnnpc", true))
    {
        // Respawn NPC 0
        if (NPC_Respawn(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 respawned");
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
- Use this to reset NPCs after death or when stuck.

:::

## Related Functions

- [NPC_Spawn](NPC_Spawn): Initial spawn of NPC.
- [NPC_SetPos](NPC_SetPos): Set NPC position.
- [NPC_GetHealth](NPC_GetHealth): Get NPC health.
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead.

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns.
- [OnNPCRespawn](OnNPCRespawn): Called when NPC respawns.
