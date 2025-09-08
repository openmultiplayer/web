---
title: NPC_SetVirtualWorld
sidebar_label: NPC_SetVirtualWorld
description: Sets an NPC's virtual world.
tags: ["npc", "virtual world", "dimension"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's virtual world, controlling which players can see and interact with them.

| Name         | Description                    |
| ------------ | ------------------------------ |
| npcid        | The ID of the NPC             |
| vw | The virtual world ID to set    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Isolated");
    NPC_Spawn(npcid);
    
    // Put NPC in virtual world 1
    NPC_SetVirtualWorld(npcid, 1);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveworld", true))
    {
        new playerWorld = GetPlayerVirtualWorld(playerid);
        NPC_SetVirtualWorld(0, playerWorld);
        
        new msg[64];
        format(msg, sizeof(msg), "Moved NPC 0 to your world (%d)", playerWorld);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    
    if (!strcmp(cmdtext, "/isolatenpc", true))
    {
        // Move NPC 0 to a separate world
        NPC_SetVirtualWorld(0, 100);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 moved to world 100");
        return 1;
    }
    return 0;
}
```

## Notes

- Virtual world 0 is the default world where all players start
- NPCs in different virtual worlds cannot see or interact with each other
- Players must be in the same virtual world to see NPCs
- Use NPC_GetVirtualWorld to check current virtual world

## Related Functions

- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Get NPC's virtual world
- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): Set player's virtual world
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Get player's virtual world
- [NPC_SetInterior](NPC_SetInterior): Set NPC's interior

## Related Callbacks

*No specific callbacks are triggered by this function.*
