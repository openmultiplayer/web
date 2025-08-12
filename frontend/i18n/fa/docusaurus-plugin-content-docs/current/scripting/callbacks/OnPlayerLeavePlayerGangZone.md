---
title: OnPlayerLeavePlayerGangZone
sidebar_label: OnPlayerLeavePlayerGangZone
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن از player gangzone خارج شود
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن از player gangzone خارج شود.

| نام      | توضیحات                                           |
| -------- | ----------------------------------------------------- |
| playerid | شناسه بازیکنی که از player gangzone خارج شده است.    |
| zoneid   | شناسه player gangzone که بازیکن از آن خارج شده است.  |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are leaving player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerEnterPlayerGangZone](OnPlayerEnterPlayerGangZone): این کالبک زمانی فراخوانده می‌شود که بازیکن از player gangzone خارج شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): ایجاد player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): حذف player gangzone.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): فعال کردن کالبک هنگام خروج بازیکن از این منطقه.