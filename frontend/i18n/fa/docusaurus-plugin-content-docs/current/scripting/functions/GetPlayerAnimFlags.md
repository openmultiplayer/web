---
title: GetPlayerAnimFlags
sidebar_label: GetPlayerAnimFlags
description: فلگ‌های انیمیشن بازیکن را دریافت می‌کند.
tags: ["player", "animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

فلگ‌های انیمیشن بازیکن را دریافت می‌کند.

| نام      | توضیحات                                      |
| -------- | -------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خواهید فلگ‌های انیمیشنش را بگیرید |

## مقدار بازگشتی

فلگ‌های انیمیشن بازیکن را به صورت integer برمی‌گرداند.

## مثال‌ها

```c
new flags = GetPlayerAnimFlags(playerid);
```

## تابع‌های مرتبط

- [ApplyAnimation](ApplyAnimation): انیمیشن روی یک بازیکن اعمال می‌کند.