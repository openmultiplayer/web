---
title: NPC_StartPlaybackEx
sidebar_label: NPC_StartPlaybackEx
description: Starts playback for an NPC using a pre-loaded recording ID with extended options.
tags: ["npc", "playback", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Starts playback for an NPC using a pre-loaded recording ID with extended options.

| Name       | Description                                    |
| ---------- | ---------------------------------------------- |
| npcid      | The ID of the NPC                              |
| recordId   | The pre-loaded recording ID                    |
| autoUnload | Whether to automatically unload after playback |
| startX     | X offset from recording position               |
| startY     | Y offset from recording position               |
| startZ     | Z offset from recording position               |
| rotX       | X rotation offset                              |
| rotY       | Y rotation offset                              |
| rotZ       | Z rotation offset                              |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startplaybackex ", true, 17))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new recordId = strval(cmdtext[17]);

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        new bool:success = NPC_StartPlaybackEx(npcid, recordId, true, x, y, z, 0.0, 0.0, 0.0);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started playback with record ID: %d", npcid, recordId);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to start playback for NPC %d with record ID %d", npcid, recordId);

        return 1;
    }
    return 0;
}
```

## Notes

- Recording must be pre-loaded with `NPC_LoadRecord`
- Auto-unload saves memory when playback completes

## Related Functions

- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_StartPlayback](NPC_StartPlayback): Start playback by filename
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_IsValidRecord](NPC_IsValidRecord): Check if record is valid

## Related Callbacks

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
