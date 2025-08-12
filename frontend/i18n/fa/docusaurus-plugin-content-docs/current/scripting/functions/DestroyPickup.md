---
title: DestroyPickup
sidebar_label: DestroyPickup
description: پیکاپی که با CreatePickup ایجاد شده را نابود می‌کند.
tags: ["pickup"]
---

## توضیحات

پیکاپی که با CreatePickup ایجاد شده را نابود می‌کند.

| نام   | توضیحات                                                        |
| ------ | -------------------------------------------------------------- |
| pickup | شناسه پیکاپ برای نابودی (توسط CreatePickup برگردانده شده). |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. پیکاپ مشخص شده وجود ندارد.

## مثال‌ها

```c
new g_PickupArmour;

// ایجاد پیکاپ برای زره.
g_PickupArmour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191);

// مدتی بعد...
DestroyPickup(g_PickupArmour);
```

## توابع مرتبط

- [CreatePickup](CreatePickup): ایجاد یک پیکاپ.
- [IsValidPickup](IsValidPickup): بررسی معتبر بودن یک پیکاپ.

## کال‌بک‌های مرتبط

- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): زمانی فراخوانی می‌شود که بازیکن پیکاپی را برداشت.