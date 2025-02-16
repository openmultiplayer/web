---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: Called when a vehicle is streamed to a player's client.
tags: ["vehicle"]
---

## คำอธิบาย

Called when a vehicle is streamed to a player's client.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| vehicleid   | The ID of the vehicle that streamed in for the player. |
| forplayerid | The ID of the player who the vehicle streamed in for.  |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
