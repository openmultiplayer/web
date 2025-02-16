---
title: OnVehicleSpawn
sidebar_label: OnVehicleSpawn
description: This callback is called when a vehicle respawns.
tags: ["vehicle"]
---

:::warning

This callback is called **only** when vehicle **re**spawns! CreateVehicle and AddStaticVehicle(Ex) **won't** trigger this callback.

:::

## คำอธิบาย

This callback is called when a vehicle respawns.

| Name      | Description                         |
| --------- | ----------------------------------- |
| vehicleid | The ID of the vehicle that spawned. |

## ส่งคืน

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehicle %i spawned!",vehicleid);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetVehicleToRespawn](../../scripting/functions/SetVehicleToRespawn.md): Respawn a vehicle.
- [CreateVehicle](../../scripting/functions/CreateVehicle.md): Create a vehicle.
