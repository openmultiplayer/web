---
title: "OnPlayerStateChange | open.mp"
description: "This callback is called when a player changes state."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerStateChange
language: en
---

# OnPlayerStateChange

## Description

This callback is called when a player changes [state](https://open.mp/docs/scripting/resources/playerstates). For example, when a player changes from being the driver of a vehicle to being on-foot.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that changed state. |
| PLAYER\_STATE:newstate | The player's new state. |
| PLAYER\_STATE:oldstate | The player's previous state. |

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

note

This callback can also be called by NPC.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerInteriorChange](https://open.mp/docs/scripting/callbacks/OnPlayerInteriorChange): This callback is called when a player changes interior.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [GetPlayerState](https://open.mp/docs/scripting/functions/GetPlayerState): Get a player's current state.
-   [GetPlayerSpecialAction](https://open.mp/docs/scripting/functions/GetPlayerSpecialAction): Get a player's current special action.
-   [SetPlayerSpecialAction](https://open.mp/docs/scripting/functions/SetPlayerSpecialAction): Set a player's special action.

## Related Resources

-   [Player States](https://open.mp/docs/scripting/resources/playerstates)
