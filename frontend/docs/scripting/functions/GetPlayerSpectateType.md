---
title: GetPlayerSpectateType
sidebar_label: GetPlayerSpectateType
description: Returns the player's spectate type (vehicle or player).
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Returns the player's spectate type (vehicle or player).

| Name     | Description           |
| -------- | --------------------- |
| playerid | The ID of the player. |

## Returns

Returns the player's [spectate type](../resources/spectatetypes).

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

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Spectate a player.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): Spectate a vehicle.
- [TogglePlayerSpectating](TogglePlayerSpectating): Start or stop spectating.
- [GetPlayerSpectateID](GetPlayerSpectateID): Gets the ID of the player or vehicle the player is spectating (watching).

## Related Resources

- [Spectate Types](../resources/spectatetypes).
