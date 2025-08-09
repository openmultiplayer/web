---
title: OnPlayerClickPlayer
sidebar_label: OnPlayerClickPlayer
description: این کالبک زمانی فراخوانده می‌شود که بازیکن روی بازیکنی در جدول امتیازات دابل کلیک کند.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن روی بازیکنی در جدول امتیازات دابل کلیک کند.

| نام | توضیحات |
| --------------- | ---------------------------------------------------------------- |
| playerid | شناسه بازیکنی که روی بازیکنی در جدول امتیازات کلیک کرده است. |
| clickedplayerid | شناسه بازیکنی که روی آن کلیک شده است. |
| source | [منبع](../resources/clicksources) کلیک بازیکن. |

## مقادیر برگشتی

1 - از دریافت این کالبک به دیگر فیلتر اسکریپت‌ها جلوگیری می‌کند.

0 - نشان می‌دهد که این کالبک به فیلتر اسکریپت بعدی انتقال داده می‌شود.

این همیشه ابتدا در فیلتر اسکریپت‌ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new string[32];
    format(string, sizeof(string), "You clicked on player %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## نکته‌ها

:::tip

در حال حاضر فقط یک 'منبع' (0 - `CLICK_SOURCE_SCOREBOARD`) وجود دارد.

وجود این پارامتر پیشنهاد می‌کند که ممکن است منابع بیشتری در آینده پشتیبانی شوند.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): این کالبک زمانی فراخوانده می‌شود که بازیکن روی یک textdraw کلیک کند.

## منابع مرتبط

- [منابع کلیک](../resources/clicksources)