---
title: "PlayerPlaySound | open.mp"
description: "Plays the specified sound for a player."
canonical: https://open.mp/docs/scripting/functions/PlayerPlaySound
language: en
---

# PlayerPlaySound

## Description

Plays the specified [sound](https://open.mp/docs/scripting/resources/sound-ids) for a player.

For a library that lists all sounds, check out [this](https://github.com/WoutProvost/samp-sound-array).

| Name | Description |
| --- | --- |
| playerid | The ID of the player for whom to play the sound. |
| soundid | The [sound](https://open.mp/docs/scripting/resources/sound-ids) to play. |
| Float:x | X coordinate for the sound to play at. (0.0 for no position) |
| Float:y | Y coordinate for the sound to play at. (0.0 for no position) |
| Float:z | Z coordinate for the sound to play at. (0.0 for no position) |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
// player punching sound (fits for commands such as /slap well). The sound will be quiet, as the source is actually 10 meters above the player.
PlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);
```

## Notes

tip

Only use the coordinates if you want the sound to be played at a certain position. Set coordinates all to **0.0** to just play the sound.

## Related Functions

-   [PlayCrimeReportForPlayer](https://open.mp/docs/scripting/functions/PlayCrimeReportForPlayer): Play a crime report for a player.
-   [PlayAudioStreamForPlayer](https://open.mp/docs/scripting/functions/PlayAudioStreamForPlayer): Plays a audio stream for a player.
-   [StopAudioStreamForPlayer](https://open.mp/docs/scripting/functions/StopAudioStreamForPlayer): Stops the current audio stream for a player.

## Related Resources

-   [Sound IDs](https://open.mp/docs/scripting/resources/sound-ids)
