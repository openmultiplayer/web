---
title: NPC_StartPlayback
sidebar_label: NPC_StartPlayback
description: Starts playing a recording file for an NPC.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Starts playing a recording file for an NPC by filename.

| Name         | Description                                   |
| ------------ | --------------------------------------------- |
| npcid        | The ID of the NPC                             |
| recordName[] | The filename of the recording to play         |
| autoUnload   | Whether to unload the recording when finished |
| startX       | Starting X coordinate                         |
| startY       | Starting Y coordinate                         |
| startZ       | Starting Z coordinate                         |
| rotX         | Starting X rotation                           |
| rotY         | Starting Y rotation                           |
| rotZ         | Starting Z rotation                           |

## Returns

Returns `true` if the playback was started successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startplayback ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new recordName[64];
        new len = strlen(cmdtext);
        if (len <= 15)
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /startplayback [recordname]");

        strmid(recordName, cmdtext, 15, len);

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        new bool:success = NPC_StartPlayback(npcid, recordName, true, x, y, z, 0.0, 0.0, 0.0);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started playback: %s", npcid, recordName);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to start playback for NPC %d", npcid);

        return 1;
    }
    return 0;
}
```

## Notes

- The recording file must exist in the `npcmodes\recordings` directory
- If autoUnload is true, the recording is unloaded when playback ends
- Use NPC_StartPlaybackEx for better control with pre-loaded recordings

## Related Functions

- [NPC_StartPlaybackEx](NPC_StartPlaybackEx): Start playback with recording ID
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_PausePlayback](NPC_PausePlayback): Pause/unpause playback
- [NPC_LoadRecord](NPC_LoadRecord): Pre-load a recording file

## Related Callbacks

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Called when playback starts
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
