---
title: GetObjectType
sidebar_label: GetObjectType
description: نوع یک آبجکت رو می‌گیره. (global یا player)
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

نوع یک آبجکت رو می‌گیره. (global یا player)

| اسم     | توضیح                              |
|----------|------------------------------------------|
| playerid | شناسه بازیکن.                    |
| objectid | شناسه آبجکتی که می‌خوای نوعش رو بگیری. |

## مقادیر برگشتی

`0` - تابع اجرا نشد. objectid یا playerid مشخص شده وجود نداره.

`1` - آبجکت Global.

`2` - آبجکت بازیکن.

## مثال‌ها

</div>

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);

new objectType = GetObjectType(playerid, objectid);
// objectType = 1
```

مثال دیگر:

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 978.88757, -986.34918, 40.95220,   0.00000, 0.00000, 228.00000);

new objectType = GetObjectType(playerid, playerobjectid);
// objectType = 2
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreateObject](CreateObject): ساخت آبجکت.
- [CreatePlayerObject](CreatePlayerObject): ساخت آبجکت برای یک بازیکن مشخص.

</div>