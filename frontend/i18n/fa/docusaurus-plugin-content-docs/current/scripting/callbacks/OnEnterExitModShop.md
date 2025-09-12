---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: این کالبک زمانی فرا خوانده می‌شود که بازیکن وارد یک فروشگاه تعمیرات شود یا از آن خارج شود.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فرا خوانده می‌شود که بازیکن وارد یک فروشگاه تعمیرات شود یا از آن خارج شود.

| نام        | توضیحات                                                                      |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | شناسه بازیکنی که وارد فروشگاه تعمیرات شده یا از آن خارج شده                   |
| enterexit  | 1 اگر بازیکن وارد شده یا 0 اگر خارج شده                                      |
| interiorid | شناسه interior فروشگاه تعمیراتی که بازیکن وارد می‌شود (یا 0 اگر خارج می‌شود) |

## مقادیر برگشتی

این همیشه ابتدا در فیلتر اسکریپت ها فرا خوانده می شود.

## مثال ها

</div>

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // If enterexit is 0, this means they are exiting
    {
        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::warning

باگ های شناخته شده:

- بازیکنان هنگام ورود به همان فروشگاه تعمیرات با یکدیگر برخورد می‌کنند.

:::

## کالبک های مرتبط

کالبک های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

- [OnVehicleMod](OnVehicleMod): این کالبک زمانی فرا خوانده می‌شود که یک وسیله نقلیه تعمیر شود.
- [OnVehicleRespray](OnVehicleRespray): این کالبک زمانی فرا خوانده می‌شود که بازیکن از فروشگاه تعمیرات خارج شود، حتی اگر رنگ ها تغییر نکرده باشند.
- [OnVehiclePaintjob](OnVehiclePaintjob): این کالبک زمانی فرا خوانده می‌شود که بازیکن در داخل فروشگاه تعمیرات پیش نمایش paintjob وسیله نقلیه را ببیند.

## تابع های مرتبط

تابع های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

- [IsPlayerInModShop](../functions/IsPlayerInModShop): بررسی کنید که آیا بازیکن در فروشگاه تعمیرات است.
- [AddVehicleComponent](../functions/AddVehicleComponent): اضافه کردن یک قطعه به وسیله نقلیه.

</div>