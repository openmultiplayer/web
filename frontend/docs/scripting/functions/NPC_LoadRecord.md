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

Returns the ID of the loaded recording, or `INVALID_RECORD_ID` on failure.

## Examples

```c
new g_DriverRecord = INVALID_RECORD_ID;
new g_GuardRecord = INVALID_RECORD_ID;

public OnGameModeInit()
{
    // Load various recording files
    g_DriverRecord = NPC_LoadRecord("driver_route");
    if (g_DriverRecord != INVALID_RECORD_ID)
    {
        printf("Driver route recording loaded with ID: %d", g_DriverRecord);
    }
    
    g_GuardRecord = NPC_LoadRecord("guard_patrol");
    if (g_GuardRecord != INVALID_RECORD_ID)
    {
        printf("Guard patrol recording loaded with ID: %d", g_GuardRecord);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/loadrec", true))
    {
        // Load a single recording
        new recordid = NPC_LoadRecord("patrol_route");
        if (recordid != INVALID_RECORD_ID)
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
