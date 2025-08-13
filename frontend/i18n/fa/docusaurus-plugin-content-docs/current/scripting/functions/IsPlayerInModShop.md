---
title: IsPlayerInModShop
sidebar_label: IsPlayerInModShop
description: چک می‌کنه که آیا بازیکن در mod shop هست یا نه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا بازیکن در mod shop هست یا نه.

## پارامترها

| نام      | توضیحات                         |
|----------|--------------------------------|
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

**true** - بازیکن در mod shop هست.

**false** - بازیکن در mod shop نیست.

## مثال‌ها

```c
if (IsPlayerInModShop(playerid))
{
    SendClientMessage(playerid, 0xFFFF00FF, "You are in the mod shop.");
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "You are not in the mod shop.");
}
```

## توابع مرتبط

توابع زیر ممکنه مفید باشن، چون به یه شکلی به این callback مرتبطن.

- [AddVehicleComponent](AddVehicleComponent): اضافه کردن یه کامپوننت به وسیله نقلیه.

## callback های مرتبط

callback های زیر ممکنه مفید باشن، چون به یه شکلی به این callback مرتبطن.

- [OnVehicleMod](../callbacks/OnVehicleMod): این callback وقتی وسیله نقلیه mod می‌شه فراخوانی می‌شه.
- [OnVehicleRespray](../callbacks/OnVehicleRespray): این callback وقتی بازیکن از mod shop خارج می‌شه فراخوانی می‌شه، حتی اگه رنگ‌ها عوض نشده باشن.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): این callback وقتی بازیکن یه paintjob وسیله نقلیه رو داخل mod shop پیش‌نمایش می‌کنه فراخوانی می‌شه.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): این callback وقتی بازیکن وارد یا خارج mod shop می‌شه فراخوانی می‌شه.