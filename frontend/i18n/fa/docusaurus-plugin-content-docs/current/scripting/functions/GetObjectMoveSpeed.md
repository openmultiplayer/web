---
title: GetObjectMoveSpeed
sidebar_label: GetObjectMoveSpeed
description: دریافت سرعت حرکت آبجکت.
tags: ["object"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت سرعت حرکت آبجکت.

| نام      | توضیحات                                       |
|----------|----------------------------------------------|
| objectid | شناسه آبجکتی که می‌خواهید سرعت حرکت آن را دریافت کنید. |

## مقادیر بازگشتی

سرعت حرکت را به صورت عدد اعشاری برمی‌گرداند.

## مثال‌ها

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

new Float:moveSpeed = GetObjectMoveSpeed(objectid);
// moveSpeed = 0.8
```

## توابع مرتبط

- [MoveObject](MoveObject): حرکت دادن آبجکت به موقعیت جدید با سرعت مشخص.
- [SetObjectMoveSpeed](SetObjectMoveSpeed): تنظیم سرعت حرکت آبجکت.
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): دریافت سرعت حرکت player-object.

</div>