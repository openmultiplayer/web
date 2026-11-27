---
title: "NPC_StopPlayback | open.mp"
description: "Stops an NPC from playing a recording."
canonical: https://open.mp/docs/scripting/functions/NPC_StopPlayback
language: en
---

# NPC\_StopPlayback

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Stops an NPC from playing their current recording playback.

| Name | Description |
| --- | --- |
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

-   The NPC will stop at their current position when playback ends
-   If the NPC is not playing a recording, this function has no effect
-   Use `NPC_IsPlayingPlayback` to check if an NPC is playing a recording
-   The recording file remains loaded and can be used again

## Related Functions

-   [NPC\_StartPlayback](https://open.mp/docs/scripting/functions/NPC_StartPlayback): Start playback for NPC
-   [NPC\_IsPlayingPlayback](https://open.mp/docs/scripting/functions/NPC_IsPlayingPlayback): Check if playing playback
-   [NPC\_LoadRecord](https://open.mp/docs/scripting/functions/NPC_LoadRecord): Load a recording file
-   [NPC\_UnloadRecord](https://open.mp/docs/scripting/functions/NPC_UnloadRecord): Unload a recording

## Related Callbacks

-   [OnNPCPlaybackEnd](https://open.mp/docs/scripting/callbacks/OnNPCPlaybackEnd): Called when playback ends
