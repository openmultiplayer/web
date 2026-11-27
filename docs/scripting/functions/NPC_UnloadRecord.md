---
title: "NPC_UnloadRecord | open.mp"
description: "Unloads a specific NPC recording from memory."
canonical: https://open.mp/docs/scripting/functions/NPC_UnloadRecord
language: en
---

# NPC\_UnloadRecord

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Unloads a specific NPC recording from memory to free up resources.

| Name | Description |
| --- | --- |
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

-   Frees memory used by the specific recording
-   The record ID becomes invalid after unloading
-   Any NPCs using this recording will stop playback
-   Use `NPC_UnloadAllRecords` to unload all recordings at once

## Related Functions

-   [NPC\_LoadRecord](https://open.mp/docs/scripting/functions/NPC_LoadRecord): Load a recording file
-   [NPC\_UnloadAllRecords](https://open.mp/docs/scripting/functions/NPC_UnloadAllRecords): Unload all recordings
-   [NPC\_IsValidRecord](https://open.mp/docs/scripting/functions/NPC_IsValidRecord): Check if record is valid
-   [NPC\_GetRecordCount](https://open.mp/docs/scripting/functions/NPC_GetRecordCount): Get number of loaded records

## Related Callbacks

-   [OnNPCPlaybackEnd](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackEnd): Called when playback ends
