---
title: SetWeather
sidebar_label: SetWeather
description: آب و هوای دنیا را برای همه بازیکنان تنظیم کنید.
tags: []
---

## توضیحات

آب و هوای دنیا را برای همه بازیکنان تنظیم کنید.

| نام      | توضیحات                                   |
| --------- | --------------------------------------------- |
| weatherid | [آب و هوا](../resources/weatherid) برای تنظیم. |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sandstorm", true))
    {
        SetWeather(19);
        return 1;
    }
    return 1;
}
```

## نکته‌ها

:::tip

- اگر [TogglePlayerClock](TogglePlayerClock) فعال باشد، آب و هوا به آرامی در طول زمان تغییر خواهد کرد، به جای تغییر فوری.
- تنها 21 شناسه آب و هوای معتبر در بازی وجود دارد (0 - 20)، با این حال بازی هیچ بررسی محدوده‌ای ندارد.

:::

## توابع مرتبط

- [GetWeather](GetWeather): آب و هوای فعلی دنیا را دریافت کنید.
- [SetPlayerWeather](SetPlayerWeather): آب و هوای یک بازیکن را تنظیم کنید.
- [SetGravity](SetGravity): جاذبه سراسری را تنظیم کنید.

## منابع مرتبط

- [شناسه‌های آب و هوا](../resources/weatherid)