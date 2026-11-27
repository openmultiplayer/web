---
title: "OnPlayerEnterPlayerGangZone | open.mp"
description: "This callback is called when a player enters a player gangzone"
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone
language: en
---

# OnPlayerEnterPlayerGangZone

warning

This callback was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

This callback is called when a player enters a player gangzone.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that entered the player gangzone. |
| zoneid | The ID of the player gangzone the player entered. |

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

-   [OnPlayerLeavePlayerGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerLeavePlayerGangZone): This callback is called when a player exited a player gangzone.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [CreatePlayerGangZone](https://open.mp/docs/scripting/functions/CreatePlayerGangZone): Create player gangzone.
-   [PlayerGangZoneDestroy](https://open.mp/docs/scripting/functions/PlayerGangZoneDestroy): Destroy player gangzone.
-   [UsePlayerGangZoneCheck](https://open.mp/docs/scripting/functions/UsePlayerGangZoneCheck): Enables the callback when a player entered this zone.
