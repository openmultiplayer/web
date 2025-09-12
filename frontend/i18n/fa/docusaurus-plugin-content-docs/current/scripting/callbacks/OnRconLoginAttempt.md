---
title: OnRconLoginAttempt
sidebar_label: OnRconLoginAttempt
description: این کالبک زمانی فراخوانده می‌شود که کسی سعی در ورود به RCON در بازی دارد، بدون توجه به اینکه این تلاش موفق باشد یا نه.
tags: ["rcon", "administration"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که کسی سعی در ورود به RCON در بازی دارد، بدون توجه به اینکه این تلاش موفق باشد یا نه.

| نام        | توضیحات                                                   |
| ---------- | ------------------------------------------------------------- |
| ip[]       | آدرس IP بازیکنی که سعی در ورود به RCON کرده است.            |
| password[] | رمز عبور استفاده شده در تلاش ورود.                          |
| success    | 0 اگر رمز عبور اشتباه باشد، یا 1 اگر درست باشد.             |

## مقادیر برگشتی

این کالبک همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // If the password was incorrect
    {
        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s", ip, password);

        new ipAddress[16];

        for (new i = 0; i < MAX_PLAYERS; i++) // Loop through all players
        {
            if (!IsPlayerConnected(i))
            {
                continue;
            }

            GetPlayerIp(i, ipAddress, sizeof(ipAddress));

            if (!strcmp(ip, ipAddress, true)) // If a player's IP is the IP that failed the login
            {
                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!"); // Send a message
                Kick(i); // Kick the player
                break;
            }
        }
    }
    return 1;
}
```

## نکته‌ها

:::tip

این کالبک فقط زمانی فراخوانده می‌شود که /rcon login در بازی استفاده شود. این کالبک فقط زمانی فراخوانده می‌شود که بازیکن هنوز وارد نشده باشد. وقتی بازیکن وارد شود، در عوض [OnRconCommand](OnRconCommand) فراخوانده می‌شود.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnRconCommand](OnRconCommand): این کالبک زمانی فراخوانده می‌شود که دستور RCON ارسال شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [IsPlayerAdmin](../functions/IsPlayerAdmin): بررسی اینکه آیا بازیکن به RCON وارد شده است یا نه.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): تنظیم بازیکن به عنوان admin RCON.
- [SendRconCommand](../functions/SendRconCommand): ارسال دستور RCON از طریق اسکریپت.