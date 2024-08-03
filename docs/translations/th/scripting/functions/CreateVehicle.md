---
title: CreateVehicle
description: Creates a vehicle in the world.
tags: ["vehicle"]
---

## คำอธิบาย

Creates a vehicle in the world. Can be used in place of AddStaticVehicleEx at any time in the script.

| Name                                   | Description                                                                                                          |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [modelid](../resources/vehicleid)      | The model for the vehicle.                                                                                           |
| Float:spawnX                           | The X coordinate for the vehicle.                                                                                    |
| Float:spawnY                           | The Y coordinate for the vehicle.                                                                                    |
| Float:spawnZ                           | The Z coordinate for the vehicle.                                                                                    |
| Float:angle                            | The facing angle for the vehicle.                                                                                    |
| [colour1](../resources/vehiclecolorid) | The primary color ID.                                                                                                |
| [colour2](../resources/vehiclecolorid) | The secondary color ID.                                                                                              |
| respawnDelay                           | The delay until the car is respawned without a driver in seconds. Using -1 will prevent the vehicle from respawning. |
| bool:addSiren                          | Has a default value 'false'. Enables the vehicle to have a siren, providing the vehicle has a horn.                  |

## ส่งคืน

The vehicle ID of the vehicle created (1 to MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed).

0 if vehicle was not created (IDs 538 or 537 passed, which is trains).

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // Add a Hydra (520) to the game with a respawn time of 60 seconds
    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);
    return 1;
}
```

## บันทึก

:::warning

Trains can only be added with AddStaticVehicle and AddStaticVehicleEx.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [DestroyVehicle](DestroyVehicle): Destroy a vehicle.
- [AddStaticVehicle](AddStaticVehicle): Add a static vehicle.
- [AddStaticVehicleEx](AddStaticVehicleEx): Add a static vehicle with custom respawn time.
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
