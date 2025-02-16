---
title: OnPlayerFinishedDownloading
description: This callback is called when a player finishes downloading custom models.
tags: ["player"]
---

:::warning

Callback นี้ถูกเพิ่มใน SA-MP 0.3.DL R1 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

This callback is called when a player finishes downloading custom models. For more information on how to add custom models to your server, see the release thread and this tutorial.

| Name         | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| playerid     | The ID of the player that finished downloading custom models.                  |
| virtualworld | The ID of the virtual world the player finished downloading custom models for. |

## ส่งคืน

Callback นี้ไม่มีการส่งค่ากลับ

## ตัวอย่าง

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "Downloads finished.");
    return 1;
}
```

## บันทึก

:::tip

This callback is called every time a player changes virtual worlds, even if there are no custom models present in that world.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
