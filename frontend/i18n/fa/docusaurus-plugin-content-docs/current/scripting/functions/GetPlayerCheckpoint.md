---
title: GetPlayerCheckpoint
sidebar_label: GetPlayerCheckpoint
description: موقعیت چک‌پوینت فعلی را دریافت کنید.
tags: ["player", "checkpoint"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

موقعیت چک‌پوینت فعلی را دریافت کنید.

| نام            | توضیحات                                                                            |
| -------------- | ---------------------------------------------------------------------------------- |
| playerid       | شناسه بازیکنی که می‌خواهید موقعیت چک‌پوینت او را دریافت کنید.                        |
| &Float:centreX | یک متغیر اعشاری برای ذخیره مختصات centreX، به صورت مرجع پاس داده می‌شود. |
| &Float:centreY | یک متغیر اعشاری برای ذخیره مختصات centreY، به صورت مرجع پاس داده می‌شود. |
| &Float:centreZ | یک متغیر اعشاری برای ذخیره مختصات centreZ، به صورت مرجع پاس داده می‌شود. |
| &Float:radius  | یک متغیر اعشاری برای ذخیره شعاع، به صورت مرجع پاس داده می‌شود.             |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
SetPlayerCheckpoint(playerid, 408.9874, 2537.8059, 16.5455, 1.5);

new Float:centreX,
    Float:centreY,
    Float:centreZ,
    Float:radius;

GetPlayerCheckpoint(playerid, centreX, centreY, centreZ, radius);
```

## تابع‌های مرتبط

- [SetPlayerCheckpoint](SetPlayerCheckpoint): یک چک‌پوینت برای بازیکن ایجاد کنید.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): چک‌پوینت فعلی بازیکن را غیرفعال کنید.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): بررسی کنید آیا بازیکن در چک‌پوینت است.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): بررسی کنید آیا بازیکن در حال حاضر چک‌پوینت قابل مشاهده‌ای دارد.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): یک چک‌پوینت مسابقه برای بازیکن ایجاد کنید.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): چک‌پوینت مسابقه فعلی بازیکن را غیرفعال کنید.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): بررسی کنید آیا بازیکن در چک‌پوینت مسابقه است.

## callback های مرتبط

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): زمانی فراخوانی می‌شود که بازیکن وارد چک‌پوینت شود.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): زمانی فراخوانی می‌شود که بازیکن چک‌پوینت را ترک کند.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): زمانی فراخوانی می‌شود که بازیکن وارد چک‌پوینت مسابقه شود.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): زمانی فراخوانی می‌شود که بازیکن چک‌پوینت مسابقه را ترک کند.