---
title: GetWorldTime
sidebar_label: GetWorldTime
description: زمان فعلی دنیا رو دریافت می‌کنه.
tags: ["worldtime"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

زمان فعلی دنیا رو دریافت می‌کنه.

## مثال‌ها

```c
SetWorldTime(12);

printf("Current world time: %d", GetWorldTime());
// The output will be 'Current world time: 12'
```

## توابع مرتبط

- [SetWorldTime](SetWorldTime): تنظیم زمان دنیا (برای همه بازیکنان) روی یه ساعت خاص.
- [SetPlayerTime](SetPlayerTime): تنظیم زمان یه بازیکن.