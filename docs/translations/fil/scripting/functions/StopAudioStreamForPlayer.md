---
title: StopAudioStreamForPlayer
description: Ihihinto ang kasalukuyang audio stream para sa isang player.
tags: ["player"]
---

## Description

Ihihinto ang kasalukuyang audio stream para sa isang player.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | Ang player na gusto mong ihinto ang audio stream. |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    // Kung ang manlalaro ay lumabas ng sasakyan
    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)
    {
        StopAudioStreamForPlayer(playerid); // Itigil ang audio stream
    }
    return 1;
}
```

## Related Functions

- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): Nagpe-play ng audio stream para sa isang player.
- [PlayerPlaySound](PlayerPlaySound): Magpatugtog ng tunog para sa isang manlalaro.