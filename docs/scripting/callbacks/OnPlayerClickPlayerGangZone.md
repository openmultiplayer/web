---
title: OnPlayerClickPlayerGangZone
description: This callback is called when a player clicked a player gangzone on the pause menu map (by right-clicking).
tags: ["player", "gangzone"]
---

## Description

This callback is called when a player clicked a player gangzone on the pause menu map (by right-clicking).

| Name     | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| playerid | The ID of the player that clicked a player gangzone                                  |
| zoneid   | The ID of the player gangzone the player clicked                                     |

## Returns

This callback does not handle returns.
It is always called first in gamemode.

## Examples

```c
public OnPlayerClickPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are click player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Create a player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Destroy a player gangzone.