---
title: GetObjectMovingTargetRot
sidebar_label: GetObjectMovingTargetRot
description: چرخش مقصد حرکت یک آبجکت رو می‌گیره.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

چرخش مقصد حرکت یک آبجکت رو می‌گیره.

| اسم             | توضیح                                                                       |
|------------------|-----------------------------------------------------------------------------------|
| objectid         | شناسه آبجکتی که می‌خوای چرخش مقصد حرکتش رو بگیری.                          |
| &Float:rotationX | متغیر float که مختصات rotationX توش ذخیره میشه، که با reference پاس داده میشه. |
| &Float:rotationY | متغیر float که مختصات rotationY توش ذخیره میشه، که با reference پاس داده میشه. |
| &Float:rotationZ | متغیر float که مختصات rotationZ توش ذخیره میشه، که با reference پاس داده میشه. |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع اجرا نشد. آبجکت مشخص شده وجود نداره.

## مثال‌ها

</div>

```c
new objectid = CreateObject(968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);
MoveObject(objectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);

new 
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetObjectMovingTargetRot(objectid, rotationX, rotationY, rotationZ);
// rotationX = 0.00000
// rotationY = -90.00000
// rotationZ = 10.00000
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetObjectMovingTargetPos](GetObjectMovingTargetPos): گرفتن موقعیت مقصد حرکت آبجکت.
- [GetPlayerObjectMovingTargetRot](GetPlayerObjectMovingTargetRot): گرفتن چرخش مقصد حرکت آبجکت بازیکن.

</div>