---
title: IsGangZoneFlashingForPlayer
sidebar_label: IsGangZoneFlashingForPlayer
description: چک می‌کنه که آیا gangzone برای بازیکن چشمک می‌زنه یا نه
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا gangzone برای بازیکن چشمک می‌زنه یا نه.

| نام         | توضیحات                                   |
| ----------- | ----------------------------------------- |
| playerid    | ID بازیکنی که باید چک بشه.                 |
| zoneid      | ID gangzone.                              |

## مقادیر برگشتی

**true** - gangzone برای بازیکن چشمک می‌زنه.

**false** - gangzone برای بازیکن چشمک نمی‌زنه.

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
- [IsPlayerInGangZone](IsPlayerInGangZone): چک کردن اینکه بازیکن در gangzone هست یا نه.
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): چک کردن اینکه gangzone برای بازیکن قابل مشاهده هست یا نه.