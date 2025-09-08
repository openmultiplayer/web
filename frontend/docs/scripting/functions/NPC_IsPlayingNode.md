---
title: NPC_IsPlayingNode
sidebar_label: NPC_IsPlayingNode
description: Checks if an NPC is currently playing a node.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently playing a node.

| Name  | Description           |
| ----- | --------------------- |
| npcid | The ID of the NPC     |

## Returns

Returns `true` if the NPC is playing a node, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeWalker");
    NPC_Spawn(npcid);
    
    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);
        
        // Check status after 5 seconds
        SetTimerEx("CheckNodeStatus", 5000, false, "i", npcid);
    }
    
    return 1;
}

forward CheckNodeStatus(npcid);
public CheckNodeStatus(npcid)
{
    if (NPC_IsPlayingNode(npcid))
    {
        printf("NPC %d is playing a node", npcid);
    }
    else
    {
        printf("NPC %d is not playing any node", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknode", true))
    {
        if (NPC_IsPlayingNode(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 is playing a node");
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

- Returns `false` if the NPC is not valid
- Use this to check before stopping or pausing node playback
- NPCs can only play one node at a time
- This remains `true` even if the node is paused

## Related Functions

- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop playing node
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): Check if paused
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause node playing

## Related Callbacks

- [OnNPCFinishNode](OnNPCFinishNode): Called when an NPC finishes a node