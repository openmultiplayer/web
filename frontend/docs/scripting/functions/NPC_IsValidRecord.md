---
title: NPC_IsValidRecord
sidebar_label: NPC_IsValidRecord
description: Checks if a recording file is valid and loaded.
tags: ["npc", "recording", "validation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if a recording ID is valid and loaded.

| Name     | Description             |
| -------- | ----------------------- |
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

- Recording must be loaded with NPC_LoadRecord before it becomes valid
- Invalid recordings cannot be used for playback

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_UnloadRecord](NPC_UnloadRecord): Unload a recording
- [NPC_StartPlayback](NPC_StartPlayback): Start playing recording
- [NPC_GetRecordCount](NPC_GetRecordCount): Get loaded record count

## Related Callbacks

_No specific callbacks are triggered by this function._
