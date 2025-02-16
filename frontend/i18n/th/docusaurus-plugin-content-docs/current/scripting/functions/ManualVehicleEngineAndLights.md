---
title: ManualVehicleEngineAndLights
sidebar_label: ManualVehicleEngineAndLights
description: Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights.
tags: ["vehicle"]
---

## คำอธิบาย

Use this function before any player connects (OnGameModeInit) to tell all clients that the script will control vehicle engines and lights. This prevents the game automatically turning the engine on/off when players enter/exit vehicles and headlights automatically coming on when it is dark.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
public OnGameModeInit()
{
    ManualVehicleEngineAndLights();

    return 1;
}
```

## บันทึก

:::tip

Is it not possible to reverse this function after it has been used. You must either use it or not use it.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetVehicleParamsEx](../functions/SetVehicleParamsEx.md): Sets a vehicle's params for all players.
- [GetVehicleParamsEx](../functions/GetVehicleParamsEx.md): Get a vehicle's parameters.
- [SetVehicleParamsForPlayer](../functions/SetVehicleParamsForPlayer.md): Set the parameters of a vehicle for a player.
