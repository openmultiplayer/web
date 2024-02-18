---
title: OnPlayerClickGangZone
description: This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Description

This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).

| Name     | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| playerid | The ID of the player that clicked a gangzone                                  |
| zoneid   | The ID of the gangzone the player clicked                                     |

## Returns

This callback does not handle returns.
It is always called first in gamemode.

## Examples

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are click gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [GangZoneCreate](../functions/GangZoneCreate): Create a gangzone (colored radar area).
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroy a gangzone.