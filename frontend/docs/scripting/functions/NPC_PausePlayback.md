---
title: NPC_PausePlayback
sidebar_label: NPC_PausePlayback
description: Pauses or unpauses an NPC's recording playback.
tags: ["npc", "recording", "playback"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Pauses or unpauses an NPC's recording playback.

| Name  | Description                                |
| ----- | ------------------------------------------ |
| npcid | The ID of the NPC                          |
| pause | Whether to pause (true) or unpause (false) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pauseplayback", true, 14))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:pause = true;
        if (strlen(cmdtext) > 15)
        {
            pause = strval(cmdtext[15]) ? true : false;
        }

        NPC_PausePlayback(npcid, pause);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d playback %s.", npcid, pause ? "paused" : "resumed");
        return 1;
    }
    return 0;
}
```

## Notes

- Only works when NPC is actively playing a recording
- Paused playback can be resumed by calling with pause = false
- Use NPC_IsPlaybackPaused to check current pause state

## Related Functions

- [NPC_IsPlaybackPaused](NPC_IsPlaybackPaused): Check if paused
- [NPC_StartPlayback](NPC_StartPlayback): Start playback
- [NPC_StopPlayback](NPC_StopPlayback): Stop playback
- [NPC_IsPlayingPlayback](NPC_IsPlayingPlayback): Check if playing

## Related Callbacks

_No specific callbacks are triggered by this function._
