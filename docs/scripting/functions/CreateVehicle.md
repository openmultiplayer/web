---
title: "CreateVehicle | open.mp"
description: "Creates a vehicle in the world."
canonical: https://open.mp/docs/scripting/functions/CreateVehicle
language: en
---

# CreateVehicle

## Description

Creates a vehicle in the world. Can be used in place of [AddStaticVehicleEx](https://open.mp/docs/scripting/functions/AddStaticVehicleEx) at any time in the script.

| Name | Description |
| --- | --- |
| [modelid](https://open.mp/docs/scripting/resources/vehicleid) | The model for the vehicle. |
| Float:spawnX | The X coordinate for the vehicle. |
| Float:spawnY | The Y coordinate for the vehicle. |
| Float:spawnZ | The Z coordinate for the vehicle. |
| Float:angle | The facing angle for the vehicle. |
| [colour1](https://open.mp/docs/scripting/resources/vehiclecolorid) | The primary color ID. |
| [colour2](https://open.mp/docs/scripting/resources/vehiclecolorid) | The secondary color ID. |
| respawnDelay | The delay until the car is respawned without a driver in **seconds**. Using **\-1** will prevent the vehicle from respawning. |
| bool:addSiren | Has a default value 'false'. Enables the vehicle to have a siren, providing the vehicle has a horn. |

## Returns

The vehicle ID of the vehicle created (1 to MAX\_VEHICLES).

**INVALID\_VEHICLE\_ID (65535)** if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed).

**0** if vehicle was not created (IDs 538 or 537 passed, which is trains).

## Examples

```c
public OnGameModeInit()
{
    // Add a Hydra (520) to the game with a respawn time of 60 seconds
    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);
    return 1;
}
```

## Notes

warning

Trains can only be added with [AddStaticVehicle](https://open.mp/docs/scripting/functions/AddStaticVehicle) and [AddStaticVehicleEx](https://open.mp/docs/scripting/functions/AddStaticVehicleEx).

## Related Functions

-   [DestroyVehicle](https://open.mp/docs/scripting/functions/DestroyVehicle): Destroy a vehicle.
-   [AddStaticVehicle](https://open.mp/docs/scripting/functions/AddStaticVehicle): Add a static vehicle.
-   [AddStaticVehicleEx](https://open.mp/docs/scripting/functions/AddStaticVehicleEx): Add a static vehicle with custom respawn time.
-   [GetVehicleParamsSirenState](https://open.mp/docs/scripting/functions/GetVehicleParamsSirenState): Check whether a vehicle's siren is on or off.
-   [SetVehicleSpawnInfo](https://open.mp/docs/scripting/functions/SetVehicleSpawnInfo): Adjusts vehicle model, spawn location, colours, respawn delay and interior.
-   [GetVehicleSpawnInfo](https://open.mp/docs/scripting/functions/GetVehicleSpawnInfo): Gets the vehicle spawn location and colours.
-   [ChangeVehicleColours](https://open.mp/docs/scripting/functions/ChangeVehicleColours): Change a vehicle's primary and secondary colors.
-   [GetVehicleColours](https://open.mp/docs/scripting/functions/GetVehicleColours): Gets the vehicle colours.
-   [SetVehicleRespawnDelay](https://open.mp/docs/scripting/functions/SetVehicleRespawnDelay): Set the respawn delay of a vehicle.
-   [GetVehicleRespawnDelay](https://open.mp/docs/scripting/functions/GetVehicleRespawnDelay): Get the respawn delay of a vehicle.

## Related Callbacks

-   [OnVehicleSpawn](https://open.mp/docs/scripting/callbacks/OnVehicleSpawn): Called when a vehicle respawns.
-   [OnVehicleSirenStateChange](https://open.mp/docs/scripting/callbacks/OnVehicleSirenStateChange): Called when a vehicle's siren is toggled on/off.

## Related Resources

-   [Vehicle Models](https://open.mp/docs/scripting/resources/vehicleid): Comprehensive list of all vehicle models available in game.
-   [Vehicle Colour IDs](https://open.mp/docs/scripting/resources/vehiclecolorid): List of all vehicle colour IDs.
