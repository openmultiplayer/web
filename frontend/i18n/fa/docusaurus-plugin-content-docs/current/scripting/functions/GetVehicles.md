---
title: GetVehicles
sidebar_label: GetVehicles
description: یه متغیر آرایه از ID های وسایل نقلیه ساخته شده در سرور رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

یه متغیر آرایه از ID های وسایل نقلیه ساخته شده در سرور رو دریافت می‌کنه.

| نام          | توضیحات                                                        |
| ------------- | ------------------------------------------------------------------ |
| vehicles[]    | آرایه‌ای برای ذخیره ID های وسیله نقلیه که به صورت reference پاس داده می‌شه. |
| size          | سایز آرایه.                                             |

## مقادیر برگشتی

تابع تعداد وسایل نقلیه ذخیره شده در آرایه رو برمی‌گردونه.

## مثال‌ها

```c
new vehicles[MAX_VEHICLES];

GetVehicles(vehicles, sizeof(vehicles));
// The `vehicles` array now contains created vehicle IDs. { 0, 1, 2, 3, 4, ... }
```

## توابع مرتبط

- [GetPlayers](GetPlayers): یه متغیر آرایه از ID های بازیکنان فعلی سرور رو دریافت می‌کنه.
- [GetActors](GetActors): یه متغیر آرایه از ID های اکتورهای ساخته شده در سرور رو دریافت می‌کنه.