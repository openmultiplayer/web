---
title: NPC_GetRecordCount
sidebar_label: NPC_GetRecordCount
description: Gets the number of loaded NPC recording files.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the number of loaded NPC recording files on the server.

## Returns

Returns the number of recording files currently loaded.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkrecordcount", true))
    {
        new count = NPC_GetRecordCount();
        SendClientMessage(playerid, 0x00FF00FF, "Total records loaded: %d", count);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns the total number of valid recordings in memory
- Only successfully loaded recordings are counted
- Recordings persist until explicitly unloaded or server restart

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_UnloadRecord](NPC_UnloadRecord): Unload a recording
- [NPC_IsValidRecord](NPC_IsValidRecord): Check if record is valid
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Unload all recordings

## Related Callbacks

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
