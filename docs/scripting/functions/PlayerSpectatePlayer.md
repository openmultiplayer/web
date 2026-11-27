---
title: "PlayerSpectatePlayer | open.mp"
description: "Makes a player spectate (watch) another player."
canonical: https://open.mp/docs/scripting/functions/PlayerSpectatePlayer
language: en
---

# PlayerSpectatePlayer

## Description

Makes a player spectate (watch) another player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that will spectate. |
| targetplayerid | The ID of the player that should be spectated. |
| SPECTATE\_MODE:mode | The [mode](https://open.mp/docs/scripting/resources/spectatemodes) to spectate with (optional; defaults to 'normal'). |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. One of the players specified does not exist.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, 1);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## Notes

warning

-   Order is CRITICAL! Ensure that you use [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating) before PlayerSpectatePlayer.
-   playerid and targetplayerid's [virtual world](https://open.mp/docs/scripting/functions/SetPlayerVirtualWorld) and [interior](https://open.mp/docs/scripting/functions/SetPlayerInterior) must be the same for this function to work properly.

## Related Functions

-   [PlayerSpectateVehicle](https://open.mp/docs/scripting/functions/PlayerSpectateVehicle): Spectate a vehicle.
-   [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating): Start or stop spectating.
-   [GetPlayerSpectateID](https://open.mp/docs/scripting/functions/GetPlayerSpectateID): Gets the ID of the player or vehicle the player is spectating (watching).
-   [GetPlayerSpectateType](https://open.mp/docs/scripting/functions/GetPlayerSpectateType): Gets the player's spectate type.

## Related Resources

-   [Spectate Modes](https://open.mp/docs/scripting/resources/spectatemodes)
