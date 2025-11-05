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
    if (!strcmp(cmdtext, "/npcopennode", true, 12))
    {
        new nodeid = strval(cmdtext[13]);

        if (nodeid < 0 || nodeid > 63)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid node ID. Must be between 0 and 63.");

        new bool:success = NPC_OpenNode(nodeid);

        SendClientMessage(playerid, 0x00FF00FF, "Open node %d: %s", nodeid, success ? "Success" : "Failed");
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
