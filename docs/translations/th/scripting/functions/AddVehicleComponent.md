---
title: AddVehicleComponent
description: Adds a 'component' (often referred to as a 'mod' (modification)) to a vehicle.
tags: ["vehicle"]
---

## คำอธิบาย

Adds a 'component' (often referred to as a 'mod' (modification)) to a vehicle. Valid components can be found here.

| Name      | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to add the component to. Not to be confused with modelid. |

| |[componentid](../../scripting/resources/carcomponentid.md) | The ID of the component to add to the vehicle.|

## ส่งคืน

0 - The component was not added because the vehicle does not exist.

1 - The component was successfully added to the vehicle.

## ตัวอย่าง

```c
new gTAXI;

public OnGameModeInit()
{
    gTAXI = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi
    return 1;
}

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTAXI)
        {
            AddVehicleComponent(gTAXI, 1010); // Nitro
            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro added to the Taxi.");
        }
    }
    return 1;
}
```

## บันทึก

:::warning

Using an invalid component ID crashes the player's game. There are no internal checks for this.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [RemoveVehicleComponent](../../scripting/functions/RemoveVehicleComponent.md): Remove a component from a vehicle.
- [GetVehicleComponentInSlot](../../scripting/functions/GetVehicleComponentInSlot.md): Check what components a vehicle has.
- [GetVehicleComponentType](../../scripting/functions/GetVehicleComponentType.md): Check the type of component via the ID.
- [OnVehicleMod](../../scripting/callbacks/OnVehicleMod.md): Called when a vehicle is modded.
- [OnEnterExitModShop](../../scripting/callbacks/OnEnterExitModShop.md): Called when a vehicle enters or exits a mod shop.
