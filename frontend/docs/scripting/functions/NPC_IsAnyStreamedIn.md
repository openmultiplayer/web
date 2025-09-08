---
title: NPC_IsAnyStreamedIn
sidebar_label: NPC_IsAnyStreamedIn
description: Checks if an NPC is streamed in for any player.
tags: ["npc", "streaming"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is streamed in for any player on the server.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is streamed in for at least one player, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("SecurityGuard");
    NPC_Spawn(npcid);
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);
    
    // Start monitoring streaming status
    SetTimer("MonitorNPCStreaming", 5000, true);
    
    return 1;
}

forward MonitorNPCStreaming();
public MonitorNPCStreaming()
{
    if (NPC_IsAnyStreamedIn(0))
    {
        printf("NPC 0 is visible to at least one player");
    }
    else
    {
        printf("NPC 0 is not visible to any players");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknpcvisibility", true))
    {
        if (NPC_IsAnyStreamedIn(0))
        {
            // Count how many players can see the NPC
            new visibleCount = 0;
            for (new i = 0; i < MAX_PLAYERS; i++)
            {
                if (IsPlayerConnected(i) && NPC_IsStreamedIn(0, i))
                {
                    visibleCount++;
                }
            }
            
            new msg[128];
            format(msg, sizeof(msg), "NPC 0 is visible to %d player(s)", visibleCount);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is not visible to anyone");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/optimizeprocessing", true))
    {
        // Example of performance optimization
        if (NPC_IsAnyStreamedIn(0))
        {
            // NPC is visible, process AI logic
            new Float:x, Float:y, Float:z;
            NPC_GetPos(0, x, y, z);
            
            new msg[128];
            format(msg, sizeof(msg), "Processing NPC 0 AI at %.1f, %.1f, %.1f", x, y, z);
            SendClientMessage(playerid, 0xFFFF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0x808080FF, "Skipping NPC 0 processing - not visible");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- An NPC is streamed in when it's within a player's streaming range
- Use this to optimize performance by only processing visible NPCs
- NPCs outside all players' range are not streamed in
- Streaming depends on distance and virtual world/interior
- Perfect for performance optimization in AI systems

## Related Functions

- [NPC_IsStreamedIn](NPC_IsStreamedIn): Check if streamed in for specific player
- [NPC_SetPos](NPC_SetPos): Set NPC position
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Set NPC virtual world
- [NPC_SetInterior](NPC_SetInterior): Set NPC interior

## Related Callbacks

- [OnNPCSpawn](OnNPCSpawn): Called when NPC spawns