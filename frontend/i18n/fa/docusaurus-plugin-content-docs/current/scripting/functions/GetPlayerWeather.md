---
title: GetPlayerWeather
sidebar_label: GetPlayerWeather
description: هوای بازیکن رو دریافت می‌کنه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

هوای بازیکن رو دریافت می‌کنه.

| نام     | توضیحات                              |
| -------- | ---------------------------------------- |
| playerid | ID بازیکنی که می‌خوای هوا رو ازش دریافت کنی. |

## مقادیر برگشتی

هوای بازیکن رو برمی‌گردونه.

## مثال‌ها

```c
SetPlayerWeather(playerid, 8);

printf("Player weather: %d", GetPlayerWeather(playerid));
// The output will be 'Player weather: 8'
```

## توابع مرتبط

- [SetPlayerWeather](SetPlayerWeather): تنظیم هوای بازیکن.
- [SetWeather](SetWeather): تنظیم هوای جهان برای همه بازیکنا.

## منابع مرتبط

- [Weather IDs](../resources/weatherid)