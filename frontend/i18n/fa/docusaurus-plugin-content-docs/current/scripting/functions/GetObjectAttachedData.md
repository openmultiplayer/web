---
title: GetObjectAttachedData
sidebar_label: GetObjectAttachedData
description: اطلاعات وصل یه آبجکت رو برمیگردونه.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

اطلاعات وصل یه آبجکت رو برمیگردونه.

| اسم           | توضیح                                                                     |
|----------------|---------------------------------------------------------------------------|
| objectid       | شناسه آبجکتی که می‌خوای اطلاعات وصلش رو بگیری                      |
| &parentVehicle | متغیر برای ذخیره شناسه والد وهیکل، به صورت reference پاس داده میشه. |
| &parentObject  | متغیر برای ذخیره شناسه والد آبجکت، به صورت reference پاس داده میشه.  |
| &parentPlayer  | متغیر برای ذخیره شناسه والد بازیکن، به صورت reference پاس داده میشه.  |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع اجرا نشد. آبجکت مشخص شده وجود نداره.

## مثال‌ها

</div>

```c
new 
    parentVehicle,
    parentObject,
    parentPlayer;

GetObjectAttachedData(objectid, parentVehicle, parentObject, parentPlayer);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetObjectAttachedOffset](GetObjectAttachedOffset): آفست و چرخش وصل یه آبجکت رو برمیگردونه.
- [GetPlayerObjectAttachedData](GetPlayerObjectAttachedData): اطلاعات وصل یه player-object رو برمیگردونه.

</div>