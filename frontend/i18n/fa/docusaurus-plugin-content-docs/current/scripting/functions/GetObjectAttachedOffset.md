---
title: GetObjectAttachedOffset
sidebar_label: GetObjectAttachedOffset
description: آفست و چرخش وصل یه آبجکت رو برمیگردونه.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

آفست و چرخش وصل یه آبجکت رو برمیگردونه.

| اسم             | توضیح                                                                       |
|------------------|-----------------------------------------------------------------------------------|
| objectid         | شناسه آبجکتی که می‌خوای آفست و چرخشش رو بگیری.                           |
| &Float:offsetX   | متغیر float برای ذخیره مختصات offsetX، به صورت reference پاس داده میشه.   |
| &Float:offsetY   | متغیر float برای ذخیره مختصات offsetY، به صورت reference پاس داده میشه.   |
| &Float:offsetZ   | متغیر float برای ذخیره مختصات offsetZ، به صورت reference پاس داده میشه.   |
| &Float:rotationX | متغیر float برای ذخیره مختصات rotationX، به صورت reference پاس داده میشه. |
| &Float:rotationY | متغیر float برای ذخیره مختصات rotationY، به صورت reference پاس داده میشه. |
| &Float:rotationZ | متغیر float برای ذخیره مختصات rotationZ، به صورت reference پاس داده میشه. |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع اجرا نشد. آبجکت مشخص شده وجود نداره.

## مثال‌ها

</div>

```c
new 
    Float:offsetX,
    Float:offsetY,
    Float:offsetZ,
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetObjectAttachedOffset(objectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetObjectAttachedData](GetObjectAttachedData): اطلاعات وصل یه آبجکت رو برمیگردونه.
- [GetPlayerObjectAttachedOffset](GetPlayerObjectAttachedOffset): آفست و چرخش وصل یه player-object رو برمیگردونه.

</div>