---
title: NPC_LoadRecord
sidebar_label: NPC_LoadRecord
description: Loads an NPC recording file for playback.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Loads an NPC recording file for playback use.

| Name           | Description                    |
| -------------- | ------------------------------ |
| const filePath | The path to the recording file |

## Returns

Returns the ID of the loaded recording, or `INVALID_RECORD_ID` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcloadrecord", true, 14))
    {
        new filepath[128];
        new len = strlen(cmdtext);
        if (len <= 15)
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /npcloadrecord [filepath]");

        strmid(filepath, cmdtext, 15, len);

        new recordid = NPC_LoadRecord(filepath);

        if (recordid == -1)
            SendClientMessage(playerid, 0xFF0000FF, "Failed to load record from: %s", filepath);
        else
            SendClientMessage(playerid, 0x00FF00FF, "Record loaded from %s with ID: %d", filepath, recordid);
        return 1;
    }
    return 0;
}
```

## Notes

- Files should have .rec extension but don't include it in filename
- Load recordings before using them with NPC_StartPlayback

## Related Functions

- [NPC_UnloadRecord](NPC_UnloadRecord): Unload a recording
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Unload all recordings
- [NPC_StartPlayback](NPC_StartPlayback): Start playing recording
- [NPC_GetRecordCount](NPC_GetRecordCount): Get loaded record count

## Related Callbacks

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
