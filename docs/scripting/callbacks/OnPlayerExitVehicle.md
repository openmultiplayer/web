---
title: "OnPlayerExitVehicle | open.mp"
description: "This callback is called when a player starts to exit a vehicle."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerExitVehicle
language: en
---

# OnPlayerExitVehicle

## Description

This callback is called when a player **starts** to exit a vehicle.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that is exiting a vehicle. |
| vehicleid | The ID of the vehicle the player is exiting. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[64];
    format(string, sizeof(string), "INFO: You are exiting vehicle %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

warning

-   Not called if the player falls off a bike or is removed from a vehicle by other means such as using [SetPlayerPos](https://open.mp/docs/scripting/functions/SetPlayerPos).
-   You must use [OnPlayerStateChange](https://open.mp/docs/scripting/callbacks/OnPlayerStateChange) and check if their old state is `PLAYER_STATE_DRIVER` or `PLAYER_STATE_PASSENGER` and their new state is `PLAYER_STATE_ONFOOT`.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerEnterVehicle](https://open.mp/docs/scripting/callbacks/OnPlayerEnterVehicle): This callback is called when a player starts to enter a vehicle.
-   [OnPlayerStateChange](https://open.mp/docs/scripting/callbacks/OnPlayerStateChange): This callback is called when a player changes state.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [RemovePlayerFromVehicle](https://open.mp/docs/scripting/functions/RemovePlayerFromVehicle): Throw a player out of their vehicle.
-   [GetPlayerVehicleSeat](https://open.mp/docs/scripting/functions/GetPlayerVehicleSeat): Check what seat a player is in.
