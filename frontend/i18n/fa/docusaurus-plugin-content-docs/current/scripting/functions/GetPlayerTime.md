---
title: GetPlayerTime
sidebar_label: GetPlayerTime
description: دریافت زمان بازی فعلی بازیکن.
tags: ["player"]
---

## توضیحات

دریافت زمان بازی فعلی بازیکن. توسط [SetWorldTime](SetWorldTime) تنظیم می‌شود، یا به طور خودکار توسط بازی اگر [TogglePlayerClock](TogglePlayerClock) استفاده شود.

| نام     | توضیحات                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | ID بازیکن برای دریافت زمان بازی‌اش.                  |
| &hour    | متغیری برای ذخیره ساعت، به صورت reference پاس داده می‌شود.    |
| &minute  | متغیری برای ذخیره دقیقه، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیکن مشخص شده وجود ندارد.

زمان بازی فعلی در متغیرهای مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
new hour, minutes;
GetPlayerTime(playerid, hour, minutes);
if (hour == 13 && minutes == 37)
{
    SendClientMessage(playerid, COLOR_WHITE, "The time is 13:37!");
}
```

## توابع مرتبط

- [SetPlayerTime](SetPlayerTime): تنظیم زمان بازیکن.
- [SetWorldTime](SetWorldTime): تنظیم زمان جهانی سرور.
- [TogglePlayerClock](TogglePlayerClock): تغییر وضعیت ساعت در گوشه بالا راست.