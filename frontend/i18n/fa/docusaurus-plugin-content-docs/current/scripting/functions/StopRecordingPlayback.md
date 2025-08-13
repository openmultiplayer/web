---
title: StopRecordingPlayback
sidebar_label: StopRecordingPlayback
description: این تابع فایل .rec فعلی که توسط NPC در حال اجرا است را متوقف می‌کند و باعث می‌شود که تا زمان دریافت دستور دیگری بیکار بماند.
tags: []
---

## توضیحات

این تابع فایل .rec فعلی که توسط NPC در حال اجرا است را متوقف می‌کند و باعث می‌شود که تا زمان دریافت دستور دیگری بیکار بماند.


## مثال‌ها

```c
public OnNPCExitVehicle(vehicleid, seatid)
{
    StopRecordingPlayback();
}
```

## توابع مرتبط

- [StartRecordingPlayback](../functions/StartRecordingPlayback): پخش فایل .rec را متوقف می‌کند.