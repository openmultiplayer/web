---
title: NPC_StopPlayingNode
sidebar_label: NPC_StopPlayingNode
description: Stops an NPC from playing a node.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Stops an NPC from playing their current node.

| Name  | Description           |
| ----- | --------------------- |
| npcid | The ID of the NPC     |

## Returns

Returns `true` if the NPC was stopped successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeWalker");
    NPC_Spawn(npcid);
    
    // Open a node and start playing
    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);
        
        // Stop playing after 15 seconds
        SetTimerEx("StopNodePlay", 15000, false, "i", npcid);
    }
    
    return 1;
}

forward StopNodePlay(npcid);
public StopNodePlay(npcid)
{
    if (NPC_StopPlayingNode(npcid))
    {
        printf("NPC %d stopped playing node", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopnode", true))
    {
        // Stop NPC 0 from playing node
        if (NPC_StopPlayingNode(0))
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 stopped playing node");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC will stop at their current position in the node
- If the NPC is not playing a node, this function returns `false`
- The node remains open and can be used by other NPCs
- Use `NPC_IsPlayingNode` to check if an NPC is playing a node

## Related Functions

- [NPC_PlayNode](NPC_PlayNode): Make NPC play a node
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if NPC is playing node
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause node playing
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Resume node playing

## Related Callbacks

- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes a node