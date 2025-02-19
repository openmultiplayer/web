---
title: OnVehicleDeath
sidebar_label: OnVehicleDeath
description: This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.
tags: ["vehicle"]
---

## คำอธิบาย

This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.

| Name      | Description                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle that was destroyed.                                                                                                                       |
| killerid  | The ID of the player that reported (synced) the vehicle's destruction (name is misleading). Generally the driver or a passenger (if any) or the closest player. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "Vehicle %i was destroyed. Reported by player %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## บันทึก

:::tip

This callback will also be called when a vehicle enters water, but the vehicle can be saved from destruction by teleportation or driving out (if only partially submerged). The callback won't be called a second time, and the vehicle may disappear when the driver exits, or after a short time.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetVehicleHealth](../../scripting/functions/SetVehicleHealth.md): Set the health of a vehicle.
