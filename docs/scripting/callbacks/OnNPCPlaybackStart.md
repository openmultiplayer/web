---
title: "OnNPCPlaybackStart | open.mp"
description: "This callback is called when an NPC starts playback of a recorded file."
canonical: https://open.mp/docs/scripting/callbacks/OnNPCPlaybackStart
language: en
---

# OnNPCPlaybackStart

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

This callback is called when an NPC starts playback of a recorded file.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC that started playback |
| recordid | The ID of the record that started playing |

## Examples

```c
public OnNPCPlaybackStart(npcid, recordid)
{
    printf("[NPC] NPC %d started playback (record: %d)", npcid, recordid);

    // Notify players tracking this NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started playback (record ID: %d)", npcid, recordid);
        }
    }
    return 1;
}

```

## Notes

-   This callback is called immediately when `NPC_StartPlayback` is successfully executed
-   The `recordid` corresponds to the loaded record file
-   The NPC will follow the recorded movements from the file

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [NPC\_StartPlayback](https://open.mp/docs/scripting/functions/NPC_StartPlayback): Start NPC playback of a recording
-   [NPC\_StopPlayback](https://open.mp/docs/scripting/functions/NPC_StopPlayback): Stop NPC playback
-   [NPC\_PausePlayback](https://open.mp/docs/scripting/functions/NPC_PausePlayback): Pause/resume NPC playback
-   [NPC\_IsPlayingPlayback](https://open.mp/docs/scripting/functions/NPC_IsPlayingPlayback): Check if NPC is playing a recording

## Related Callbacks

-   [OnNPCPlaybackEnd](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackEnd): Called when NPC finishes playing a recording
