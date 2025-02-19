---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: This callback is called when a player changes interior.
tags: ["player"]
---

## Description

This callback is called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building.

| Name          | Description                            |
| ------------- | -------------------------------------- |
| playerid      | The playerid who changed interior.     |
| newinteriorid | The interior the player is now in.     |
| oldinteriorid | The interior the player was in before. |

## Returns

It is always called first in gamemode.

## Examples

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "You went from interior %d to interior %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerStateChange](OnPlayerStateChange): This callback is called when a player changes state.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [SetPlayerInterior](../functions/SetPlayerInterior): Set a player's interior.
- [GetPlayerInterior](../functions/GetPlayerInterior): Get the current interior of a player.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Change the interior that a vehicle is seen in.
