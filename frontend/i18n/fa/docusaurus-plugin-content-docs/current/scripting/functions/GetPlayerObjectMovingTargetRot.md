---
title: GetPlayerObjectMovingTargetRot
sidebar_label: GetPlayerObjectMovingTargetRot
description: دریافت چرخش هدف حرکت یک player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت چرخش هدف حرکت یک player-object.

| نام             | توضیحات                                                                       |
|------------------|-----------------------------------------------------------------------------------|
| playerid         | ID بازیکن.                                                             |
| objectid         | ID player-object برای دریافت چرخش هدف حرکتش.                   |
| &Float:rotationX | متغیر float برای ذخیره مختصات rotationX، به صورت reference پاس داده می‌شود. |
| &Float:rotationY | متغیر float برای ذخیره مختصات rotationY، به صورت reference پاس داده می‌شود. |
| &Float:rotationZ | متغیر float برای ذخیره مختصات rotationZ، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. object مشخص شده وجود ندارد.

## مثال‌ها

```c
new playerobjectid = CreatePlayerObject(playerid, 968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);
MovePlayerObject(playerid, playerobjectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);

new 
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetPlayerObjectMovingTargetRot(playerid, playerobjectid, rotationX, rotationY, rotationZ);
// rotationX = 0.00000
// rotationY = -90.00000
// rotationZ = 10.00000
```

## توابع مرتبط

- [GetPlayerObjectMovingTargetPos](GetPlayerObjectMovingTargetPos): دریافت موقعیت هدف حرکت یک player-object.
- [GetObjectMovingTargetRot](GetObjectMovingTargetRot): دریافت چرخش هدف حرکت یک object.