---
title: "OnNPCPlaybackEnd | open.mp"
description: "This callback is called when an NPC finishes playback of a recorded file."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCPlaybackEnd
language: en
---

# OnNPCPlaybackEnd

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC finishes playback of a recorded file.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that finished playback |
| recordid | The ID of the record that finished playing |

## Examples

```c
public OnNPCPlaybackEnd(npcid, recordid)
{
    printf("[NPC] NPC %d finished playback (record: %d)", npcid, recordid);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished playback (record ID: %d)", npcid, recordid);
        }
    }
    return 1;
}

```

## Notes

-   This callback is called when the recording reaches its end naturally
-   It's also called when playback is stopped manually using `NPC_StopPlayback`
-   The `recordid` corresponds to the loaded record file

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_StartPlayback](https://open.mp/docs/scripting/functions/NPC_StartPlayback): Start NPC playback of a recording
-   [NPC\_StopPlayback](https://open.mp/docs/scripting/functions/NPC_StopPlayback): Stop NPC playback
-   [NPC\_PausePlayback](https://open.mp/docs/scripting/functions/NPC_PausePlayback): Pause/resume NPC playback
-   [NPC\_IsPlayingPlayback](https://open.mp/docs/scripting/functions/NPC_IsPlayingPlayback): Check if NPC is playing a recording

## Related Callbacks

-   [OnNPCPlaybackStart](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackStart): Called when NPC starts playing a recording
