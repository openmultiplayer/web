---
title: AddStaticVehicle
sidebar_label: AddStaticVehicle
description: Adds a 'static' vehicle (models are pre-loaded for players) to the gamemode.
tags: ["vehicle"]
---

## Description

Adds a 'static' vehicle (models are pre-loaded for players) to the gamemode.

| Name                                   | Description                                             |
| -------------------------------------- | ------------------------------------------------------- |
| modelid                                | The [Model ID](../resources/vehicleid) for the vehicle. |
| Float:spawnX                           | The X-coordinate for the vehicle.                       |
| Float:spawnY                           | The Y-coordinate for the vehicle.                       |
| Float:spawnZ                           | The Z-coordinate for the vehicle.                       |
| Float:angle                            | Direction of vehicle - angle.                           |
| [colour1](../resources/vehiclecolorid) | The primary colour ID. -1 for random.                   |
| [colour2](../resources/vehiclecolorid) | The secondary colour ID. -1 for random.                 |

## Returns

The vehicle ID of the vehicle created (between 1 and MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed).

## Examples

```c
public OnGameModeInit()
{
    // Add a Hydra to the game
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## Related Functions

- [AddStaticVehicleEx](AddStaticVehicleEx): Add a static vehicle with custom respawn time.
- [CreateVehicle](CreateVehicle): Create a vehicle.
- [DestroyVehicle](DestroyVehicle): Destroy a vehicle.
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): Check whether a vehicle's siren is on or off.
- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): Adjusts vehicle model, spawn location, colours, respawn delay and interior.
- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): Gets the vehicle spawn location and colours.
- [ChangeVehicleColours](ChangeVehicleColours): Change a vehicle's primary and secondary colors.
- [GetVehicleColours](GetVehicleColours): Gets the vehicle colours.
- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): Set the respawn delay of a vehicle.
- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): Get the respawn delay of a vehicle.

## Related Callbacks

- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): Called when a vehicle respawns.
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): Called when a vehicle's siren is toggled on/off.

## Related Resources

- [Vehicle Models](../resources/vehicleid): Comprehensive list of all vehicle models available in game.
- [Vehicle Colour IDs](../resources/vehiclecolorid): List of all vehicle colour IDs.
