---
title: OnRconCommand
sidebar_label: OnRconCommand
description: این کالبک زمانی فراخوانده می‌شود که دستوری از طریق کنسول سرور، RCON، یا از طریق دستور "/rcon command" در بازی ارسال شود.
tags: ["rcon", "administration"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که دستوری از طریق کنسول سرور، RCON (Remote Console)، یا از طریق دستور "/rcon command" در بازی ارسال شود.

| نام   | توضیحات                                                                     |
| ----- | --------------------------------------------------------------------------------- |
| cmd[] | رشته‌ای حاوی دستوری که تایپ شده است، همراه با پارامترهای منتقل شده.           |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود بنابراین برگرداندن 1 در آن، اسکریپت اصلی را از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: You typed '/rcon %s'!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");
        print("You said hello to the world."); // This will appear to the player who typed the rcon command in the chat in white
        return 1;
    }
    return 0;
}
```

## نکته‌ها

:::warning

پیشوند /rcon در پارامتر cmd هنگامی که بازیکن دستور تایپ می‌کند شامل نمی‌شود. اگر از تابع print اینجا استفاده کنید، پیامی هم به بازیکنی که دستور را در بازی تایپ کرده و هم به لاگ سرور ارسال خواهد شد.

این کالبک اگر بازیکن به عنوان admin RCON وارد نشده باشد فراخوانده نمی‌شود. زمانی که بازیکن از /rcon login برای ورود استفاده می‌کند، این کالبک فراخوانده نخواهد شد، در عوض، OnRconLoginAttempt فراخوانده می‌شود. پس از ورود به عنوان admin RCON، هر دستور بعدی این کالبک را فعال خواهد کرد.

:::

:::warning

در SA-MP، برای کارکرد این کالبک باید آن را در یک filterscript بارگذاری شده قرار دهید.

با این حال، این مشکل در open.mp رفع شده است.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnRconLoginAttempt](OnRconLoginAttempt): این کالبک زمانی فراخوانده می‌شود که تلاشی برای ورود به RCON صورت گیرد.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [IsPlayerAdmin](../functions/IsPlayerAdmin): بررسی اینکه آیا بازیکن به RCON وارد شده است یا نه.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): تنظیم بازیکن به عنوان admin RCON.