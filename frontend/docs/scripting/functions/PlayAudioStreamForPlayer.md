---
title: PlayAudioStreamForPlayer
description: Play an 'audio stream' for a player.
tags: ["player"]
---

## Description

Play an 'audio stream' for a player. Normal audio files also work (e.g. MP3).

| Name           | Description                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| playerid       | The ID of the player to play the audio for.                                                                      |
| const url[]    | The url to play. Valid formats are mp3 and ogg/vorbis. A link to a .pls (playlist) file will play that playlist. |
| Float:posX     | The X position at which to play the audio. Default 0.0. Has no effect unless usepos is set to (true).            |
| Float:posY     | The Y position at which to play the audio. Default 0.0. Has no effect unless usepos is set to (true).            |
| Float:posZ     | The Z position at which to play the audio. Default 0.0. Has no effect unless usepos is set to (true).            |
| Float:distance | The distance over which the audio will be heard. Has no effect unless usepos is set to (true).                   |
| bool:usepos    | Use the positions and distance specified. Default disabled (false).                                              |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/radio", cmdtext, true) == 0)
    {
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");
        return 1;
    }
    if (strcmp("/radiopos", cmdtext, true) == 0)
    {
        new Float:x, Float:y, Float:z, Float:distance = 5.0;
        GetPlayerPos(playerid, x, y, z);
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", x, y, z, distance, true);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): Stops the current audio stream for a player.
- [PlayerPlaySound](PlayerPlaySound): Play a sound for a player.
