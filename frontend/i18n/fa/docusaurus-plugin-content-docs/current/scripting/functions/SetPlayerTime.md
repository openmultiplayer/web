---
title: SetPlayerTime
sidebar_label: SetPlayerTime
description: زمان بازی رو برای پلیر تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

زمان بازی رو برای پلیر تنظیم می‌کنه. اگه ساعت پلیر فعال باشه ([TogglePlayerClock](TogglePlayerClock)) زمان نمایش داده شده توسط اون به طور خودکار به‌روز می‌شه.

| نام      | توضیحات                                    |
| -------- | ------------------------------------------ |
| playerid | آیدی پلیری که قراره زمان بازیش تنظیم بشه     |
| hour     | ساعت که قراره تنظیم بشه (0-23)              |
| minute   | دقیقه که قراره تنظیم بشه (0-59)             |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. پلیر مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/noon", true))
    {
        SetPlayerTime(playerid, 12, 0); // Zohre
        return 1;
    }
    if (!strcmp(cmdtext, "/midnight", true))
    {
        SetPlayerTime(playerid, 0, 0); // Nime shab
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

استفاده از این تابع توی [OnPlayerConnect](../callbacks/OnPlayerConnect) کار نمی‌کنه.

:::

## توابع مرتبط

- [SetWorldTime](SetWorldTime): زمان سراسری سرور رو تنظیم می‌کنه.
- [GetPlayerTime](GetPlayerTime): زمان پلیر رو دریافت می‌کنه.
- [TogglePlayerClock](TogglePlayerClock): ساعت گوشه بالا راست رو فعال/غیرفعال می‌کنه.