---
title: NPC_StartPlaybackEx
sidebar_label: NPC_StartPlaybackEx
description: Starts playback for an NPC using a pre-loaded recording ID with extended options.
tags: ["npc", "playback", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Starts playback for an NPC using a pre-loaded recording ID with extended options.

| Name                | Description                                          |
| ------------------- | ---------------------------------------------------- |
| npcid               | The ID of the NPC                                    |
| recordId            | The pre-loaded recording ID                          |
| autoUnload          | Whether to automatically unload after playback      |
| deltaX              | X offset from recording position                     |
| deltaY              | Y offset from recording position                     |
| deltaZ              | Z offset from recording position                     |
| deltaAngle          | Angle offset from recording                          |
| velocityX           | X velocity offset                                    |
| velocityY           | Y velocity offset                                    |
| velocityZ           | Z velocity offset                                    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
new g_PatrolRecord;

public OnGameModeInit()
{
    // Pre-load recordings
    g_PatrolRecord = NPC_LoadRecord("recordings/patrol.rec");
    
    if (NPC_IsValidRecord(g_PatrolRecord))
    {
        printf("Patrol recording loaded with ID %d", g_PatrolRecord);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startpatrol", true))
    {
        // Start NPC 0 playing the pre-loaded recording
        NPC_StartPlaybackEx(0, g_PatrolRecord, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 started patrol playback");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/startpatrolfast", true))
    {
        // Start with velocity boost
        NPC_StartPlaybackEx(0, g_PatrolRecord, true, 0.0, 0.0, 0.0, 0.0, 5.0, 5.0, 0.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 started fast patrol");
        return 1;
    }
    return 0;
}
```

## Notes

- Recording must be pre-loaded with `NPC_LoadRecord`
- More efficient than `NPC_StartPlayback` for repeated use
- Auto-unload saves memory when playback completes
- Velocity offsets affect movement speed during playback

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_StartPlayback](NPC_StartPlayback): Start playback by filename
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_IsValidRecord](NPC_IsValidRecord): Check if record is valid

## Related Callbacks

- [OnNPCFinishPlayback](OnNPCFinishPlayback): Called when playback ends