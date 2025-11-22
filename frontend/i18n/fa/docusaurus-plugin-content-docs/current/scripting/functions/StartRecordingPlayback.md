---
title: StartRecordingPlayback
sidebar_label: StartRecordingPlayback
description: این تابع یک فایل .rec را اجرا می‌کند که باید در پوشه npcmodes/recordings ذخیره شده باشد. این فایل‌ها به NPC اجازه می‌دهند تا اعمال خاصی را دنبال کنند. اعمال آن‌ها می‌تواند به صورت دستی ضبط شود. برای اطلاعات بیشتر، توابع مرتبط را بررسی کنید.
tags: []
---

## توضیحات

این تابع یک فایل .rec را اجرا می‌کند که باید در پوشه npcmodes/recordings ذخیره شده باشد. این فایل‌ها به NPC اجازه می‌دهند تا اعمال خاصی را دنبال کنند. اعمال آن‌ها می‌تواند به صورت دستی ضبط شود. برای اطلاعات بیشتر، توابع مرتبط را بررسی کنید.

| نام          | توضیحات                                                         |
| ------------ | -------------------------------------------------------------- |
| playbacktype | [نوع](../resources/recordtypes) ضبط که باید بارگذاری شود.       |
| recordname[] | نام فایلی که باید بارگذاری شود، بدون پسوند .rec.                |

## مثال‌ها

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "at400_lv_to_sf_x1");
}
```

## توابع مرتبط

- [StopRecordingPlayback](StopRecordingPlayback): پخش فایل .rec را متوقف می‌کند.