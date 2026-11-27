---
title: "NPC_IsPlaybackPaused | open.mp"
description: "Checks if an NPC's playback is paused."
canonical: https://open.mp/docs/scripting/functions/NPC_IsPlaybackPaused
language: en
---

# NPC\_IsPlaybackPaused

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC's playback is currently paused.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the playback is paused, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkplaybackpaused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isPlaybackPaused = NPC_IsPlaybackPaused(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d playback paused: %s", npcid, isPlaybackPaused ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Only returns true if the NPC is playing a recording and it's paused
-   NPCs not playing recordings will always return false

## Related Functions

-   [NPC\_PausePlayback](https://open.mp/docs/scripting/functions/NPC_PausePlayback): Pause/resume playback
-   [NPC\_IsPlayingPlayback](https://open.mp/docs/scripting/functions/NPC_IsPlayingPlayback): Check if playing
-   [NPC\_StartPlayback](https://open.mp/docs/scripting/functions/NPC_StartPlayback): Start playback
-   [NPC\_StopPlayback](https://open.mp/docs/scripting/functions/NPC_StopPlayback): Stop playback

## Related Callbacks

-   [OnNPCPlaybackStart](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackStart): Called when playback starts
-   [OnNPCPlaybackEnd](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackEnd): Called when playback ends
