---
title: OnPlayerEnterGangZone
sidebar_label: OnPlayerEnterGangZone
description: This callback is called when a player enters a gangzone
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Description

This callback is called when a player enters a gangzone

| Name     | Description                                     |
| -------- | ----------------------------------------------- |
| playerid | The ID of the player that entered the gangzone. |
| zoneid   | The ID of the gangzone the player entered.      |

## Returns

It is always called first in gamemode.

## Examples

```c
public OnPlayerEnterGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are entering gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerLeaveGangZone](OnPlayerLeaveGangZone): This callback is called when a player exited a gangzone. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [GangZoneCreate](../functions/GangZoneCreate): Create a gangzone (colored radar area).
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroy a gangzone.
- [UseGangZoneCheck](../functions/UseGangZoneCheck): Enables the callback when a player entered this zone.