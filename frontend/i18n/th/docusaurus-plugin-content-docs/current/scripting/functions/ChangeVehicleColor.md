---
title: ChangeVehicleColor
sidebar_label: ChangeVehicleColor
description: Change a vehicle's primary and secondary colors.
tags: ["vehicle"]
---

## คำอธิบาย

Change a vehicle's primary and secondary colors.

| Name      | Description                                    |
| --------- | ---------------------------------------------- |
| vehicleid | The ID of the vehicle to change the colors of. |
| color1    | The new vehicle's primary Color ID.            |
| color2    | The new vehicle's secondary Color ID.          |

## ส่งคืน

1: The function executed successfully. The vehicle's color was successfully changed.

0: The function failed to execute. The vehicle does not exist.

## ตัวอย่าง

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // Change the primary color to black and the secondary color to white
    ChangeVehicleColor(vehicleid, 0, 1);
    return 1;
}
```

## บันทึก

:::tip

Some vehicles have only a primary color and some can not have the color changed at all. A few (cement, squallo) have 4 colors, of which 2 can not be changed in SA:MP

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [ChangeVehiclePaintjob](../../scripting/functions/ChangeVehiclePaintjob.md): Change the paintjob on a vehicle.
- [OnVehicleRespray](../../scripting/callbacks/OnVehicleRespray.md): Called when a vehicle is resprayed.
