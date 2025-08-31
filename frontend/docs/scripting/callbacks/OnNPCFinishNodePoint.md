---
title: OnNPCFinishNodePoint
sidebar_label: OnNPCFinishNodePoint
description: This callback is called when a NPC reaches a specific point during node-based navigation.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

**## Description**

This callback is called when a NPC reaches a specific point during node-based navigation.

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| npcid   | The ID of the NPC that reached the node point   |
| nodeid  | The ID of the node being navigated              |
| pointid | The ID of the specific point that was reached   |

**## Examples**

```c
public OnNPCFinishNodePoint(npcid, nodeid, pointid)
{
    printf("NPC %d reached point %d in node %d", npcid, pointid, nodeid);
    
    // Pause at specific point
    if (pointid == 10)
    {
        NPC_PausePlayingNode(npcid);
        SetTimerEx("ResumeNavigation", 3000, false, "i", npcid);
    }
    
    return true;
}

forward ResumeNavigation(npcid);
public ResumeNavigation(npcid)
{
    NPC_ResumePlayingNode(npcid);
}
```

**## Notes**

- This callback is only called when NPCs are using node-based navigation via `NPC_PlayNode`
- It's called each time the NPC reaches a waypoint within the node
- The `pointid` corresponds to the specific waypoint index within the node file

**## Related Functions**

The following functions might be useful, as they're related to this callback in one way or another.

- [NPC_PlayNode](NPC_PlayNode): Start NPC node-based navigation
- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause NPC node navigation
- [NPC_ResumePlayingNode](NPC_ResumePlayingNode): Resume paused node navigation
- [NPC_StopPlayingNode](NPC_StopPlayingNode): Stop NPC node navigation

**## Related Callbacks**

- [OnNPCFinishNode](OnNPCFinishNode): Called when NPC finishes navigating a complete node
- [OnNPCChangeNode](OnNPCChangeNode): Called when NPC attempts to change nodes
- [OnNPCFinishMove](OnNPCFinishMove): Called when NPC finishes any type of movement
