---
title: OnVehicleMod
sidebar_label: OnVehicleMod
description: This callback is called when a vehicle is modded.
tags: ["vehicle"]
---

## คำอธิบาย

This callback is called when a vehicle is modded.

| Name        | Description                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | The ID of the driver of the vehicle.                    |
| vehicleid   | The ID of the vehicle which is modded.                  |
| componentid | The ID of the component which was added to the vehicle. |

## ส่งคืน

It is always called first in gamemode so returning 0 there also blocks other filterscripts from seeing it.

## ตัวอย่าง

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Vehicle %d was modded by ID %d with the componentid %d",vehicleid, playerid,componentid);
    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Anti-tuning hacks script
        return 0; // Prevents the bad modification from being synced to other players
        //(Tested and it works even on servers wich allow you to mod your vehicle using commands, menus, dialogs, etc..
    }
    return 1;
}
```

## บันทึก

:::tip

This callback is NOT called by AddVehicleComponent.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AddVehicleComponent](../../scripting/functions/AddVehicleComponent.md): Add a component to a vehicle.
- [OnEnterExitModShop](../../scripting/callbacks/OnEnterExitModShop.md): Called when a vehicle enters or exits a mod shop.
- [OnVehiclePaintjob](../../scripting/callbacks/OnVehiclePaintjob.md): Called when a vehicle's paintjob is changed.
- [OnVehicleRespray](../../scripting/callbacks/OnVehicleRespray.md): Called when a vehicle is resprayed.
