---
title: "NPC_GetRecordCount | open.mp"
description: "Gets the number of loaded NPC recording files."
canonical: https://open.mp/docs/scripting/functions/NPC_GetRecordCount
language: en
---

# NPC\_GetRecordCount

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

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

-   Returns the total number of valid recordings in memory
-   Only successfully loaded recordings are counted
-   Recordings persist until explicitly unloaded or server restart

## Related Functions

-   [NPC\_LoadRecord](https://open.mp/docs/scripting/functions/NPC_LoadRecord): Load a recording file
-   [NPC\_UnloadRecord](https://open.mp/docs/scripting/functions/NPC_UnloadRecord): Unload a recording
-   [NPC\_IsValidRecord](https://open.mp/docs/scripting/functions/NPC_IsValidRecord): Check if record is valid
-   [NPC\_UnloadAllRecords](https://open.mp/docs/scripting/functions/NPC_UnloadAllRecords): Unload all recordings

## Related Callbacks

-   [OnNPCPlaybackStart](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackStart): Called when playback starts
-   [OnNPCPlaybackEnd](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackEnd): Called when playback ends
