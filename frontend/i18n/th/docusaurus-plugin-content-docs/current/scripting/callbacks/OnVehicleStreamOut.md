---
title: OnVehicleStreamOut
description: This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).
tags: ["vehicle"]
---

## คำอธิบาย

This callback is called when a vehicle is streamed out for a player's client (it's so far away that they can't see it).

| Name        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | The ID of the vehicle that streamed out.                     |
| forplayerid | The ID of the player who is no longer streaming the vehicle. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
