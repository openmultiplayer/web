---
title: OnPlayerEnterPlayerGangZone
sidebar_label: OnPlayerEnterPlayerGangZone
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن وارد یک player gangzone شود
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن وارد یک player gangzone شود.

| نام      | توضیحات                                            |
| -------- | ------------------------------------------------------ |
| playerid | شناسه بازیکنی که وارد player gangzone شده است.       |
| zoneid   | شناسه player gangzone که بازیکن وارد آن شده است.     |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are entering player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): این کالبک زمانی فراخوانده می‌شود که بازیکن از یک player gangzone خارج شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): ایجاد player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): حذف player gangzone.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): فعال کردن کالبک هنگام ورود بازیکن به این منطقه.