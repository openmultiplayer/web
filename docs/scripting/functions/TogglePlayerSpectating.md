---
title: "TogglePlayerSpectating | open.mp"
description: "Toggle whether a player is in spectator mode or not."
canonical: https://open.mp/docs/scripting/functions/TogglePlayerSpectating
language: en
---

# TogglePlayerSpectating

## Description

Toggle whether a player is in spectator mode or not. While in spectator mode a player can spectate (watch) other players and vehicles. After using this function, either [PlayerSpectatePlayer](https://open.mp/docs/scripting/functions/PlayerSpectatePlayer) or [PlayerSpectateVehicle](https://open.mp/docs/scripting/functions/PlayerSpectateVehicle) needs to be used.

## Parameters

| Name | Description |
| --- | --- |
| playerid | The ID of the player who should spectate. |
| bool:toggle | **true** to enable spectating and **false** to disable. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player does not exist.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, true);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## Notes

note

When spectator mode is disabled, [OnPlayerSpawn](https://open.mp/docs/scripting/callbacks/OnPlayerSpawn) will automatically be called, if you wish to restore player to state before spectating, you will have to handle that in OnPlayerSpawn. Note also, that player can also go to class selection before if they used F4 during spectate, a player also CAN die in spectate mode due to various glitches.

tip

When a player is in spectate mode their HUD is hidden, making it useful for setting a player's camera without the HUD. Also, objects near the player's camera will be streamed in, making this useful for [interpolating cameras](https://open.mp/docs/scripting/functions/InterpolateCameraPos).

warning

If the player is not loaded in before setting the spectate status to false, the connection can be closed unexpectedly.

## Related Functions

-   [PlayerSpectatePlayer](https://open.mp/docs/scripting/functions/PlayerSpectatePlayer): Spectate a player.
-   [PlayerSpectateVehicle](https://open.mp/docs/scripting/functions/PlayerSpectateVehicle): Spectate a vehicle.
