---
title: GetPlayerObjectAttachedOffset
sidebar_label: GetPlayerObjectAttachedOffset
description: دریافت offset اتصال و چرخش یک player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت offset اتصال و چرخش یک player-object.

| نام             | توضیحات                                                                       |
|------------------|-----------------------------------------------------------------------------------|
| playerid         | ID بازیکن.                                                             |
| objectid         | ID player-object برای دریافت offset و چرخشش.                    |
| &Float:offsetX   | متغیر float برای ذخیره مختصات offsetX، به صورت reference پاس داده می‌شود.   |
| &Float:offsetY   | متغیر float برای ذخیره مختصات offsetY، به صورت reference پاس داده می‌شود.   |
| &Float:offsetZ   | متغیر float برای ذخیره مختصات offsetZ، به صورت reference پاس داده می‌شود.   |
| &Float:rotationX | متغیر float برای ذخیره مختصات rotationX، به صورت reference پاس داده می‌شود. |
| &Float:rotationY | متغیر float برای ذخیره مختصات rotationY، به صورت reference پاس داده می‌شود. |
| &Float:rotationZ | متغیر float برای ذخیره مختصات rotationZ، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. object مشخص شده وجود ندارد.

## مثال‌ها

```c
new 
    Float:offsetX,
    Float:offsetY,
    Float:offsetZ,
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetPlayerObjectAttachedOffset(playerid, playerobjectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);
```

## توابع مرتبط

- [GetPlayerObjectAttachedData](GetPlayerObjectAttachedData): دریافت داده‌های اتصال یک player-object.
- [GetObjectAttachedOffset](GetObjectAttachedOffset): دریافت offset اتصال و چرخش یک object.