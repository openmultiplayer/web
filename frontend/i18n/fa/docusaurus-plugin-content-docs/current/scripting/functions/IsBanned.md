---
title: IsBanned
sidebar_label: IsBanned
description: چک می‌کنه که آیا IP address داده شده بن شده یا نه.
tags: ["ip address"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا IP address داده شده بن شده یا نه.

| نام               | توضیحات                      |
| ----------------- | ---------------------------- |
| const ipAddress[] | IP address ای که باید چک بشه. |

## مقادیر برگشتی

**true** برمی‌گردونه اگه IP address بن شده باشه، وگرنه **false**.

## مثال‌ها

```c
if (IsBanned("255.255.255.255"))
{
    // Do something
}
```

## نکات

:::tip

می‌تونی لیست بن‌ها رو در فایل **bans.json** ببینی.

:::

## توابع مرتبط

- [BlockIpAddress](BlockIpAddress): مسدود کردن یه IP address از اتصال به سرور برای مدت زمان مشخص.
- [UnBlockIpAddress](UnBlockIpAddress): باز کردن IP ای که قبلاً مسدود شده.
- [Ban](Ban): بن کردن یه بازیکن از بازی در سرور.
- [BanEx](BanEx): بن کردن یه بازیکن با دلیل سفارشی.
- [Kick](Kick): کیک کردن یه بازیکن از سرور.
- [ClearBanList](ClearBanList): پاک کردن لیست بن‌ها.