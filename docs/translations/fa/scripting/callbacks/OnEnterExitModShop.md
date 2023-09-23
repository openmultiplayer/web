---
title: OnEnterExitModShop
description: زمانی که بازیکنی وارد فروشگاه مد شده (اسپورت ماشین) یا از آن خارج می شود، این کال‌بک فراخوانی می شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn name='callback' version='SA-MP 0.3a' />

## توضیح

زمانی که بازیکنی وارد فروشگاه مد شده (اسپورت ماشین) یا از آن خارج می شود، این کال‌بک فراخوانی می شود.

| پارامتر       | توضیح                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | آیدی بازیکن                      |
| enterexit  | 1 بازیکن وارد میشود و 0 بازیکن خارج میشود                                  |
| interiorid | آیدی اینتریور آن فروشگاه |

## مقادیر بازگشتی

این کال‌بک همیشه اول در فیلتر اسکریپت ها تماس داده میشود.

## مثال ها

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Agar `enterexit` 0 Bashe Yani Az Foroshgah Kharej Shode
    {
        SendClientMessage(playerid, COLOR_WHITE, "$100 Az Shoma Kam Shod");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## نکات

:::warning

اشکالات شناخته شده: بازیکنان وقتی وارد یک فروشگاه مود می شوند با هم برخورد می کنند.

:::

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnVehicleMod](OnVehicleMod): زمانی که وسیله نقلیه مود میشود، این کال‌بک فراخوانی می شود.
- [OnVehicleRespray](OnVehicleRespray): این کال‌بک زمانی فراخوانی می‌شود که بازیکنی از فروشگاه مود خارج شود، حتی اگر رنگ‌ ماشین تغییر نکرده باشند.
- [OnVehiclePaintjob](OnVehiclePaintjob): زمانی که یک بازیکن روی ماشین خود paintjob میزند، این کال‌بک فراخوانی می‌شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [AddVehicleComponent](../functions/AddVehicleComponent): اضافه کردن یک پارت به ماشین
</div>