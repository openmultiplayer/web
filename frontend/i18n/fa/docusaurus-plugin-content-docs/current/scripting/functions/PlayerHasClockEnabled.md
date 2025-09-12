---
title: PlayerHasClockEnabled
sidebar_label: PlayerHasClockEnabled
description: بررسی اینکه آیا بازیکن ساعت داخل بازی رو فعال کرده یا نه
tags: ["player"]
---

## توضیحات

بررسی می‌کنه که آیا بازیکن ساعت داخل بازی رو فعال کرده یا نه. ([TogglePlayerClock](TogglePlayerClock))

| نام      | توضیحات                                       |
| -------- | --------------------------------------------- |
| playerid | بازیکنی که می‌خوای ساعتش رو چک کنی.              |

## مقادیر بازگشتی

**true** - ساعت فعال هست.

**false** - ساعت فعال نیست، یا بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, true); // Saate ro namayesh midim

    if (PlayerHasClockEnabled(playerid))
    {
        SendClientMessage(playerid, COLOR_WHITE, "The clock is enabled.");
    }
    return 1;
}
```

## نکات

:::tip

زمان با بقیه بازیکنا همگام نیست! زمان رو می‌تونی با استفاده از [SetPlayerTime](SetPlayerTime) همگام کنی.

:::

## توابع مرتبط

- [SetPlayerTime](SetPlayerTime): تنظیم زمان یک بازیکن.
- [SetWorldTime](SetWorldTime): تنظیم زمان کلی سرور.
- [TogglePlayerClock](TogglePlayerClock): نمایش/مخفی کردن ساعت در گوشه بالا راست.