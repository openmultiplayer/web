---
title: OnPlayerDisconnect
sidebar_label: OnPlayerDisconnect
description: وقتی بازیکن از سرور خارج می شود، این کالبک فراخوانی می شود.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

وقتی بازیکن از سرور خارج می شود، این کالبک فراخوانی می شود.

| پارامتر     | توضیحات                                        |
| -------- | -------------------------------------------------- |
| playerid | آیدی بازیکنی که از سرور خارج شده است.            |
| reason   | دلیل خارج شدن. جدول زیر را ببینید. |

## مقادیر بازگشتی

0 - فیلتر اسکریپت‌ها را از دریافت این پاسخ‌دهی جلوگیری می‌کند.

1 - این پاسخ به فیلتر اسکریپت بعدی ارسال می شود.

این کال‌بک همیشه اول در فیلتر اسکریپت ها تماس داده میشود.

## دلایل خروج (reason)

| کد | دلیل        | جزئیات                                                                                   |
| -- | ------------- | ----------------------------------------------------------------------------------------- |
| 0  | تایم اوت/کرش | ارتباط بازیکن قطع شد یا بازی کرش خورد یا شبکه و اینترنت ایراد داشت. |
| 1  | خارج شدن          | بازیکن با استفاده از دستور /q از بازی خارج شد یا از طریق منوی بازی.  |
| 2  | اخراج/محروم      | بازیکن توسط سرور اخراج یا محروم شد. |

## مثال ها

</div>

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s Az Server Kharej Shod (Dalil: %s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::tip

برخی از تابع ها ممکن است هنگام استفاده در این کال‌بک به درستی کار نکنند چون ممکن است بازیکن قبلاً از بازی خارج شده است. این بدان معنی است که شما نمی توانید اطلاعات واضحی را از توابعی مانند GetPlayerIp و GetPlayerPos دریافت کنید.

:::

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnPlayerConnect](OnPlayerConnect): این کال‌بک زمانی فراخوانی می شود که بازیکن به سرور متصل شود.
- [OnIncomingConnection](OnIncomingConnection): این کال‌بک زمانی فراخوانی می شود که یک بازیکن در حال تلاش برای اتصال به سرور است.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): زمانی که بازیکن دانلود مدل های سفارشی را تمام می کند، این کال‌بک فراخوانی می شود.

</div>
