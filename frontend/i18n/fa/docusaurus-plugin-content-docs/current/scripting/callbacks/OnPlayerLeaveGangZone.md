---
title: OnPlayerLeaveGangZone
sidebar_label: OnPlayerLeaveGangZone
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن از gangzone خارج شود
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن از gangzone خارج شود

| نام      | توضیحات                                    |
| -------- | ---------------------------------------------- |
| playerid | شناسه بازیکنی که از gangzone خارج شده است.     |
| zoneid   | شناسه gangzone که بازیکن از آن خارج شده است.   |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerLeaveGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are leaving gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerEnterGangZone](OnPlayerEnterGangZone): این کالبک زمانی فراخوانده می‌شود که بازیکن وارد gangzone شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [GangZoneCreate](../functions/GangZoneCreate): ایجاد یک gangzone (منطقه رنگی رادار).
- [GangZoneDestroy](../functions/GangZoneDestroy): حذف یک gangzone.