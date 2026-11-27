---
title: "NPC_IsValidRecord | open.mp"
description: "Checks if a recording file is valid and loaded."
canonical: https://open.mp/docs/scripting/functions/NPC_IsValidRecord
language: en
---

# NPC\_IsValidRecord

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if a recording ID is valid and loaded.

| Name | Description |
| --- | --- |
| recordId | The ID of the recording |

## Returns

Returns `true` if the recording is valid and loaded, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvalidrecord ", true, 18))
    {
        new recordid = strval(cmdtext[18]);

        new bool:isValidRecord = NPC_IsValidRecord(recordid);

        SendClientMessage(playerid, 0x00FF00FF, "Record %d is valid: %s", recordid, isValidRecord ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Recording must be loaded with NPC\_LoadRecord before it becomes valid
-   Invalid recordings cannot be used for playback

## Related Functions

-   [NPC\_LoadRecord](https://open.mp/docs/scripting/functions/NPC_LoadRecord): Load a recording file
-   [NPC\_UnloadRecord](https://open.mp/docs/scripting/functions/NPC_UnloadRecord): Unload a recording
-   [NPC\_StartPlayback](https://open.mp/docs/scripting/functions/NPC_StartPlayback): Start playing recording
-   [NPC\_GetRecordCount](https://open.mp/docs/scripting/functions/NPC_GetRecordCount): Get loaded record count

## Related Callbacks

_No specific callbacks are triggered by this function._
