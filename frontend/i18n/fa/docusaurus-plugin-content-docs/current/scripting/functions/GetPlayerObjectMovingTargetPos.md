---
title: GetPlayerObjectMovingTargetPos
sidebar_label: GetPlayerObjectMovingTargetPos
description: دریافت موقعیت هدف حرکت یک player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت موقعیت هدف حرکت یک player-object.

| نام           | توضیحات                                                                     |
|----------------|---------------------------------------------------------------------------------|
| playerid       | ID بازیکن.                                                           |
| objectid       | ID player-object برای دریافت موقعیت هدف حرکتش.                 |
| &Float:targetX | متغیر float برای ذخیره مختصات targetX، به صورت reference پاس داده می‌شود. |
| &Float:targetY | متغیر float برای ذخیره مختصات targetY، به صورت reference پاس داده می‌شود. |
| &Float:targetZ | متغیر float برای ذخیره مختصات targetZ، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. object مشخص شده وجود ندارد.

## مثال‌ها

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

new 
    Float:targetX,
    Float:targetY,
    Float:targetZ;

GetPlayerObjectMovingTargetPos(playerid, playerobjectid, targetX, targetY, targetZ);
// targetX = 1003.3915
// targetY = -643.3342
// targetZ = 114.5122
```

## توابع مرتبط

- [GetPlayerObjectMovingTargetRot](GetPlayerObjectMovingTargetRot): دریافت چرخش هدف حرکت یک player-object.
- [GetObjectMovingTargetPos](GetObjectMovingTargetPos): دریافت موقعیت هدف حرکت یک object.