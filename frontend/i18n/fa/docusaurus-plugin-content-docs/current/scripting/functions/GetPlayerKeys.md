---
title: GetPlayerKeys
sidebar_label: GetPlayerKeys
description: بررسی اینکه بازیکن کدام کلیدها را فشار داده است.
tags: ["player"]
---

## توضیحات

بررسی اینکه بازیکن کدام کلیدها را فشار داده است.

| نام      | توضیحات                                                                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | ID بازیکن برای دریافت کلیدهایش.                                                                                                       |
| &KEY:keys | مجموعه‌ای از بیت‌ها حاوی حالت کلیدهای بازیکن. این مقدار bit mask نامیده می‌شود. [اینجا کلیک کنید](../resources/keys) برای لیست کلیدها. |
| updown    | حالت بالا/پایین.                                                                                                                                 |
| leftright | حالت چپ/راست.                                                                                                                              |

## مقادیر برگشتی

کلیدها در متغیرهای مشخص شده ذخیره می‌شوند.

## مثال‌ها

```c
public OnPlayerUpdate(playerid)
{
    new
        KEY:keys, updown, leftright;

    GetPlayerKeys(playerid, keys, updown, leftright);

    if (updown == KEY_UP)
    {
        SendClientMessage(playerid, -1, "UP");
    }
    else if (updown == KEY_DOWN)
    {
        SendClientMessage(playerid, -1, "DOWN");
    }

    if (leftright == KEY_LEFT)
    {
        SendClientMessage(playerid, -1, "LEFT");
    }
    else if (leftright == KEY_RIGHT)
    {
        SendClientMessage(playerid, -1, "RIGHT");
    }

    return 1;
}
```

## نکات

:::warning

فقط FUNCTION کلیدها قابل تشخیص است؛ نه کلیدهای واقعی. برای مثال، امکان تشخیص فشردن SPACE وجود ندارد، اما می‌توانید SPRINT را تشخیص دهید (که می‌تواند به هر کلیدی mapped باشد، اما به طور پیش‌فرض space است).

از آپدیت 0.3.7، کلیدهای "A" و "D" در وسیله نقلیه تشخیص داده نمی‌شوند. اما کلیدهای "W" و "S" با پارامتر "keys" قابل تشخیص هستند.

:::

## منابع مرتبط

- [Keys](../resources/keys)