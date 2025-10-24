---
title: NPC_Spawn
sidebar_label: NPC_Spawn
description: Spawns an NPC into the game world.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Spawns an NPC into the game world, making it visible and active.

| Name  | Description        |
| ----- | ------------------ |
| npcid | The ID of the NPC. |

## Returns

Returns `true` if the NPC was spawned successfully, `false` otherwise.

## Examples

```c
new g_NPCCount = 0;

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/spawnnpc", true))
    {
        new name[24];
        format(name, sizeof(name), "Bot_%d", g_NPCCount++);

        new npcid = NPC_Create(name);
        if (NPC_IsValid(npcid))
        {
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);

            NPC_Spawn(npcid);
            NPC_SetPos(npcid, x + 3.0, y, z);

            SendClientMessage(playerid, 0x00FF00FF, "NPC %s spawned near you!", name);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to create NPC!");
        }
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- The NPC must be created with [NPC_Create](NPC_Create) before spawning.
- Spawning makes the NPC visible and active in the game world.
- NPCs spawn at their default position until moved with [NPC_SetPos](NPC_SetPos).

:::

## Related Functions

- [NPC_Create](NPC_Create): Create a new NPC.
- [NPC_IsValid](NPC_IsValid): Check if NPC ID is valid.
- [NPC_SetPos](NPC_SetPos): Set NPC position.
- [NPC_Destroy](NPC_Destroy): Destroy an NPC.

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns.
- [OnNPCCreate](../callbacks/OnNPCCreate): Called when NPC is created.
