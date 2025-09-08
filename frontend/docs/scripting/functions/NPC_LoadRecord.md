---
title: NPC_LoadRecord
sidebar_label: NPC_LoadRecord
description: Loads an NPC recording file for playback.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Loads an NPC recording file for playback use.

| Name     | Description                      |
| -------- | -------------------------------- |
| const filePath | The path to the recording file   |

## Returns

Returns `true` if the recording was loaded successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    // Load various recording files
    if (NPC_LoadRecord("driver_route"))
    {
        printf("Driver route recording loaded successfully");
    }
    
    if (NPC_LoadRecord("guard_patrol"))
    {
        printf("Guard patrol recording loaded successfully");
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/loadrec", true))
    {
        // Load a single recording
        if (NPC_LoadRecord("patrol_route"))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Patrol recording loaded");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to load recording");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Recording files must be in the 'scriptfiles/npcmodes' directory
- Files should have .rec extension but don't include it in filename
- Load recordings before using them with NPC_StartPlayback
- Check return value to ensure successful loading

## Related Functions

- [NPC_UnloadRecord](NPC_UnloadRecord): Unload a recording
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Unload all recordings
- [NPC_StartPlayback](NPC_StartPlayback): Start playing recording
- [NPC_GetRecordCount](NPC_GetRecordCount): Get loaded record count

## Related Callbacks

- [OnNPCPlaybackStart](OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](OnNPCPlaybackEnd): Called when playback ends
