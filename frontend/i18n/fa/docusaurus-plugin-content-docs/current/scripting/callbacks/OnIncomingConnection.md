---
title: OnIncomingConnection
sidebar_label: OnIncomingConnection
description: این کالبک زمانی فرا خوانده می‌شود که یک آدرس IP تلاش برای اتصال به سرور کند.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فرا خوانده می‌شود که یک آدرس IP تلاش برای اتصال به سرور کند. برای مسدود کردن اتصالات ورودی، از BlockIpAddress استفاده کنید.

| نام          | توضیحات                                             |
| ------------ | -------------------------------------------------- |
| playerid     | شناسه بازیکنی که تلاش برای اتصال می‌کند              |
| ip_address[] | آدرس IP بازیکنی که تلاش برای اتصال می‌کند           |
| port         | پورت تلاش اتصال                                     |

## مقادیر برگشتی

1 - از دریافت این کالبک به دیگر فیلتر اسکریپت ها جلوگیری می‌کند.

0 - نشان می‌دهد که این کالبک به فیلتر اسکریپت بعدی انتقال داده می‌شود.

این همیشه ابتدا در فیلتر اسکریپت ها فرا خوانده می شود.

## مثال ها

</div>

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Incoming connection for player ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## کالبک های مرتبط

کالبک های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

- [OnPlayerConnect](OnPlayerConnect): این کالبک زمانی فرا خوانده می‌شود که بازیکن به سرور متصل شود.
- [OnPlayerDisconnect](OnPlayerDisconnect): این کالبک زمانی فرا خوانده می‌شود که بازیکن از سرور قطع شود.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): این کالبک زمانی فرا خوانده می‌شود که بازیکن دانلود مدل های سفارشی را تمام کند.

## تابع های مرتبط

تابع های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

- [BlockIpAddress](../functions/BlockIpAddress): مسدود کردن یک آدرس IP از اتصال به سرور برای مدت زمان مشخص.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): رفع مسدودیت از IP که قبلاً مسدود شده بود.

</div>