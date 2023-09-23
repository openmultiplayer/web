---
title: OnIncomingConnection
description: هنگامی که یک آدرس آیپی تلاش می کند به سرور متصل شود، این کال‌بک فراخوانی می شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn name='callback' version='SA-MP 0.3z R2-2' />

## توضیحات

هنگامی که یک آدرس آیپی تلاش می کند به سرور متصل شود، این کال‌بک فراخوانی می شود. برای مسدود کردن آیپی، از تابع BlockIpAddress استفاده کنید.

| پارامتر         | توضیحات                                        |
| ------------ | -------------------------------------------------- |
| playerid     | آیدی بازیکنی که میخواهد به سرور متصل شود         |
| ip_address[] | آدرس آیپی این بازیکن |
| port         | پورت آیپی               |

## مقادیر بازگشتی

0 - فیلتر اسکریپت‌ها را از دریافت این کال‌بک جلوگیری می‌کند.

1 - این پاسخ به فیلتر اسکریپت بعدی ارسال می شود.

این کال‌بک همیشه اول در فیلتر اسکریپت ها تماس داده میشود.

## مثال ها

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Incoming connection for player ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnPlayerConnect](OnPlayerConnect): این کال‌بک زمانی فراخوانی می شود که بازیکن به سرور متصل شود.
- [OnPlayerDisconnect](OnPlayerDisconnect): وقتی بازیکن از سرور خارج می شود، این کالبک فراخوانی می شود.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): زمانی که بازیکن دانلود مدل های سفارشی را تمام می کند، این کال‌بک فراخوانی می شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [BlockIpAddress](../functions/BlockIpAddress): مسدود کردن یک آدرس آیپی برای جلوگیری از اتصال به سرور برای مدت زمان مشخصی.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): رفع مسدودیت آدرس آیپی.
</div>