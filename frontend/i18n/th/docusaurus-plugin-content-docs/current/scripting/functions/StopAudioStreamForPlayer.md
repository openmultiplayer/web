---
title: StopAudioStreamForPlayer
description: Stops the current audio stream for a player.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## คำอธิบาย

Stops the current audio stream for a player.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The player you want to stop the audio stream for. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

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

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- PlayAudioStreamForPlayer: Plays a audio stream for a player.
- PlayerPlaySound: Play a sound for a player.
