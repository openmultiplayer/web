---
title: OnPlayerClickPlayerGangZone
sidebar_label: OnPlayerClickPlayerGangZone
description: این کالبک زمانی فراخوانده می‌شود که بازیکن روی یک گنگ زون بازیکن در نقشه منو مکث کلیک کند (با کلیک راست).
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن روی یک گنگ زون بازیکن در نقشه منو مکث کلیک کند (با کلیک راست).

| نام | توضیحات |
| -------- | --------------------------------------------------- |
| playerid | شناسه بازیکنی که روی گنگ زون بازیکن کلیک کرده است |
| zoneid | شناسه گنگ زون بازیکنی که بازیکن روی آن کلیک کرده است |

## مقادیر برگشتی

این کالبک مقادیر برگشتی را مدیریت نمی‌کند.

این همیشه ابتدا در گیم مود فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerClickPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are click player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): ایجاد یک گنگ زون بازیکن.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): نابود کردن یک گنگ زون بازیکن.