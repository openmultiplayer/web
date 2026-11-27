---
title: "RemovePlayerFromVehicle | open.mp"
description: "Removes/ejects a player from their vehicle."
canonical: https://open.mp/docs/scripting/functions/RemovePlayerFromVehicle
language: en
---

# RemovePlayerFromVehicle

## Description

Removes/ejects a player from their vehicle.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to remove from their vehicle. |
| bool:force | Force remove from vehicle instantly. (default: `false`) |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
// Example - Players can only drive vehicles if they have 10 score.
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PlAYER_STATE_DRIVER = 2
    {
        RemovePlayerFromVehicle(playerid);
    }
    return 1;
}
```

## Notes

note

-   The exiting animation is not synced for other players.
-   This function will not work when used in [OnPlayerEnterVehicle](https://open.mp/docs/scripting/callbacks/OnPlayerEnterVehicle), because the player isn't in the vehicle when the callback is called. Use [OnPlayerStateChange](https://open.mp/docs/scripting/callbacks/OnPlayerStateChange) instead (see the example above).
-   If the player is in an RC vehicle, they will not be removed. (Use `.force = true` parameter or [ClearAnimations](https://open.mp/docs/scripting/functions/ClearAnimations) function)

## Related Functions

-   [PutPlayerInVehicle](https://open.mp/docs/scripting/functions/PutPlayerInVehicle): Put a player in a vehicle.
