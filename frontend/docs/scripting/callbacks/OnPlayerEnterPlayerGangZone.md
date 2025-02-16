---
title: OnPlayerEnterPlayerGangZone
description: This callback is called when a player enters a player gangzone
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Description

This callback is called when a player enters a player gangzone.

| Name     | Description                                            |
| -------- | ------------------------------------------------------ |
| playerid | The ID of the player that entered the player gangzone. |
| zoneid   | The ID of the player gangzone the player entered.      |

## Returns

It is always called first in gamemode.

## Examples

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are entering player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): This callback is called when a player exited a player gangzone.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Create player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Destroy player gangzone.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Enables the callback when a player entered this zone.
