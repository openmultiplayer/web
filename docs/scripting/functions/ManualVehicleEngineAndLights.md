---
title: "ManualVehicleEngineAndLights | open.mp"
description: "Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights."
canonical: https://open.mp/docs/scripting/functions/ManualVehicleEngineAndLights
language: en
---

# ManualVehicleEngineAndLights

## Description

Use this function before any player connects ([OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit)) to tell all clients that the script will control vehicle engines and lights. This prevents the game automatically turning the engine on/off when players enter/exit vehicles and headlights automatically coming on when it is dark.

## Returns

This function always returns **true**. It cannot fail to execute.

## Examples

```c
public OnGameModeInit()
{
    ManualVehicleEngineAndLights();
    return 1;
}
```

## Notes

note

Is it not possible to reverse this function after it has been used. You must either use it or not use it.

tip

You can also enable or disable this function via [config.json](https://open.mp/docs/server/config.json)

```json
"use_manual_engine_and_lights": true,
```

## Related Functions

-   [SetVehicleParamsEx](https://open.mp/docs/scripting/functions/SetVehicleParamsEx): Sets a vehicle's params for all players.
-   [GetVehicleParamsEx](https://open.mp/docs/scripting/functions/GetVehicleParamsEx): Get a vehicle's parameters.
-   [SetVehicleParamsForPlayer](https://open.mp/docs/scripting/functions/SetVehicleParamsForPlayer): Set the parameters of a vehicle for a player.
