---
title: AddStaticVehicleEx
description: Adds a 'static' vehicle (models are pre-loaded for players)to the gamemode.
tags: ["vehicle"]
---

## Description

Adds a 'static' vehicle (models are pre-loaded for players)to the gamemode. Differs from AddStaticVehicle in only one way: allows a respawn time to be set for when the vehicle is left unoccupied by the driver.

| Name                                     | Description                                                                                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| modelid                                  | The [Model ID](../resources/vehicleid) for the vehicle.                                                                                                                    |
| Float:spawn_X                            | The X-coordinate for the vehicle.                                                                                                                |
| Float:spawn_Y                            | The Y-coordinate for the vehicle.                                                                                                                |
| Float:spawn_Z                            | The Z-coordinate for the vehicle.                                                                                                                |
| Float:z_angle                            | The facing - angle for the vehicle.                                                                                                              |
| [color1](../resources/vehiclecolorid) | The primary color ID.                                                                                                                            |
| [color2](../resources/vehiclecolorid) | The secondary color ID.                                                                                                                          |
| respawn_delay                            | The delay until the car is respawned without a driver, in seconds.                                                                               |
| addsiren                                 | Added in 0.3.7; will not work in earlier versions. Has a default value 0. Enables the vehicle to have a siren, providing the vehicle has a horn. |

## Returns

The vehicle ID of the vehicle created (1 - MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed).

## Examples

```c
public OnGameModeInit()
{
    // Add a Hydra (520) to the game that will respawn 15 seconds after being left
    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## Related Functions

- [AddStaticVehicle](AddStaticVehicle): Add a static vehicle.
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
