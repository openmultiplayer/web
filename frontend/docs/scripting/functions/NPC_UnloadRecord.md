---
title: NPC_UnloadRecord
sidebar_label: NPC_UnloadRecord
description: Unloads a specific NPC recording from memory.
tags: ["npc", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Unloads a specific NPC recording from memory to free up resources.

| Name      | Description                    |
| --------- | ------------------------------ |
| recordId  | The ID of the record to unload |

## Returns

Returns `true` if the record was unloaded successfully, `false` otherwise.

## Examples

```c
new g_PatrolRecord;

public OnGameModeInit()
{
    // Load recordings
    g_PatrolRecord = NPC_LoadRecord("recordings/patrol.rec");
    
    if (NPC_IsValidRecord(g_PatrolRecord))
    {
        printf("Patrol recording loaded with ID %d", g_PatrolRecord);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/unloadpatrol", true))
    {
        if (NPC_IsValidRecord(g_PatrolRecord))
        {
            if (NPC_UnloadRecord(g_PatrolRecord))
            {
                SendClientMessage(playerid, 0x00FF00FF, "Patrol recording unloaded");
                g_PatrolRecord = -1; // Mark as invalid
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "Failed to unload recording");
            }
        }
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

- [OnNPCFinishPlayback](OnNPCFinishPlayback): Called when playback ends