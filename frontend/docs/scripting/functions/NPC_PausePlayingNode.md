---
title: NPC_PausePlayingNode
sidebar_label: NPC_PausePlayingNode
description: Pauses an NPC's node navigation.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Pauses an NPC's node navigation, temporarily stopping their movement through the node.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Navigator");
    NPC_Spawn(npcid);
    
    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);
        
        // Pause after 5 seconds
        SetTimerEx("PauseNode", 5000, false, "i", npcid);
    }
    
    return 1;
}

forward PauseNode(npcid);
public PauseNode(npcid)
{
    NPC_PausePlayingNode(npcid);
    printf("NPC %d node navigation paused", npcid);
    
    // Resume after 3 seconds
    SetTimerEx("ResumeNode", 3000, false, "i", npcid);
}

forward ResumeNode(npcid);
public ResumeNode(npcid)
{
    NPC_ResumePlayingNode(npcid);
    printf("NPC %d node navigation resumed", npcid);
}
```

## Notes

- Only works when NPC is actively playing a node
- Paused node navigation can be resumed with NPC_ResumePlayingNode
- Use NPC_IsPlayingNodePaused to check pause state

## Related Functions

- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Resume node playing
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): Check if paused
- [NPC_PlayNode](NPC_PlayNode): Start playing node
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop playing node

## Related Callbacks

*No specific callbacks are triggered by this function.*
