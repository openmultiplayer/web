---
title: GetPlayers
sidebar_label: GetPlayers
description: دریافت متغیر آرایه‌ای از IDهای بازیکنان فعلی در سرور.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت متغیر آرایه‌ای از IDهای بازیکنان فعلی در سرور.

| نام          | توضیحات                                                       |
| ------------- | ----------------------------------------------------------------- |
| players[]     | آرایه‌ای برای ذخیره IDهای بازیکن، به صورت reference پاس داده می‌شود. |
| size          | اندازه آرایه.                                            |

## مقادیر برگشتی

تابع تعداد بازیکنان ذخیره شده در آرایه را برمی‌گرداند.

## مثال‌ها

فرض کنید 5 بازیکن در سرور وجود دارد:

```c
new players[MAX_PLAYERS];
new length;

length = GetPlayers(players, sizeof(players));
// The `players` array now contains online player IDs. { 0, 1, 2, 3, 4 }
// The value of the `length` variable is 5
```

## توابع مرتبط

- [GetVehicles](GetVehicles): دریافت متغیر آرایه‌ای از IDهای وسایل نقلیه ایجاد شده در سرور.
- [GetActors](GetActors): دریافت متغیر آرایه‌ای از IDهای actorهای ایجاد شده در سرور.