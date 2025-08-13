---
title: SetPlayerAdmin
sidebar_label: SetPlayerAdmin
description: بازیکن را به عنوان ادمین RCON تنظیم کنید.
tags: ["player", "rcon", "administration"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

بازیکن را به عنوان ادمین RCON تنظیم کنید.

| نام       | توضیحات                                                              |
|------------|--------------------------------------------------------------------------|
| playerid   | شناسه بازیکن.                                                    |
| bool:admin | **true** برای تنظیم به عنوان ادمین RCON، **false** برای حذف از ادمین RCON. |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/admin", true))
    {
        SetPlayerAdmin(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You are now RCON admin!");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [IsPlayerAdmin](IsPlayerAdmin): بررسی کنید که آیا بازیکن به عنوان ادمین RCON وارد شده است.

## کالبک‌های مرتبط

- [OnRconLoginAttempt](OnRconLoginAttempt): زمانی که تلاشی برای ورود به RCON صورت می‌گیرد فراخوانی می‌شود.