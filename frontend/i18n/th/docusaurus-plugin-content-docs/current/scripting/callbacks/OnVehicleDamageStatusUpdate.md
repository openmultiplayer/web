---
title: OnVehicleDamageStatusUpdate
sidebar_label: OnVehicleDamageStatusUpdate
description: This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.
tags: ["vehicle"]
---

## คำอธิบาย

This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.

| Name      | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| vehicleid | The ID of the vehicle that was changed its damage status.                                              |
| playerid  | The ID of the player who synced the change in the damage status (who had the car damaged or repaired). |

## ส่งคืน

1 - Will prevent other filterscripts from receiving this callback.

0 - Indicates that this callback will be passed to the next filterscript.

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Get the damage status of all the components
    new panels, doors, lights, tires;
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

    // Set the tires to 0, which means none are popped
    tires = 0;

    // Update the vehicle's damage status with unpopped tires
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;
}
```

## บันทึก

:::tip

This does not include vehicle health changes

:::

:::tip

For some useful functions for working with vehicle damage values, see here.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetVehicleDamageStatus](../../scripting/functions/GetVehicleDamageStatus.md): Get the vehicle damage state for each part individually.
- [UpdateVehicleDamageStatus](../../scripting/functions/UpdateVehicleDamageStatus.md): Update the vehicle damage.
