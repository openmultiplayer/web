---
title: NPC_GetAll
sidebar_label: NPC_GetAll
description: Gets all NPC IDs and stores them in an array.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets all NPC IDs and stores them in an array.

| Name    | Description                                    |
| ------- | ---------------------------------------------- |
| npcs[]  | Array to store the NPC IDs                   |
| size    | Size of the array (default: sizeof(npcs))    |

## Returns

Returns the number of NPCs found.

## Examples

```c
public OnGameModeInit()
{
    // Create some NPCs
    new bot1 = NPC_Create("Bot1");
    new bot2 = NPC_Create("Bot2");
    new bot3 = NPC_Create("Bot3");
    
    NPC_Spawn(bot1);
    NPC_Spawn(bot2);
    NPC_Spawn(bot3);
    
    // Get all NPCs
    new npcs[MAX_NPCS];
    new count = NPC_GetAll(npcs);
    
    printf("Total NPCs on server: %d", count);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/countnpcs", true))
    {
        new count = NPC_GetAll(new npcs[MAX_NPCS]);
        
        new msg[64];
        format(msg, sizeof(msg), "There are %d NPCs on the server", count);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        
        return 1;
    }
    return 0;
}
```

## Notes

- The array must be large enough to hold all NPC IDs
- Only valid NPCs are included in the array
- The function returns the actual number of NPCs found
- Use this to iterate through all NPCs on the server

## Related Functions

- [NPC_Create](NPC_Create): Create a new NPC
- [NPC_IsValid](NPC_IsValid): Check if an NPC ID is valid
- [NPC_Destroy](NPC_Destroy): Destroy an NPC

## Related Callbacks

- [OnNPCCreate](OnNPCCreate): Called when an NPC is created
