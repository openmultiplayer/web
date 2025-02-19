---
title: GetPlayerSpectateID
sidebar_label: GetPlayerSpectateID
description: Gets the ID of the player or vehicle the player is spectating (watching).
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the ID of the player or vehicle the player is spectating (watching).

| Name     | Description           |
|----------|-----------------------|
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

:::info

See [spectate types](../resources/spectatetypes).

:::

## Related Functions

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Spectate a player.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): Spectate a vehicle.
- [TogglePlayerSpectating](TogglePlayerSpectating): Start or stop spectating.
- [GetPlayerSpectateType](GetPlayerSpectateType): Gets the player's spectate type.

## Related Resources

- [Spectate Types](../resources/spectatetypes).
