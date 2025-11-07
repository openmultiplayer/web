---
title: NPC_StopPlayback
sidebar_label: NPC_StopPlayback
description: Stops an NPC from playing a recording.
tags: ["npc", "playback", "recording"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Stops an NPC from playing their current recording playback.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopplayback", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopPlayback(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d playback stopped: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

- The NPC will stop at their current position when playback ends
- If the NPC is not playing a recording, this function has no effect
- Use `NPC_IsPlayingPlayback` to check if an NPC is playing a recording
- The recording file remains loaded and can be used again

## Related Functions

- [NPC_StartPlayback](NPC_StartPlayback): Start playback for NPC
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Check if playing playback
- [NPC_LoadRecord](NPC_LoadRecord): Load a recording file
- [NPC_UnloadRecord](NPC_UnloadRecord): Unload a recording

## Related Callbacks

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Called when playback ends
