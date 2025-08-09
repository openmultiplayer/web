---
title: OnPlayerFinishedDownloading
sidebar_label: OnPlayerFinishedDownloading
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن دانلود مدل‌های سفارشی را به پایان برساند.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن دانلود مدل‌های سفارشی را به پایان برساند. برای اطلاعات بیشتر در مورد نحوه اضافه کردن مدل‌های سفارشی به سرور خود، [موضوع انتشار](https://sampforum.blast.hk/showthread.php?tid=644105) و [این آموزش](https://sampforum.blast.hk/showthread.php?tid=644123) را ببینید.

| نام          | توضیحات                                                                     |
| ------------ | ------------------------------------------------------------------------------ |
| playerid     | شناسه بازیکنی که دانلود مدل‌های سفارشی را به پایان رسانده است.                |
| virtualworld | شناسه دنیای مجازی که بازیکن برای آن دانلود مدل‌های سفارشی را تمام کرده است. |

## مقادیر برگشتی

این کالبک مقادیر برگشتی را پردازش نمی‌کند.

## مثال‌ها

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xFFFFFFFF, "Downloads finished.");
    return 1;
}
```

## نکته‌ها

:::tip

این کالبک هر بار که بازیکن دنیای مجازی را تغییر دهد فراخوانده می‌شود، حتی اگر در آن دنیا هیچ مدل سفارشی وجود نداشته باشد.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerConnect](OnPlayerConnect): این کالبک زمانی فراخوانده می‌شود که بازیکن به سرور متصل شود.
- [OnPlayerDisconnect](OnPlayerDisconnect): این کالبک زمانی فراخوانده می‌شود که بازیکن از سرور خارج شود.
- [OnIncomingConnection](OnIncomingConnection): این کالبک زمانی فراخوانده می‌شود که بازیکن سعی در اتصال به سرور دارد.