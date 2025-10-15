---
title: NPC_GetInterior
sidebar_label: NPC_GetInterior
description: Gets the interior ID of an NPC.
tags: ["npc", "interior"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the interior ID of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the interior ID the NPC is currently in.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("IndoorBot");
    NPC_Spawn(npcid);
    
    NPC_SetInterior(npcid, 1); // Set to interior 1
    
    new interior = NPC_GetInterior(npcid);
    printf("NPC %d is in interior %d", npcid, interior); // Output: 1
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinterior", true))
    {
        new interior = NPC_GetInterior(0);
        new virtualworld = NPC_GetVirtualWorld(0);
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0: Interior %d, VW %d", interior, virtualworld);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Interior 0 is the main world (outside)
- Different interiors have different environments and objects
- NPCs must be in the same interior as players to interact
- Moving NPCs between interiors may require repositioning

## Related Functions

- [NPC_SetInterior](NPC_SetInterior): Set NPC interior
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Get NPC virtual world
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Set NPC virtual world
- [NPC_GetPos](NPC_GetPos): Get NPC position

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
