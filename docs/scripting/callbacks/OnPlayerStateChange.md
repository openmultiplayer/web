---
id: OnPlayerStateChange
title: OnPlayerStateChange
description: This callback is called when a player changes state.
tags: ["player"]
---

## Description

This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player that changed state. |
| newstate | The player's new state.                  |
| oldstate | The player's previous state.             |

Refer to [Player States](../resources/playerstates.md) for a list of all available player states.

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if(oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Player entered a vehicle as a driver
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Add NOS to the vehicle
    }
    return 1;
}
```

## Notes

:::tip

This callback can also be called by NPC.

:::

## Related Functions

- [GetPlayerState](../functions/GetPlayerState.md): Get a player's current state.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction.md): Get a player's current special action.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction.md): Set a player's special action.
