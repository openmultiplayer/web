---
title: NPC_UnloadAllRecords
sidebar_label: NPC_UnloadAllRecords
description: Unloads all NPC recording files from memory.
tags: ["npc", "recording"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Unloads all NPC recording files from memory to free up resources.

## Returns

Returns `true` if all records were unloaded successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcunloadallrecords", true))
    {
        new bool:success = NPC_UnloadAllRecords();

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "All records unloaded successfully");
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to unload all records");
        return 1;
    }
    return 0;
}
```

## Notes

- This frees up memory used by loaded recordings
- All record IDs become invalid after this function
- Any NPCs using these recordings will stop playback

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_UnloadRecord](NPC_UnloadRecord): Unload specific recording
- [NPC_GetRecordCount](NPC_GetRecordCount): Get number of loaded records
- [NPC_IsValidRecord](NPC_IsValidRecord): Check if record is valid

## Related Callbacks

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
