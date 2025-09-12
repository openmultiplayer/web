---
title: TogglePlayerControllable
sidebar_label: TogglePlayerControllable
description: فعال/غیرفعال میکنه که آیا یک بازیکن میتونه کاراکترش رو کنترل کنه یا نه.
tags: ["player"]
---

## توضیحات

فعال/غیرفعال می‌کنه که آیا یک بازیکن میتونه کاراکترش رو کنترل کنه یا نه. بازیکن همچنین نمیتونه دوربینش رو هم حرکت بده.

| نام               | توضیحات                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| playerid          | ID بازیکنی که می‌خوای قابلیت کنترلش رو فعال/غیرفعال کنی                  |
| bool:controllable | 'false' برای غیرقابل کنترل کردن، 'true' برای قابل کنترل کردن. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     // Freezes a player when they types /freezeme
     // bazikon ro freeze mikone vaghti /freezeme mizane
     if (strcmp(cmdtext, "/freezeme", true) == 0)
     {
          TogglePlayerControllable(playerid, false);
          return 1;
     }
     // Unfreezes a player when they types /unfreezeme
     // bazikon ro unfreeze mikone vaghti /unfreezeme mizane
     if (strcmp(cmdtext, "/unfreezeme", true) == 0)
     {
          TogglePlayerControllable(playerid, true);
          return 1;
     }
     return 0;
}
```

## توابع مرتبط

- [IsPlayerControllable](IsPlayerControllable): چک کن که آیا بازیکن قابل کنترل هست یا نه.
