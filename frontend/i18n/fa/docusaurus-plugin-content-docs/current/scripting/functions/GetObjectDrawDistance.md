---
title: GetObjectDrawDistance
sidebar_label: GetObjectDrawDistance
description: فاصله رسم یه آبجکت رو برمیگردونه.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

فاصله رسم یه آبجکت رو برمیگردونه.

| اسم     | توضیح                                      |
|----------|--------------------------------------------------|
| objectid | شناسه آبجکتی که می‌خوای فاصله رسمش رو بگیری |

## مقادیر برگشتی

فاصله رسم رو به صورت float برمیگردونه.

## مثال‌ها

</div>

```c
new objectid = CreateObject(3335, 672.53485, -656.11023, 15.26560,  3.00000, 0.00000, 0.00000,  100.0);

new Float:drawDistance = GetObjectDrawDistance(objectid);
// drawDistance = 100.0
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetPlayerObjectDrawDistance](GetPlayerObjectDrawDistance): فاصله رسم یه player-object رو برمیگردونه.

</div>