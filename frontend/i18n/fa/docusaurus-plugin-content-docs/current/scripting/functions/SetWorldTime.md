---
title: SetWorldTime
sidebar_label: SetWorldTime
description: زمان دنیا (برای همه پلیرها) رو به یه ساعت خاص تنظیم می‌کنه.
tags: ["worldtime"]
---

## توضیحات

زمان دنیا (برای همه پلیرها) رو به یه ساعت خاص تنظیم می‌کنه.

| نام  | توضیحات            |
| ---- | ---------------------- |
| hour | ساعتی که باید تنظیم بشه (0-23) |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
// zaman ro be 12 o'clock (zohr) set kon
SetWorldTime(12);
```

## نکات

:::tip

این تابع فقط برای پلیرهایی که از passing clock استفاده نمی‌کنن مربوط هست - [TogglePlayerClock](TogglePlayerClock) رو ببین.

:::

:::tip

برای تنظیم دقیقه و/یا تنظیم زمان برای پلیرهای جداگانه، [SetPlayerTime](SetPlayerTime) رو ببین.

:::

## توابع مرتبط

- [GetWorldTime](GetWorldTime): زمان فعلی دنیا رو دریافت می‌کنه.
- [SetPlayerTime](SetPlayerTime): زمان یه پلیر رو تنظیم می‌کنه.
- [SetWeather](SetWeather): آب و هوای کلی رو تنظیم می‌کنه.
- [SetGravity](SetGravity): جاذبه کلی رو تنظیم می‌کنه.