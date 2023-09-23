---
title: OnActorStreamIn
description: این کال‌بک زمانی فراخوانی می‌شود که یک اکتور برای بازیکن نمایش داده میشود
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## توضیحات

این کال‌بک زمانی فراخوانی می‌شود که یک اکتور برای بازیکن نمایش داده میشود

| پارامتر        | توضیحات                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | آیدی اکتوری که برای بازیکن نمایش شده است. |
| forplayerid | آیدی بازیکنی که اکتور را میبیند              |

## مقادیر بازگشتی

این کال‌بک همیشه اول در فیلتر اسکریپت ها تماس داده میشود.

## مثال ها

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[46];
    format(string, sizeof(string), "Actor ID %d Baraye Shoma Stream Shod.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## نکات

<TipNPCCallbacks />

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnActorStreamOut](OnActorStreamOut): این کال‌بک زمانی فراخوانی می‌شود که یک اکتور برای بازیکن دیگر نمایش داده نمیشود
</div>