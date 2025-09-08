---
title: NPC_Spawn
sidebar_label: NPC_Spawn
description: Spawns an NPC into the game world.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Spawns an NPC into the game world, making it visible and active.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Guard");
    
    if (NPC_IsValid(npcid))
    {
        NPC_Spawn(npcid);
        printf("NPC %d spawned successfully", npcid);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/spawnnpc", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        new npcid = NPC_Create("Bot");
        if (NPC_IsValid(npcid))
        {
            NPC_Spawn(npcid);
            NPC_SetPos(npcid, x + 3.0, y, z);
            
            SendClientMessage(playerid, 0x00FF00FF, "NPC spawned near you!");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC must be created with `NPC_Create` before spawning
- Spawning makes the NPC visible and active in the game world
- NPCs spawn at their default position until moved with `NPC_SetPos`
- You can only spawn valid NPCs (check with `NPC_IsValid`)

## Related Functions

- [NPC_Create](NPC_Create): Create a new NPC
- [NPC_IsValid](NPC_IsValid): Check if NPC ID is valid
- [NPC_SetPos](NPC_SetPos): Set NPC position
- [NPC_Destroy](NPC_Destroy): Destroy an NPC

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns
- [OnNPCCreate](OnNPCCreate): Called when NPC is created