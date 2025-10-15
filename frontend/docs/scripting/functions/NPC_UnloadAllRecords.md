---
title: NPC_UnloadAllRecords
sidebar_label: NPC_UnloadAllRecords
description: Unloads all NPC recording files from memory.
tags: ["npc", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Unloads all NPC recording files from memory to free up resources.

## Returns

Returns `true` if all records were unloaded successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    // Load some recordings
    NPC_LoadRecord("patrol");
    NPC_LoadRecord("driver");
    NPC_LoadRecord("guard");
    
    printf("Loaded records: %d", NPC_GetRecordCount());
    
    return 1;
}

public OnGameModeExit()
{
    // Clean up all recordings on server shutdown
    if (NPC_UnloadAllRecords())
    {
        print("All NPC recordings unloaded successfully");
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearrecords", true))
    {
        if (NPC_UnloadAllRecords())
        {
            SendClientMessage(playerid, 0x00FF00FF, "All recordings unloaded");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to unload recordings");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- This frees up memory used by loaded recordings
- Use this for cleanup during gamemode shutdown
- All record IDs become invalid after this function
- Any NPCs using these recordings will stop playback

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_UnloadRecord](NPC_UnloadRecord): Unload specific recording
- [NPC_GetRecordCount](NPC_GetRecordCount): Get number of loaded records
- [NPC_IsValidRecord](NPC_IsValidRecord): Check if record is valid

## Related Callbacks

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends