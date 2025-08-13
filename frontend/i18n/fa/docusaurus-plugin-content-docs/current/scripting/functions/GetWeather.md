---
title: GetWeather
sidebar_label: GetWeather
description: آب و هوای فعلی دنیا رو دریافت می‌کنه.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آب و هوای فعلی دنیا رو دریافت می‌کنه.

## مثال‌ها

```c
SetWeather(19);

printf("Current world weather: %d", GetWeather());
// The output will be 'Current world weather: 19'
```

## توابع مرتبط

- [SetWeather](SetWeather): تنظیم آب و هوای دنیا برای همه بازیکنان.
- [GetPlayerWeather](GetPlayerWeather): دریافت آب و هوای یه بازیکن.
- [SetPlayerWeather](SetPlayerWeather): تنظیم آب و هوای یه بازیکن.

## منابع مرتبط

- [شناسه‌های آب و هوا](../resources/weatherid)