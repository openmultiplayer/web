---
title: GetPlayerRotationQuat
sidebar_label: GetPlayerRotationQuat
description: چرخش بازیکن را در تمام محورها به صورت quaternion برمی‌گرداند.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چرخش بازیکن را در تمام محورها به صورت quaternion برمی‌گرداند.

| نام     | توضیحات                                                                          |
|----------|--------------------------------------------------------------------------------------|
| playerid | ID بازیکن برای دریافت چرخشش.                                         |
| &Float:w | متغیر float برای ذخیره اولین زاویه quaternion، به صورت reference پاس داده می‌شود.  |
| &Float:x | متغیر float برای ذخیره دومین زاویه quaternion، به صورت reference پاس داده می‌شود. |
| &Float:y | متغیر float برای ذخیره سومین زاویه quaternion، به صورت reference پاس داده می‌شود.  |
| &Float:z | متغیر float برای ذخیره چهارمین زاویه quaternion، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. این یعنی بازیکن مشخص شده وجود ندارد.

چرخش بازیکن در متغیرهای مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
new 
    Float:w,
    Float:x,
    Float:y,
    Float:z;

GetPlayerRotationQuat(playerid, w, x, y, z);
```

## نکات

:::tip

هیچ variation 'set' از این تابع وجود ندارد؛ شما نمی‌توانید چرخش بازیکن را SET کنید ( به جز زاویه نگاه (چرخش Z) ).

:::

## توابع مرتبط

- [SetPlayerFacingAngle](SetPlayerFacingAngle): تنظیم زاویه نگاه بازیکن (چرخش Z).
- [GetPlayerFacingAngle](GetPlayerFacingAngle): بررسی اینکه بازیکن به کجا نگاه می‌کند.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): دریافت چرخش quaternion وسیله نقلیه.