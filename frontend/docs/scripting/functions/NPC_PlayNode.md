---
title: NPC_PlayNode
sidebar_label: NPC_PlayNode
description: Makes an NPC play/navigate through a node.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC play/navigate through a node with specified movement type.

| Name     | Description                    |
| -------- | ------------------------------ |
| npcid    | The ID of the NPC             |
| nodeid   | The ID of the node to play    |
| moveType | The movement type to use      |

## Returns

Returns `true` if the NPC started playing the node, `false` otherwise.

## Examples

```c
new g_NavigationNode = -1;

public OnGameModeInit()
{
    // Open and configure navigation node
    g_NavigationNode = NPC_OpenNode(1);
    
    if (g_NavigationNode != -1)
    {
        // Configure node points
        NPC_SetNodePoint(g_NavigationNode, 0, 1958.33, 1343.12, 15.36);
        NPC_SetNodePoint(g_NavigationNode, 1, 2058.33, 1343.12, 15.36);
        NPC_SetNodePoint(g_NavigationNode, 2, 2058.33, 1443.12, 15.36);
        NPC_SetNodePoint(g_NavigationNode, 3, 1958.33, 1443.12, 15.36);
        
        printf("Navigation node %d configured with 4 points", g_NavigationNode);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startnavigation", true))
    {
        if (g_NavigationNode != -1)
        {
            if (NPC_PlayNode(0, g_NavigationNode, NPC_MOVE_TYPE_WALK))
            {
                SendClientMessage(playerid, 0x00FF00FF, "NPC 0 started navigation route");
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "Failed to start navigation for NPC 0");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Navigation node not available");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/quicknode", true))
    {
        // Create a quick node at player location
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        new quickNode = NPC_OpenNode(5);
        if (quickNode != -1)
        {
            // Simple 2-point route
            NPC_SetNodePoint(quickNode, 0, x, y, z);
            NPC_SetNodePoint(quickNode, 1, x + 20.0, y + 20.0, z);
            
            if (NPC_PlayNode(0, quickNode, NPC_MOVE_TYPE_JOG))
            {
                SendClientMessage(playerid, 0x00FF00FF, "NPC 0 following quick route");
            }
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/nodestatus", true))
    {
        if (NPC_IsPlayingNode(0))
        {
            new currentPoint = NPC_GetCurrentNodePoint(0);
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 is at node point %d", currentPoint);
            SendClientMessage(playerid, 0xFFFF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is not playing any node");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Node must be opened with NPC_OpenNode before use
- Different movement types affect navigation speed and style
- Use NPC_IsPlayingNode to check if NPC is playing a node
- Node playing can be paused or stopped

## Related Functions

- [NPC_OpenNode](NPC_OpenNode): Open a node for use
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop playing node
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause node playing
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if playing

## Related Callbacks

- [OnNPCStartNode](OnNPCStartNode): Called when NPC starts node
- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes node