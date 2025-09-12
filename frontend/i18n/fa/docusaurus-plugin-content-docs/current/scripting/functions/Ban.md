---
title: Ban
sidebar_label: Ban
description: بازیکنی که در حال حاضر در سرور است را مسدود می‌کند.
tags: ["player", "administration"]
---

## توضیحات

بازیکنی که در حال حاضر در سرور است را مسدود می‌کند. آن‌ها دیگر هرگز نخواهند توانست به سرور ملحق شوند.

مسدودیت بر اساس IP خواهد بود و در فایل **bans.json** در دایرکتوری اصلی سرور ذخیره می‌شود.

می‌توانید از [BanEx](BanEx) برای ارائه دلیل مسدودیت استفاده کنید.

مسدودیت‌های IP را می‌توان با استفاده از دستورات RCON `banip` و `unbanip` اضافه/حذف کرد ([SendRconCommand](SendRconCommand)).

| نام      | توضیحات                       |
| -------- | ---------------------------- |
| playerid | شناسه بازیکن برای مسدود کردن. |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## نکات

:::warning

هر عملی که مستقیماً قبل از Ban() انجام شود (مانند ارسال پیام با [SendClientMessage](SendClientMessage)) به بازیکن نخواهد رسید. باید از تایمر برای تأخیر مسدودیت استفاده کرد.

:::

## مثال‌ها

```c
// برای نمایش پیام (مثل دلیل) برای بازیکن قبل از بسته شدن اتصال
// باید از تایمر برای ایجاد تأخیر استفاده کنید. این تأخیر فقط نیاز به چند میلی‌ثانیه دارد،
// اما این مثال یک ثانیه کامل استفاده می‌کند تا مطمئن باشیم.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // بازیکنی را که این دستور را اجرا کرد مسدود می‌کند.

        // ابتدا پیامی برای او ارسال کنید.
        SendClientMessage(playerid, 0xFF0000FF, "You have been banned!");

        // در واقع یک ثانیه بعد با تایمر او را مسدود کنید.
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [BanEx](BanEx): بازیکن را با دلیل سفارشی مسدود می‌کند.
- [Kick](Kick): بازیکن را از سرور اخراج می‌کند.
- [BlockIpAddress](BlockIpAddress): یک آدرس IP را برای مدت معینی از اتصال به سرور مسدود می‌کند.
- [UnBlockIpAddress](UnBlockIpAddress): IP قبلاً مسدود شده را باز می‌کند.
