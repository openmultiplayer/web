---
title: NPC_IsSpawned
sidebar_label: NPC_IsSpawned
description: Checks if an NPC is spawned in the game world.
tags: ["npc", "spawn"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is spawned in the game world.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is spawned, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkshooting", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isShooting = NPC_IsShooting(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is shooting: %s", npcid, isShooting ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- This is different from [NPC_IsValid](NPC_IsValid), which checks if the NPC exists

## Related Functions

- [NPC_Spawn](NPC_Spawn): Spawn an NPC
- [NPC_Respawn](NPC_Respawn): Respawn an NPC
- [NPC_IsValid](NPC_IsValid): Check if NPC is valid
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
- [OnNPCRespawn](../callbacks/OnNPCRespawn): Called when NPC respawns
