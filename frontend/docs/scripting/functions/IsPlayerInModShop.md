---
title: IsPlayerInModShop
sidebar_label: IsPlayerInModShop
description: Check if the player is in the mod shop.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Check if the player is in the mod shop.

## Parameters

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Return Values

**true** - Player is in mod shop.

**false** - Player is not in mod shop.

## Examples

```c
if (IsPlayerInModShop(playerid))
{
    SendClientMessage(playerid, 0xFFFF00FF, "You are in the mod shop.");
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "You are not in the mod shop.");
}
```

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [AddVehicleComponent](AddVehicleComponent): Add a component to a vehicle.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnVehicleMod](../callbacks/OnVehicleMod): This callback is called when a vehicle is modded.
- [OnVehicleRespray](../callbacks/OnVehicleRespray): This callback is called when a player exits a mod shop, even if the colors weren't changed.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): This callback is called when a player previews a vehicle paintjob inside a mod shop.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): This callback is called when a player enters or exits a mod shop.
