---
title: SetDeathDropAmount
sidebar_label: SetDeathDropAmount
description: مقدار پول رها شده در مرگ رو تنظیم می‌کنه.
tags: []
---

:::warning

کار نمی‌کنه، از [CreatePickup](CreatePickup) استفاده کن.

:::

## توضیحات

مقدار پول رها شده در مرگ رو تنظیم می‌کنه.

| نام   | توضیحات             |
| ------ | ----------------------- |
| amount | مقدار پول برای تنظیم. |

## مقدار برگشتی

این تابع مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    SetDeathDropAmount(5000);
    return 1;
}
```

## نکات

:::warning

این تابع در نسخه فعلی SA:MP کار نمی‌کنه!

:::

## توابع مرتبط

- [CreatePickup](CreatePickup): ساخت pickup.
- [GivePlayerMoney](GivePlayerMoney): دادن پول به بازیکن.

## کالبک‌های مرتبط

- [OnPlayerDeath](../callbacks/OnPlayerDeath): وقتی بازیکن می‌میره صدا زده می‌شه.