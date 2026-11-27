---
title: "OnPlayerLeaveGangZone | open.mp"
description: "This callback is called when a player exited a gangzone"
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerLeaveGangZone
language: en
---

# OnPlayerLeaveGangZone

warning

This callback was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

This callback is called when a player exited a gangzone

| Name | Description |
| --- | --- |
| playerid | The ID of the player that exited the gangzone. |
| zoneid | The ID of the gangzone the player exited. |

## Returns

It is always called first in gamemode.

## Examples

```c
public OnPlayerLeaveGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are leaving gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerEnterGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerEnterGangZone): This callback is called when a player enters a gangzone.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate): Create a gangzone (colored radar area).
-   [GangZoneDestroy](https://open.mp/docs/scripting/functions/GangZoneDestroy): Destroy a gangzone.
