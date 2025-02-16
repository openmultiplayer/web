---
title: OnPlayerStateChange
description: This callback is called when a player changes state.
tags: ["player"]
---

## Description

This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot.

| Name                  | Description                              |
| --------------------- | ---------------------------------------- |
| playerid              | The ID of the player that changed state. |
| PLAYER_STATE:newstate | The player's new state.                  |
| PLAYER_STATE:oldstate | The player's previous state.             |

Refer to [Player States](../resources/playerstates) for a list of all available player states.

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Player entered a vehicle as a driver
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Add NOS to the vehicle
    }
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnPlayerInteriorChange](OnPlayerInteriorChange): This callback is called when a player changes interior.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [GetPlayerState](../functions/GetPlayerState): Get a player's current state.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Get a player's current special action.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Set a player's special action.

## Related Resources

- [Player States](../resources/playerstates)
