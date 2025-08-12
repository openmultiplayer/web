---
title: GetPlayerObjectAttachedData
sidebar_label: GetPlayerObjectAttachedData
description: دریافت داده‌های اتصال یک player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت داده‌های اتصال یک player-object.

| نام           | توضیحات                                                             |
|----------------|-------------------------------------------------------------------------|
| playerid       | ID بازیکن                                                    |
| objectid       | ID player-object برای دریافت داده‌های اتصالش               |
| &parentVehicle | متغیری برای ذخیره ID parentVehicle، به صورت reference پاس داده می‌شود. |
| &parentObject  | متغیری برای ذخیره ID parentObject، به صورت reference پاس داده می‌شود.  |
| &parentPlayer  | متغیری برای ذخیره ID parentPlayer، به صورت reference پاس داده می‌شود.  |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. object مشخص شده وجود ندارد.

## مثال‌ها

```c
new 
    parentVehicle,
    parentObject,
    parentPlayer;

GetPlayerObjectAttachedData(playerid, playerobjectid, parentVehicle, parentObject, parentPlayer);
```

## توابع مرتبط

- [GetPlayerObjectAttachedOffset](GetPlayerObjectAttachedOffset): دریافت offset اتصال و چرخش یک player-object.
- [GetObjectAttachedData](GetObjectAttachedData): دریافت داده‌های اتصال یک player-object.