---
title: GetPlayerRaceCheckpoint
sidebar_label: GetPlayerRaceCheckpoint
description: دریافت موقعیت race checkpoint فعلی.
tags: ["player", "checkpoint", "racecheckpoint"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت موقعیت race checkpoint فعلی.

| نام           | توضیحات                                                                        |
| -------------- | ---------------------------------------------------------------------------------- |
| playerid       | ID بازیکن برای دریافت موقعیت checkpoint.                            |
| &Float:centreX | متغیر float برای ذخیره مختصات centreX، به صورت reference پاس داده می‌شود. |
| &Float:centreY | متغیر float برای ذخیره مختصات centreY، به صورت reference پاس داده می‌شود. |
| &Float:centreZ | متغیر float برای ذخیره مختصات centreZ، به صورت reference پاس داده می‌شود. |
| &Float:nextX   | متغیر float برای ذخیره مختصات nextX، به صورت reference پاس داده می‌شود.   |
| &Float:nextY   | متغیر float برای ذخیره مختصات nextY، به صورت reference پاس داده می‌شود.   |
| &Float:nextZ   | متغیر float برای ذخیره مختصات nextZ، به صورت reference پاس داده می‌شود.   |
| &Float:radius  | متغیر float برای ذخیره شعاع، به صورت reference پاس داده می‌شود.             |

## مقادیر برگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 373.1631, 2502.4644, 16.4774, 269.8644, 2503.4963, 16.4774, 2.0);

new Float:centreX,
    Float:centreY,
    Float:centreZ,
    Float:nextX,
    Float:nextY,
    Float:nextZ,
    Float:radius;

GetPlayerRaceCheckpoint(playerid, centreX, centreY, centreZ, nextX, nextY, nextZ, radius);
```

## توابع مرتبط

- [SetPlayerCheckpoint](SetPlayerCheckpoint): ایجاد checkpoint برای بازیکن.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): غیرفعال کردن checkpoint فعلی بازیکن.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): بررسی اینکه آیا بازیکن در checkpoint است.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): ایجاد race checkpoint برای بازیکن.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): غیرفعال کردن race checkpoint فعلی بازیکن.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): بررسی اینکه آیا بازیکن در race checkpoint است.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): بررسی اینکه آیا بازیکن در حال حاضر race checkpoint قابل مشاهده دارد.

## کالبک‌های مرتبط

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): زمانی که بازیکن وارد checkpoint می‌شود فراخوانی می‌شود.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): زمانی که بازیکن checkpoint را ترک می‌کند فراخوانی می‌شود.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): زمانی که بازیکن وارد race checkpoint می‌شود فراخوانی می‌شود.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): زمانی که بازیکن race checkpoint را ترک می‌کند فراخوانی می‌شود.