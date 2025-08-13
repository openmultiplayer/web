---
title: TogglePlayerClock
sidebar_label: TogglePlayerClock
description: ساعت داخل بازی (گوشه بالا راست) رو برای یک بازیکن خاص فعال/غیرفعال کن.
tags: ["player"]
---

## توضیحات

ساعت داخل بازی (گوشه بالا راست) رو برای یک بازیکن خاص فعال/غیرفعال می‌کنه. وقتی این فعال باشه، زمان با سرعت 1 دقیقه در ثانیه پیش میره. آب و هوا هم وقتی با [SetWeather](SetWeather)/[SetPlayerWeather](SetPlayerWeather) تنظیم میشه، به تدریج تغییر می‌کنه (آروم آروم در طول زمان تغییر می‌کنه).

| نام         | توضیحات                                            |
| ----------- | ------------------------------------------------------ |
| playerid    | بازیکنی که می‌خوای ساعتش رو فعال/غیرفعال کنی      |
| bool:toggle | 'true' برای نشون دادن و 'false' برای مخفی کردن. به طور پیش‌فرض مخفی هست. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    TogglePlayerClock(playerid, true); // Show the clock
    // saate ro neshon bede
    return 1;
}
```

## نکات

:::tip

- زمان با بازیکنای دیگه همگام نیست! زمان میتونه با استفاده از [SetPlayerTime](SetPlayerTime) همگام بشه.
- زمان به طور خودکار 6 ساعت جلو میره وقتی بازیکن میمیره.

:::

## توابع مرتبط

- [GetPlayerTime](GetPlayerTime): زمان یک بازیکن رو بدست بیار.
- [SetPlayerTime](SetPlayerTime): زمان یک بازیکن رو تنظیم کن.
- [SetWorldTime](SetWorldTime): زمان کلی سرور رو تنظیم کن.
