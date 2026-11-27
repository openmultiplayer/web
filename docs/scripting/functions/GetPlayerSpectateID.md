---
title: "GetPlayerSpectateID | open.mp"
description: "Gets the ID of the player or vehicle the player is spectating (watching)."
canonical: https://open.mp/docs/scripting/functions/GetPlayerSpectateID
language: en
---

# GetPlayerSpectateID

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the ID of the player or vehicle the player is spectating (watching).

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |

## Returns

Returns the ID of the player or vehicle.

## Examples

```c
new spectateType = GetPlayerSpectateType(playerid);

if (spectateType == 1)
{
    new spectateVehicleId = GetPlayerSpectateID(playerid);
}
else if (spectateType == 2)
{
    new spectatePlayerId = GetPlayerSpectateID(playerid);
}
```

## Notes

info

See [spectate types](https://open.mp/docs/scripting/resources/spectatetypes).

## Related Functions

-   [PlayerSpectatePlayer](https://open.mp/docs/scripting/functions/PlayerSpectatePlayer): Spectate a player.
-   [PlayerSpectateVehicle](https://open.mp/docs/scripting/functions/PlayerSpectateVehicle): Spectate a vehicle.
-   [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating): Start or stop spectating.
-   [GetPlayerSpectateType](https://open.mp/docs/scripting/functions/GetPlayerSpectateType): Gets the player's spectate type.

## Related Resources

-   [Spectate Types](https://open.mp/docs/scripting/resources/spectatetypes).
