---
title: GetObjectMovingTargetPos
sidebar_label: GetObjectMovingTargetPos
description: دریافت موقعیت هدف حرکت آبجکت.
tags: ["object"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت موقعیت هدف حرکت آبجکت.

| نام           | توضیحات                                                                      |
|---------------|------------------------------------------------------------------------------|
| objectid      | شناسه آبجکتی که می‌خواهید موقعیت هدف حرکت آن را دریافت کنید.                    |
| &Float:targetX| متغیر اعشاری برای ذخیره مختصات targetX، به صورت مرجع ارسال می‌شود.            |
| &Float:targetY| متغیر اعشاری برای ذخیره مختصات targetY، به صورت مرجع ارسال می‌شود.            |
| &Float:targetZ| متغیر اعشاری برای ذخیره مختصات targetZ، به صورت مرجع ارسال می‌شود.            |

## مقادیر بازگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناموفق بود. آبجکت مشخص شده وجود ندارد.

## مثال‌ها

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

new 
    Float:targetX,
    Float:targetY,
    Float:targetZ;

GetObjectMovingTargetPos(objectid, targetX, targetY, targetZ);
// targetX = 1003.3915
// targetY = -643.3342
// targetZ = 114.5122
```

## توابع مرتبط

- [GetObjectMovingTargetRot](GetObjectMovingTargetRot): دریافت چرخش هدف حرکت آبجکت.
- [GetPlayerObjectMovingTargetPos](GetPlayerObjectMovingTargetPos): دریافت موقعیت هدف حرکت player-object.

</div>