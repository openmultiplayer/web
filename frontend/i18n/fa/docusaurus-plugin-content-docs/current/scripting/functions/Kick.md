---
title: Kick
sidebar_label: Kick
description: بازیکن رو از سرور kick می‌کنه. باید بازی رو ببنده و دوباره وصل بشه اگه می‌خواد به بازی ادامه بده.
tags: ["player", "administration"]
---

## توضیحات

بازیکن رو از سرور kick می‌کنه. باید بازی رو ببنده و دوباره وصل بشه اگه می‌خواد به بازی ادامه بده.

| نام      | توضیحات                           |
| -------- | --------------------------------- |
| playerid | ID بازیکنی که باید kick بشه.      |

## مقادیر برگشتی

این تابع همیشه 1 برمی‌گردونه، حتی اگه اجرای تابع موفق نباشه (بازیکن مشخص شده وجود نداره).

## نکات

:::warning

هر کاری که مستقیماً قبل از Kick() انجام بشه (مثل فرستادن پیام با [SendClientMessage](SendClientMessage)) به بازیکن نمی‌رسه. باید از timer استفاده کرد تا kick رو تاخیر بندازه.

:::

## مثال‌ها

```c
// In order to display a message (eg. reason) for the player before the connection is closed
// you have to use a timer to create a delay. This delay only needs to be a few milliseconds long,
// but this example uses a full second just to be on the safe side.

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // Kick the player who executed this command.

        // First, send them a message.
        SendClientMessage(playerid, 0xFF0000FF, "You have been kicked!");

        // Actually kick them a second later on a timer.
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid);
    return 1;
}
```

## توابع مرتبط

- [Ban](Ban): ban کردن بازیکن از سرور.
- [BanEx](BanEx): ban کردن بازیکن با دلیل سفارشی.