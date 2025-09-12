---
title: ChangeVehiclePaintjob
sidebar_label: ChangeVehiclePaintjob
description: طرح رنگ وسیله نقلیه را تغییر می‌دهد.
tags: ["vehicle"]
---

## توضیحات

طرح رنگ وسیله نقلیه را تغییر می‌دهد (برای رنگ‌های ساده [ChangeVehicleColor](ChangeVehicleColor) را ببینید).

| نام       | توضیحات                                                                               |
| --------- | -------------------------------------------------------------------------------------- |
| vehicleid | شناسه وسیله نقلیه برای تغییر طرح رنگ.                                     |
| paintjob  | شناسه [Paintjob](../resources/paintjobs) برای اعمال. از 3 برای حذف paintjob استفاده کنید. |

## مقادیر بازگشتی

این تابع همیشه **true** (موفقیت) برمی‌گرداند، حتی اگر وسیله نقلیه پاس داده شده ایجاد نشده باشد.

## مثال‌ها

```c
new rand = random(3); // یا 0، 1 یا 2 خواهد بود (همه معتبر)
new vehicleid = GetPlayerVehicleID(playerid);

ChangeVehicleColor(vehicleid, 1, 1); // مطمئن شدن که سفید است برای نتیجه بهتر
ChangeVehiclePaintjob(vehicleid, rand); // طرح رنگ وسیله نقلیه فعلی بازیکن را به یکی تصادفی تغییر می‌دهد
```

## نکات

:::warning

اگر رنگ وسیلع نقلیه سیاه باشد، paintjob ممکن است قابل رؤیت نباشد. بهتر است قبل از اعمال paintjob، وسیله نقلیه را سفید کنید:

```c
ChangeVehicleColor(vehicleid, 1, 1);
```

:::

## توابع مرتبط

- [GetVehiclePaintjob](GetVehiclePaintjob): شناسه paintjob وسیله نقلیه را دریافت می‌کند.
- [ChangeVehicleColor](ChangeVehicleColor): رنگ وسیله نقلیه را تنظیم می‌کند.

## کالبک‌های مرتبط

- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): زمانی که paintjob وسیله نقلیه تغییر کند فراخوانی می‌شود.

## منابع مرتبط

- [Vehicle Paintjob IDs](../resources/paintjobs)
