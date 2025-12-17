---
title: NPC_UnloadRecord
sidebar_label: NPC_UnloadRecord
description: Unloads a specific NPC recording from memory.
tags: ["npc", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Unloads a specific NPC recording from memory to free up resources.

| Name     | Description                    |
| -------- | ------------------------------ |
| recordId | The ID of the record to unload |

## Returns

Returns `true` if the record was unloaded successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcunloadrecord ", true, 17))
    {
        new recordid = strval(cmdtext[17]);

        new bool:success = NPC_UnloadRecord(recordid);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "Record %d unloaded successfully", recordid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to unload record %d", recordid);
        return 1;
    }
    return 0;
}
```

## Notes

- Frees memory used by the specific recording
- The record ID becomes invalid after unloading
- Any NPCs using this recording will stop playback
- Use `NPC_UnloadAllRecords` to unload all recordings at once

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Unload all recordings
- [NPC_IsValidRecord](NPC_IsValidRecord): Check if record is valid
- [NPC_GetRecordCount](NPC_GetRecordCount): Get number of loaded records

## Related Callbacks

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
