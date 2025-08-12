---
title: GangZoneGetFlashColourForPlayer
sidebar_label: GangZoneGetFlashColourForPlayer
description: گرفتن رنگ چشمک زدن یه gangzone برای بازیکن
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

گرفتن رنگ چشمک زدن یه gangzone برای بازیکن.

| نام      | توضیحات                              |
| -------- | ----------------------------------- |
| playerid | ID بازیکنی که میخوایم بگیریم.        |
| zoneid   | ID گنگ‌زون.                        |

## برگشتی

رنگ چشمک زدن gangzone برای بازیکن.

**0:** اجرای تابع ناموفق بود. gangzone برای بازیکن نمایش داده نمیشه.

## توابع مرتبط

- [GangZoneDestroy](GangZoneDestroy): حذف یه gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): نشون دادن یه gangzone به یه بازیکن.
- [GangZoneShowForAll](GangZoneShowForAll): نشون دادن یه gangzone به همه بازیکن‌ها.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): مخفی کردن یه gangzone برای یه بازیکن.
- [GangZoneHideForAll](GangZoneHideForAll): مخفی کردن یه gangzone برای همه بازیکن‌ها.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): چشمک زدن یه gangzone برای یه بازیکن.
- [GangZoneFlashForAll](GangZoneFlashForAll): چشمک زدن یه gangzone برای همه بازیکن‌ها.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): متوقف کردن چشمک زدن gangzone برای یه بازیکن.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): متوقف کردن چشمک زدن gangzone برای همه بازیکن‌ها.
- [IsValidGangZone](IsValidGangZone): چک کردن که gangzone معتبر هست یا نه.
- [IsPlayerInGangZone](IsPlayerInGangZone): چک کردن که بازیکن توی gangzone هست یا نه.
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): چک کردن که gangzone برای بازیکن قابل دیدن هست یا نه.