---
title: NPC_IsPlayingNodePaused
sidebar_label: NPC_IsPlayingNodePaused
description: Checks if an NPC's node playing is currently paused.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC's node playing is currently paused.

| Name  | Description           |
| ----- | --------------------- |
| npcid | The ID of the NPC     |

## Returns

Returns `true` if the NPC's node playing is paused, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("NodeBot");
    NPC_Spawn(npcid);
    
    if (NPC_OpenNode(1))
    {
        NPC_PlayNode(npcid, 1, NPC_MOVE_TYPE_WALK);
        
        // Pause after 10 seconds
        SetTimerEx("PauseNode", 10000, false, "i", npcid);
    }
    
    return 1;
}

forward PauseNode(npcid);
public PauseNode(npcid)
{
    NPC_PausePlayingNode(npcid);
    
    if (NPC_IsPlayingNodePaused(npcid))
    {
        printf("NPC %d node playing is now paused", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpause", true))
    {
        if (NPC_IsPlayingNode(0))
        {
            new bool:paused = NPC_IsPlayingNodePaused(0);
            
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 node is %s", paused ? "paused" : "playing");
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
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

- Returns `false` if the NPC is not playing a node
- Use this to check pause state before resuming
- Paused NPCs remain at their current position
- The NPC will resume from where they paused

## Related Functions

- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if playing node
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause node playing
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Resume node playing
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop playing node

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when an NPC finishes a node