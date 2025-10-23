---
title: NPC_GetRecordCount
sidebar_label: NPC_GetRecordCount
description: Gets the number of loaded NPC recording files.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the number of loaded NPC recording files on the server.

## Returns

Returns the number of recording files currently loaded.

## Examples

```c
public OnGameModeInit()
{
    printf("Initial record count: %d", NPC_GetRecordCount()); // 0

    // Load some recordings
    new record1 = NPC_LoadRecord("patrol");
    new record2 = NPC_LoadRecord("driver");
    new record3 = NPC_LoadRecord("guard");

    printf("Record count after loading: %d", NPC_GetRecordCount()); // 3

    // Unload one record
    NPC_UnloadRecord(record2);
    printf("Record count after unloading one: %d", NPC_GetRecordCount()); // 2

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/recordstats", true))
    {
        new recordCount = NPC_GetRecordCount();

        new msg[128];
        format(msg, sizeof(msg), "Server has %d NPC recordings loaded", recordCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);

        return 1;
    }

    if (!strcmp(cmdtext, "/loadtestrecords", true))
    {
        new oldCount = NPC_GetRecordCount();

        // Try to load some test recordings
        new loaded = 0;

        new testFiles[][] = {
            "test1",
            "test2",
            "test3"
        };

        for (new i = 0; i < sizeof(testFiles); i++)
        {
            new recordId = NPC_LoadRecord(testFiles[i]);
            if (NPC_IsValidRecord(recordId))
            {
                loaded++;
            }
        }

        new newCount = NPC_GetRecordCount();

        new msg[128];
        format(msg, sizeof(msg), "Loaded %d records. Total: %d -> %d",
            loaded, oldCount, newCount);
        SendClientMessage(playerid, 0x00FF00FF, msg);

        return 1;
    }
    return 0;
}
```

## Notes

- Returns the total number of valid recordings in memory
- Only successfully loaded recordings are counted
- Use this to monitor server memory usage
- Recordings persist until explicitly unloaded or server restart

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_UnloadRecord](NPC_UnloadRecord): Unload a recording
- [NPC_IsValidRecord](NPC_IsValidRecord): Check if record is valid
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Unload all recordings

## Related Callbacks

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
