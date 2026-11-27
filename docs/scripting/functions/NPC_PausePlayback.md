---
title: "NPC_PausePlayback | open.mp"
description: "Pauses or resumes an NPC's recording playback."
canonical: https://open.mp/docs/scripting/functions/NPC_PausePlayback
language: en
---

# NPC\_PausePlayback

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Pauses or resumes an NPC's recording playback.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| pause | Whether to pause (true) or resume (false) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/pauseplayback ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:pause = strval(cmdtext[15]) ? true : false;

        NPC_PausePlayback(npcid, pause);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d playback %s.", npcid, pause ? "paused" : "resumed");
        return 1;
    }
    return 0;
}
```

## Notes

-   Only works when NPC is actively playing a recording
-   Paused playback can be resumed by calling with pause = false
-   Use NPC\_IsPlaybackPaused to check current pause state

## Related Functions

-   [NPC\_IsPlaybackPaused](https://open.mp/docs/scripting/functions/NPC_IsPlaybackPaused): Check if paused
-   [NPC\_StartPlayback](https://open.mp/docs/scripting/functions/NPC_StartPlayback): Start playback
-   [NPC\_StopPlayback](https://open.mp/docs/scripting/functions/NPC_StopPlayback): Stop playback
-   [NPC\_IsPlayingPlayback](https://open.mp/docs/scripting/functions/NPC_IsPlayingPlayback): Check if playing

## Related Callbacks

_No specific callbacks are triggered by this function._
