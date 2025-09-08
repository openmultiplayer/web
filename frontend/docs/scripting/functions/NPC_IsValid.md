---
title: NPC_IsValid
sidebar_label: NPC_IsValid
description: Checks if an NPC ID is valid.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC ID is valid and the NPC exists.

| Name  | Description                  |
| ----- | ---------------------------- |
| npcid | The NPC ID to check         |

## Returns

Returns `true` if the NPC is valid, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("TestBot");
    
    if (NPC_IsValid(npcid))
    {
        printf("NPC %d was created successfully", npcid);
        NPC_Spawn(npcid);
    }
    else
    {
        print("Failed to create NPC");
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknpcs", true))
    {
        new validCount = 0;
        
        for (new i = 0; i < MAX_NPCS; i++)
        {
            if (NPC_IsValid(i))
            {
                validCount++;
                
                new Float:health = NPC_GetHealth(i);
                new msg[128];
                format(msg, sizeof(msg), "NPC %d: Health %.1f", i, health);
                SendClientMessage(playerid, 0xFFFFFFFF, msg);
            }
        }
        
        new msg[64];
        format(msg, sizeof(msg), "Total valid NPCs: %d", validCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        
        return 1;
    }
    return 0;
}

stock DestroyAllNPCs()
{
    new destroyedCount = 0;
    
    for (new i = 0; i < MAX_NPCS; i++)
    {
        if (NPC_IsValid(i))
        {
            NPC_Destroy(i);
            destroyedCount++;
        }
    }
    
    printf("Destroyed %d NPCs", destroyedCount);
    return destroyedCount;
}

forward SafeNPCOperation(npcid);
public SafeNPCOperation(npcid)
{
    if (!NPC_IsValid(npcid))
    {
        printf("Error: NPC %d is not valid", npcid);
        return 0;
    }
    
    // Safe to perform operations on the NPC
    NPC_SetHealth(npcid, 100.0);
    NPC_SetPos(npcid, 0.0, 0.0, 3.0);
    
    return 1;
}
```

## Notes

- Always check if an NPC is valid before performing operations on it
- An NPC becomes invalid when it is destroyed
- This prevents runtime errors and crashes
- Use this in loops when iterating through potential NPC IDs

## Related Functions

- [NPC_Create](NPC_Create): Create a new NPC
- [NPC_Destroy](NPC_Destroy): Destroy an NPC
- [NPC_GetAll](NPC_GetAll): Get all valid NPC IDs
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead

## Related Callbacks

- [OnNPCCreate](OnNPCCreate): Called when NPC is created
- [OnNPCDestroy](OnNPCDestroy): Called when NPC is destroyed
