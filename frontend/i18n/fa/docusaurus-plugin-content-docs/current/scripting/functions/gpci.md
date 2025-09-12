---
title: gpci
sidebar_label: gpci
description: دریافت CI (شناسایی کامپیوتر/کلاینت) یه کاربر که به SAMP/GTA روی کامپیوترشون مرتبطه.
tags: []
---

<LowercaseNote />

## توضیحات

دریافت CI یه کاربر که به SAMP/GTA روی کامپیوترشون مرتبطه.

:::warning

CI بازیکن منحصر به فرد نیست، بعضی بازیکنان ممکنه CI مشابه یا یکسان داشته باشن، فقط بخاطر مطابقت CI بن نکنید.

:::

## پارامترها

| نام                   | توضیحات                                     |
| --------------------- | ------------------------------------------- |
| playerid              | ID بازیکنی که می‌خوای CI ش رو دریافت کنی.   |
| serial[]              | رشته برای ذخیره CI دریافت شده.             |
| len = sizeof (serial) | اندازه تعیین شده رشته.                      |

## مقادیر برگشتی

این تابع مقدار رشته‌ای CI کاربر رو برمی‌گردونه.

## نحوه استفاده

**سرور SA-MP:**

```c
#include <a_samp>

#if !defined gpci
    native gpci(playerid, serial[], len);
#endif

public OnPlayerConnect(playerid)
{
    new serial[41]; // 40 + \0
    gpci(playerid, serial, sizeof(serial));

    new string[128];
    format(string, sizeof(string), "Your CI Serial: %s", serial);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

**سرور open.mp:**

```c
#include <open.mp>

public OnPlayerConnect(playerid)
{
    new serial[41]; // 40 + \0
    GPCI(playerid, serial, sizeof(serial));
    SendClientMessage(playerid, -1, "Your CI Serial: %s", serial);
    return 1;
}
```

## نکات

:::warning

در سرور SA-MP باید 'native gpci(playerid, serial[], len);' رو در بالای اسکریپت اضافه کنید قبل از استفاده از هر تابع CI.

:::

## توابع مرتبط

- [GetNetworkStats](GetNetworkStats): آمار شبکه سرور رو دریافت می‌کنه و توی یه رشته ذخیره می‌کنه.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): آمار شبکه بازیکن رو دریافت می‌کنه و توی یه رشته ذخیره می‌کنه.