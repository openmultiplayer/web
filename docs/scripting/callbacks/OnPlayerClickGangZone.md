---
title: "OnPlayerClickGangZone | open.mp"
description: "This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking)."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerClickGangZone
language: en
---

# OnPlayerClickGangZone

warning

This callback was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).

| Name | Description |
| --- | --- |
| playerid | The ID of the player that clicked a gangzone |
| zoneid | The ID of the gangzone the player clicked |

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

-   [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate): Create a gangzone (colored radar area).
-   [GangZoneDestroy](https://open.mp/docs/scripting/functions/GangZoneDestroy): Destroy a gangzone.
