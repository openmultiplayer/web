---
title: "OnPlayerEnterVehicle | open.mp"
description: "This callback is called when a player starts to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerEnterVehicle
language: en
---

# OnPlayerEnterVehicle

## Description

This callback is called when a player **starts** to enter a vehicle, meaning the player is not in vehicle yet at the time this callback is called.

| Name | Description |
| --- | --- |
| playerid | ID of the player who attempts to enter a vehicle. |
| vehicleid | ID of the vehicle the player is attempting to enter. |
| ispassenger | 0 if entering as driver. 1 if entering as passenger. |

## Returns

This callback does not handle returns.

It is always called first in filterscripts.

## Examples

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "You are entering vehicle %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

note

-   This callback is called when a player **BEGINS** to enter a vehicle, not when they HAVE entered it. See [OnPlayerStateChange](https://open.mp/docs/scripting/callbacks/OnPlayerStateChange).
-   This callback is still called if the player is denied entry to a vehicle (e.g. it is locked or full) but only as a passenger.

## Related Callbacks

The following callbacks might be useful, as they are related to this callback in one way or another.

-   [OnPlayerExitVehicle](https://open.mp/docs/scripting/callbacks/OnPlayerExitVehicle): This callback is called when a player leaves a vehicle.
-   [OnPlayerStateChange](https://open.mp/docs/scripting/callbacks/OnPlayerStateChange): This callback is called when a player changes state.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [PutPlayerInVehicle](https://open.mp/docs/scripting/functions/PutPlayerInVehicle): Put a player in a vehicle.
-   [GetPlayerVehicleSeat](https://open.mp/docs/scripting/functions/GetPlayerVehicleSeat): Check what seat a player is in.
