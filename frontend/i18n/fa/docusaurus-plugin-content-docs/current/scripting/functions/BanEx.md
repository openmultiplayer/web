---
title: BanEx
sidebar_label: BanEx
description: بازیکن را با دلیل مسدود می‌کند.
tags: ["player", "administration"]
---

## توضیحات

بازیکن را با دلیل مسدود می‌کند.

| نام            | توضیحات                      |
| -------------- | ---------------------------- |
| playerid       | شناسه بازیکن برای مسدود کردن. |
| const reason[] | دلیل مسدودیت.                |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## نکات

:::warning

هر عملی که مستقیماً قبل از BanEx() انجام شود (مانند ارسال پیام با [SendClientMessage](SendClientMessage)) به بازیکن نخواهد رسید. باید از تایمر برای تأخیر مسدودیت استفاده کرد.

:::

## مثال‌ها

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // بازیکنی که این دستور را اجرا کرد را مسدود می‌کند و دلیل ("Request") را شامل می‌کند
        BanEx(playerid, "Request");
        return 1;
    }
}
```

<br />

```c
// برای نمایش پیام (مثل دلیل) برای بازیکن قبل از بسته شدن اتصال
// باید از تایمر برای ایجاد تأخیر استفاده کنید. این تأخیر فقط نیاز به چند میلی‌ثانیه دارد،
// اما این مثال یک ثانیه کامل استفاده می‌کند تا مطمئن باشیم.

forward BanExPublic(playerid, reason[]);
public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    //reason - دلیل مسدودیت که برای BanEx استفاده می‌شود.
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        //بازیکنی که این دستور را اجرا کرد را مسدود می‌کند.
        BanExWithMessage(playerid, 0xFF0000FF, "You have been banned!", "Request");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [Ban](Ban): بازیکن را از بازی در سرور مسدود می‌کند.
- [Kick](Kick): بازیکن را از سرور اخراج می‌کند.
