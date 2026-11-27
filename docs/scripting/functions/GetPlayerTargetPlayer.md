---
title: "GetPlayerTargetPlayer | open.mp"
description: "Check who a player is aiming at."
canonical: https://open.mp/docs/scripting/functions/GetPlayerTargetPlayer
language: en
---

# GetPlayerTargetPlayer

## Description

Check who a player is aiming at.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the target of. |

## Returns

The ID of the target player, or `INVALID_PLAYER_ID` if none.

## Examples

```c
public OnPlayerUpdate(playerid)
{
    // Store the ID
    new playerTargetId = GetPlayerTargetPlayer(playerid);
    if (playerTargetId != INVALID_PLAYER_ID && GetPlayerTeam(playerTargetId) == GetPlayerTeam(playerid))
    {
        GameTextForPlayer(playerid, "~R~do not shoot at team-mates!", 5000, 3);
    }
}
```

## Notes

warning

-   Does not work for joypads/controllers, and after a certain distance.
-   Does not work for the sniper rifle, as it doesn't lock on to anything and as such can't and won't return a player.

## Related Functions

-   [GetPlayerCameraFrontVector](https://open.mp/docs/scripting/functions/GetPlayerCameraFrontVector): Get the player's camera front vector

## Related Callbacks

-   [OnPlayerGiveDamage](https://open.mp/docs/scripting/callbacks/OnPlayerGiveDamage): This callback is called when a player gives damage.
-   [OnPlayerTakeDamage](https://open.mp/docs/scripting/callbacks/OnPlayerTakeDamage): This callback is called when a player takes damage.
