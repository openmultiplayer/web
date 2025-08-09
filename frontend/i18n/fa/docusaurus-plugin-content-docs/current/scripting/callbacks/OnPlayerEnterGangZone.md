---
title: OnPlayerEnterGangZone
sidebar_label: OnPlayerEnterGangZone
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن وارد یک gangzone شود
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن وارد یک gangzone شود

| نام      | توضیحات                                     |
| -------- | ----------------------------------------------- |
| playerid | شناسه بازیکنی که وارد gangzone شده است.        |
| zoneid   | شناسه gangzone که بازیکن وارد آن شده است.      |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerEnterGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are entering gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerLeaveGangZone](OnPlayerLeaveGangZone): این کالبک زمانی فراخوانده می‌شود که بازیکن از یک gangzone خارج شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [GangZoneCreate](../functions/GangZoneCreate): ایجاد یک gangzone (منطقه رنگی رادار).
- [GangZoneDestroy](../functions/GangZoneDestroy): حذف یک gangzone.
- [UseGangZoneCheck](../functions/UseGangZoneCheck): فعال کردن کالبک هنگام ورود بازیکن به این منطقه.