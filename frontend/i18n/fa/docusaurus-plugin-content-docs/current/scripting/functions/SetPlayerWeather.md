---
title: SetPlayerWeather
sidebar_label: SetPlayerWeather
description: آب و هوای یک بازیکن رو تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

آب و هوای یک بازیکن رو تنظیم می‌کنه.

| نام      | توضیحات                                        |
| -------- | ---------------------------------------------- |
| playerid | ID بازیکنی که آب و هواش باید تنظیم بشه.        |
| weather  | [آب و هوا](../resources/weatherid) که باید تنظیم بشه. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

- اگر [TogglePlayerClock](TogglePlayerClock) فعال باشه، آب و هوا آروم آروم طی زمان تغییر می‌کنه، نه اینکه فوری تغییر کنه.
- فقط 21 ID آب و هوای معتبر در بازی وجود داره (0 - 20)، اما بازی هیچ نوع بررسی محدوده نداره.

:::

## توابع مرتبط

- [GetPlayerWeather](GetPlayerWeather): گرفتن آب و هوای یک بازیکن.
- [SetWeather](SetWeather): تنظیم آب و هوای کلی.
- [SetGravity](SetGravity): تنظیم جاذبه کلی.

## منابع مرتبط

- [Weather IDs](../resources/weatherid)