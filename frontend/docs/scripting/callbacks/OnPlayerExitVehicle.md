---
title: OnPlayerExitVehicle
description: This callback is called when a player starts to exit a vehicle.
tags: ["player", "vehicle"]
---

## Description

This callback is called when a player starts to exit a vehicle.

| Name      | Description                                     |
| --------- | ----------------------------------------------- |
| playerid  | The ID of the player that is exiting a vehicle. |
| vehicleid | The ID of the vehicle the player is exiting.    |

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

:::warning

- Not called if the player falls off a bike or is removed from a vehicle by other means such as using [SetPlayerPos](../functions/SetPlayerPos).
- You must use [OnPlayerStateChange](OnPlayerStateChange) and check if their old state is `PLAYER_STATE_DRIVER` or `PLAYER_STATE_PASSENGER` and their new state is `PLAYER_STATE_ONFOOT`.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerEnterVehicle](OnPlayerEnterVehicle): This callback is called when a player starts to enter a vehicle.
- [OnPlayerStateChange](OnPlayerStateChange): This callback is called when a player changes state.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Throw a player out of their vehicle.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Check what seat a player is in.
