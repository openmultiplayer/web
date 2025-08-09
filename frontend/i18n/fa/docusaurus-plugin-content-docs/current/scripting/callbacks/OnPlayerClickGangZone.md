---
title: OnPlayerClickGangZone
sidebar_label: OnPlayerClickGangZone
description: این کالبک زمانی فراخوانده می‌شود که بازیکن روی یک گنگ زون در نقشه منو مکث کلیک کند (با کلیک راست).
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن روی یک گنگ زون در نقشه منو مکث کلیک کند (با کلیک راست).

| نام | توضیحات |
| -------- | -------------------------------------------- |
| playerid | شناسه بازیکنی که روی گنگ زون کلیک کرده است |
| zoneid | شناسه گنگ زونی که بازیکن روی آن کلیک کرده است |

## مقادیر برگشتی

این کالبک مقادیر برگشتی را مدیریت نمی‌کند.

این همیشه ابتدا در گیم مود فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are click gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [GangZoneCreate](../functions/GangZoneCreate): ایجاد یک گنگ زون (ناحیه رنگی رادار).
- [GangZoneDestroy](../functions/GangZoneDestroy): نابود کردن یک گنگ زون.