---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: Called when a player previews a vehicle paintjob inside a mod shop.
tags: ["vehicle"]
---

## คำอธิบาย

Called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob.

| Name       | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| playerid   | The ID of the player that changed the paintjob of their vehicle. |
| vehicleid  | The ID of the vehicle that had its paintjob changed.             |
| paintjobid | The ID of the new paintjob.                                      |

## ส่งคืน

It is always called first in gamemode so returning 0 there blocks other filterscripts from seeing it.

## ตัวอย่าง

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "You have changed your vehicle's paintjob to %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## บันทึก

:::tip

This callback is not called by ChangeVehiclePaintjob. You might use OnVehicleChangePaintjob from vSync in order to know when the player buys the paintjob.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [ChangeVehiclePaintjob](../../scripting/functions/ChangeVehiclePaintjob.md): Change the paintjob on a vehicle.
- [ChangeVehicleColor](../../scripting/functions/ChangeVehicleColor.md): Set the color of a vehicle.
- [OnVehicleRespray](../../scripting/callbacks/OnVehicleRespray.md): Called when a vehicle is resprayed.
- [OnVehicleMod](../../scripting/callbacks/OnVehicleMod.md): Called when a vehicle is modded.
