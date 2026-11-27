---
title: "PlayerSpectateVehicle | open.mp"
description: "Sets a player to spectate another vehicle."
canonical: https://open.mp/docs/scripting/functions/PlayerSpectateVehicle
language: en
---

# PlayerSpectateVehicle

## Description

Sets a player to spectate another vehicle. Their camera will be attached to the vehicle as if they are driving it.

| Name | Description |
| --- | --- |
| playerid | The ID of the player who should spectate a vehicle. |
| targetvehicleid | The ID of the vehicle the player should spectate. |
| SPECTATE\_MODE:mode | The spectate [mode](https://open.mp/docs/scripting/resources/spectatemodes). Can generally be left blank as it defaults to 'normal'. |

## Returns

**true** - The function was executed successfully. Note that success is reported if the player is not in spectator mode ([TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating)), but nothing will happen. TogglePlayerSpectating MUST be used first.

**false** - The function failed to execute. The player, vehicle, or both don't exist.

## Examples

```c
TogglePlayerSpectating(playerid, 1);
PlayerSpectateVehicle(playerid, vehicleid);
```

## Notes

warning

-   Order is CRITICAL! Ensure that you use [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating) before PlayerSpectateVehicle.
-   The playerid and vehicleid have to be in the same interior and virtual world for this function to work properly.

## Related Functions

-   [PlayerSpectatePlayer](https://open.mp/docs/scripting/functions/PlayerSpectatePlayer): Spectate a player.
-   [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating): Start or stop spectating.
-   [GetPlayerSpectateID](https://open.mp/docs/scripting/functions/GetPlayerSpectateID): Gets the ID of the player or vehicle the player is spectating (watching).
-   [GetPlayerSpectateType](https://open.mp/docs/scripting/functions/GetPlayerSpectateType): Gets the player's spectate type.

## Related Resources

-   [Spectate Modes](https://open.mp/docs/scripting/resources/spectatemodes)
