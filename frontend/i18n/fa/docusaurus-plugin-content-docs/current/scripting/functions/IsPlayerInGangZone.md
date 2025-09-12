---
title: IsPlayerInGangZone
sidebar_label: IsPlayerInGangZone
description: چک می‌کنه که آیا بازیکن در gangzone هست یا نه
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا بازیکن در gangzone هست یا نه.

| نام         | توضیحات                                                 |
| ----------- | ------------------------------------------------------- |
| playerid    | ID بازیکنی که می‌خوای چک کنی که در gangzone هست یا نه.  |
| zoneid      | ID gangzone.                                            |

## مقادیر برگشتی

**true** - بازیکن در gangzone هست.

**false** - بازیکن در gangzone نیست.

## نکات

:::warning

این تابع برای open.mp هست، نه SA-MP. برای استفاده با SA-MP، نیاز به پلاگین [YSF](https://github.com/IS4Code/YSF/releases) داری.

:::

:::warning

این تابع بدون فراخوانی [UseGangZoneCheck](UseGangZoneCheck) در ابتدا نمی‌تونه استفاده بشه.

:::

## توابع مرتبط

- [GangZoneDestroy](GangZoneDestroy): نابود کردن یه gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): نمایش یه gangzone برای بازیکن.
- [GangZoneShowForAll](GangZoneShowForAll): نمایش یه gangzone برای همه بازیکنان.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): مخفی کردن یه gangzone برای بازیکن.
- [GangZoneHideForAll](GangZoneHideForAll): مخفی کردن یه gangzone برای همه بازیکنان.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): چشمک زدن یه gangzone برای بازیکن.
- [GangZoneFlashForAll](GangZoneFlashForAll): چشمک زدن یه gangzone برای همه بازیکنان.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): متوقف کردن چشمک زدن gangzone برای بازیکن.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): متوقف کردن چشمک زدن gangzone برای همه بازیکنان.
- [IsValidGangZone](IsValidGangZone): چک کردن اینکه gangzone معتبره یا نه.