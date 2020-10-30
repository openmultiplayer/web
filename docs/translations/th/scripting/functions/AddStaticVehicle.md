---
title: AddStaticVehicle
description: Adds a 'static' vehicle (models are pre-loaded for players) to the gamemode.
tags: ["vehicle"]
---

## คำอธิบาย

Adds a 'static' vehicle (models are pre-loaded for players) to the gamemode.

| Name                                                  | Description                            |
| ----------------------------------------------------- | -------------------------------------- |
| modelid                                               | The Model ID for the vehicle.          |
| Float:spawn_X                                         | The X-coordinate for the vehicle.      |
| Float:spawn_Y                                         | The Y-coordinate for the vehicle.      |
| Float:spawn_Z                                         | The Z-coordinate for the vehicle.      |
| Float:z_angle                                         | Direction of vehicle - angle.          |
| [color1](../../scripting/resources/vehiclecolorid.md) | The primary color ID. -1 for random.   |
| [color2](../../scripting/resources/vehiclecolorid.md) | The secondary color ID. -1 for random. |

## ส่งคืน

The vehicle ID of the vehicle created (between 1 and MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed).

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // Add a Hydra to the game
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AddStaticVehicleEx](../../scripting/functions/AddStaticVehicleEx.md): Add a static vehicle with custom respawn time.
- [CreateVehicle](../../scripting/functions/CreateVehicle.md): Create a vehicle.
- [DestroyVehicle](../../scripting/functions/DestroyVehicle.md): Destroy a vehicle.
