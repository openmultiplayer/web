---
title: "GetPlayerSpectateType | open.mp"
description: "Returns the player's spectate type (vehicle or player)."
canonical: https://open.mp/docs/scripting/functions/GetPlayerSpectateType
language: en
---

# GetPlayerSpectateType

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Returns the player's spectate type (vehicle or player).

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |

## Returns

Returns the player's [spectate type](https://open.mp/docs/scripting/resources/spectatetypes).

## Examples

```c
new spectateType = GetPlayerSpectateType(playerid);

if (spectateType == 1)
{
    SendClientMessage(playerid, -1, "You are spectating a vehicle.");
}
else if (spectateType == 2)
{
    SendClientMessage(playerid, -1, "You are spectating a player.");
}
```

## Related Functions

-   [PlayerSpectatePlayer](https://open.mp/docs/scripting/functions/PlayerSpectatePlayer): Spectate a player.
-   [PlayerSpectateVehicle](https://open.mp/docs/scripting/functions/PlayerSpectateVehicle): Spectate a vehicle.
-   [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating): Start or stop spectating.
-   [GetPlayerSpectateID](https://open.mp/docs/scripting/functions/GetPlayerSpectateID): Gets the ID of the player or vehicle the player is spectating (watching).

## Related Resources

-   [Spectate Types](https://open.mp/docs/scripting/resources/spectatetypes).
