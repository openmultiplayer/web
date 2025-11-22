---
title: OnTrailerUpdate
sidebar_label: OnTrailerUpdate
description: This callback is called when a player sent a trailer update.
tags: []
---

## คำอธิบาย

This callback is called when a player sent a trailer update.

| Name      | Description                                    |
| --------- | ---------------------------------------------- |
| playerid  | The ID of the player who sent a trailer update |
| vehicleid | The Trailer being updated                      |

## ส่งคืน

0 - Cancels any trailer updates from being sent to other players. Update is still sent to the updating player.

1 - Processes the trailer update as normal and synchronizes it between all players.

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## บันทึก

:::warning

This callback is called very frequently per second per trailer. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Check what trailer a vehicle is pulling.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Attach a trailer to a vehicle.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Detach a trailer from a vehicle.
