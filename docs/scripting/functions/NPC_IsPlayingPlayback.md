---
title: "NPC_IsPlayingPlayback | open.mp"
description: "Checks if an NPC is playing a recording playback."
canonical: https://open.mp/docs/scripting/functions/NPC_IsPlayingPlayback
language: en
---

# NPC\_IsPlayingPlayback

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is currently playing a recording playback.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is playing a playback, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplayingplayback", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isPlayingPlayback = NPC_IsPlayingPlayback(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is playing playback: %s", npcid, isPlayingPlayback ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns true when the NPC is actively playing a recording

## Related Functions

-   [NPC\_StartPlayback](https://open.mp/docs/scripting/functions/NPC_StartPlayback): Start playing recording
-   [NPC\_StopPlayback](https://open.mp/docs/scripting/functions/NPC_StopPlayback): Stop playback
-   [NPC\_PausePlayback](https://open.mp/docs/scripting/functions/NPC_PausePlayback): Pause/resume playback
-   [NPC\_IsPlaybackPaused](https://open.mp/docs/scripting/functions/NPC_IsPlaybackPaused): Check if paused

## Related Callbacks

-   [OnNPCPlaybackStart](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackStart): Called when playback starts
-   [OnNPCPlaybackEnd](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackEnd): Called when playback ends
