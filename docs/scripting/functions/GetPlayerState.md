---
title: "GetPlayerState | open.mp"
description: "Get a player's current state."
canonical: https://open.mp/docs/scripting/functions/GetPlayerState
language: en
---

# GetPlayerState

## Description

Get a player's current [state](https://open.mp/docs/scripting/resources/playerstates).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the current state of. |

## Returns

The player's current **state** as an integer (see: [Player States](https://open.mp/docs/scripting/resources/playerstates)).

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new PLAYER_STATE:playerState = GetPlayerState(killerid); // Get the killer's state

    if (playerState == PLAYER_STATE_DRIVER) // If the killer was in a vehicle
    {
        //It's a driver drive-by, take some money
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```

## Related Functions

-   [GetPlayerSpecialAction](https://open.mp/docs/scripting/functions/GetPlayerSpecialAction): Get a player's current special action.
-   [SetPlayerSpecialAction](https://open.mp/docs/scripting/functions/SetPlayerSpecialAction): Set a player's special action.

## Related Callbacks

-   [OnPlayerStateChange](https://open.mp/docs/scripting/callbacks/OnPlayerStateChange): Called when a player changes state.

## Related Resources

-   [Player States](https://open.mp/docs/scripting/resources/playerstates)
