---
title: "StopAudioStreamForPlayer | open.mp"
description: "Stops the current audio stream for a player."
canonical: https://open.mp/docs/scripting/functions/StopAudioStreamForPlayer
language: en
---

# StopAudioStreamForPlayer

## Description

Stops the current audio stream for a player.

| Name | Description |
| --- | --- |
| playerid | The player you want to stop the audio stream for. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    // If the player exits a vehicle
    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)
    {
        StopAudioStreamForPlayer(playerid); // Stop the audio stream
    }
    return 1;
}
```

## Related Functions

-   [PlayAudioStreamForPlayer](https://open.mp/docs/scripting/functions/PlayAudioStreamForPlayer): Plays a audio stream for a player.
-   [PlayerPlaySound](https://open.mp/docs/scripting/functions/PlayerPlaySound): Play a sound for a player.
