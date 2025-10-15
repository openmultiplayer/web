---
title: NPC_ResumePlayingNode
sidebar_label: NPC_ResumePlayingNode
description: Resumes paused node navigation for an NPC.
tags: ["npc", "node"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Resumes paused node navigation for an NPC.

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

    // Resume after 3 seconds
    SetTimerEx("ResumeNode", 3000, false, "i", npcid);
}

forward ResumeNode(npcid);
public ResumeNode(npcid)
{
    NPC_ResumePlayingNode(npcid);
    printf("NPC %d node navigation resumed", npcid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resume", true))
    {
        NPC_ResumePlayingNode(0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 node navigation resumed");
        return 1;
    }
    return 0;
}
```

## Notes

- Only works if the NPC's node navigation was previously paused
- The NPC will continue from where it was paused
- Use with `NPC_PausePlayingNode` to control node navigation

## Related Functions

- [NPC_PausePlayingNode](NPC_PausePlayingNode): Pause node navigation
- [NPC_PlayNode](NPC_PlayNode): Start playing a node
- [NPC_IsPlayingNodePaused](NPC_IsPlayingNodePaused): Check if paused
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Check if playing node

## Related Callbacks

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Called when NPC finishes a node
