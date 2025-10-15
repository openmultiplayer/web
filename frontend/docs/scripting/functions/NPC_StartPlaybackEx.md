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
| startX              | X offset from recording position                     |
| startY              | Y offset from recording position                     |
| startZ              | Z offset from recording position                     |
| rotX                | X rotation offset                                    |
| rotY                | Y rotation offset                                    |
| rotZ                | Z rotation offset                                    |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
new g_PatrolRecord = INVALID_RECORD_ID;

public OnGameModeInit()
{
    // Pre-load recordings
    g_PatrolRecord = NPC_LoadRecord("patrol");
    
    if (g_PatrolRecord != INVALID_RECORD_ID)
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
        NPC_StartPlaybackEx(0, g_PatrolRecord, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 started patrol playback");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/startpatrolrotated", true))
    {
        // Start with rotation offset
        NPC_StartPlaybackEx(0, g_PatrolRecord, true, 0.0, 0.0, 0.0, 0.0, 0.0, 90.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 started patrol with rotation");
        return 1;
    }
    return 0;
}
```

## Notes

- Recording must be pre-loaded with `NPC_LoadRecord`
- More efficient than `NPC_StartPlayback` for repeated use
- Auto-unload saves memory when playback completes
- Rotation offsets allow adjusting the NPC's orientation during playback

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_StartPlayback](NPC_StartPlayback): Start playback by filename
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_IsValidRecord](NPC_IsValidRecord): Check if record is valid

## Related Callbacks

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends