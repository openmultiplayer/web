---
title: GetPlayerCameraPos
sidebar_label: GetPlayerCameraPos
description: موقعیت دوربین بازیکن را دریافت کنید.
tags: ["player", "camera"]
---

## توضیحات

موقعیت دوربین بازیکن را دریافت کنید.

| نام      | توضیحات                                                             |
| -------- | ------------------------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خواهید موقعیت دوربینش را دریافت کنید.                |
| &Float:x | یک متغیر اعشاری برای ذخیره مختصات X، به صورت مرجع پاس داده می‌شود.       |
| &Float:y | یک متغیر اعشاری برای ذخیره مختصات Y، به صورت مرجع پاس داده می‌شود.       |
| &Float:z | یک متغیر اعشاری برای ذخیره مختصات Z، به صورت مرجع پاس داده می‌شود.       |

## مقدار بازگشتی

موقعیت بازیکن در متغیرهای مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
public OnPlayerDisconnect(playerid, reason)
{
    new Float:x, Float:y, Float:z;
    GetPlayerCameraPos(playerid, x, y, z);

    printf("The player left when they had their camera at %f, %f, %f.", x, y, z);
    return 1;
}
```

## نکات

:::warning

موقعیت دوربین بازیکن فقط یک بار در ثانیه بروزرسانی می‌شود، مگر اینکه در حال هدف‌گیری باشد. اگر می‌خواهید کاری را انجام دهید که به موقعیت دوربین بازیکن وابسته است، توصیه می‌شود یک تایمر ۱ ثانیه‌ای تنظیم کنید.

:::

## تابع‌های مرتبط

- [SetPlayerCameraPos](SetPlayerCameraPos): موقعیت دوربین بازیکن را تنظیم کنید.
- [GetPlayerCameraZoom](GetPlayerCameraZoom): سطح زوم دوربین بازیکن را دریافت کنید.
- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRatio): نسبت ابعاد دوربین بازیکن را دریافت کنید.
- [GetPlayerCameraMode](GetplayerCameraMode): حالت دوربین بازیکن را دریافت کنید.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): بردار جلویی دوربین بازیکن را دریافت کنید
- [GetPlayerZAim](GetPlayerZAim): Z Aim بازیکن را دریافت کنید.