---
id: ManualVehicleEngineAndLights
title: ManualVehicleEngineAndLights
description: Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights.
tags: ["vehicle"]
---

:::warning

This Function was added in SA-MP 0.3c and will not work in earlier versions!

:::

## Description

Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights. This prevents the game automatically turning the engine on/off when players enter/exit vehicles and headlights automatically coming on when it is dark.

## Examples

```c
public OnGameModeInit()
{
    ManualVehicleEngineAndLights();

    return 1;
}
```

## Notes

:::tip

Is it not possible to reverse this function after it has been used. You must either use it or not use it.

:::

## Related Functions

- [SetVehicleParamsEx](SetVehicleParamsEx.md): Sets a vehicle's params for all players.
- [GetVehicleParamsEx](GetVehicleParamsEx.md): Get a vehicle's parameters.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer.md): Set the parameters of a vehicle for a player.
