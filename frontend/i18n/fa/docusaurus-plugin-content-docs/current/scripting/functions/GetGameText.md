---
title: GetGameText
sidebar_label: GetGameText
description: تمام اطلاعات مربوط به استایل game text داده شده رو برمی‌گردونه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تمام اطلاعات مربوط به استایل game text داده شده رو برمی‌گردونه.

| نام                    | توضیحات                                                     |
|------------------------|------------------------------------------------------------ |
| playerid               | آیدی بازیکنی که می‌خوای چرخشش رو دریافت کنی.                 |
| style                  | [استایل](../resources/gametextstyles) متنی که می‌خوای دیتاش رو دریافت کنی. |
| message[]              | آرایه برگشتی برای رشته متن.                                   |
| len = sizeof (message) | اندازه خروجی.                                                |
| time                   | زمانی که gametext در اصل برای نمایش داده شده بود.            |
| remaining              | مقدار باقی‌مانده از اون زمان.                                 |

## مقدار برگشتی

true - تابع با موفقیت اجرا شد.

false - تابع در اجرا شکست خورد. یعنی بازیکن مشخص شده وجود نداره یا استایل نامعتبره.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    GameTextForPlayer(playerid, "Welcome to the server!", 5000, 3);

    new 
        message[32],
        time,
        remaining;

    GetGameText(playerid, 3, message, sizeof(message), time, remaining);
    // message = "Welcome to the server!"
    // time = 5000
    return 1;
}
```

## تابع‌های مرتبط

- [GameTextForPlayer](GameTextForPlayer): gametext رو برای یک بازیکن نمایش می‌ده.
- [HideGameTextForPlayer](HideGameTextForPlayer): نمایش استایل gametext رو برای یک بازیکن متوقف می‌کنه.
- [GameTextForAll](GameTextForAll): gametext رو برای همه بازیکنا نمایش می‌ده.
- [HideGameTextForAll](HideGameTextForAll): نمایش استایل gametext رو برای همه بازیکنا متوقف می‌کنه.
- [HasGameText](HasGameText): آیا بازیکن در حال حاضر متن در استایل gametext داده شده رو داره؟