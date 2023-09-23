---
title: OnActorStreamOut
description: این کال‌بک زمانی فراخوانی می‌شود که یک اکتور برای بازیکن دیگر نمایش داده نمیشود
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## توضیحات

این کال‌بک زمانی فراخوانی می‌شود که یک اکتور برای بازیکن دیگر نمایش داده نمیشود

| پارامتر        | توضیحات                                                    |
| ----------- | -------------------------------------------------------------- |
| actorid     | آیدی اکتور |
| forplayerid | آیدی بازیکن              |

## مقادیر بازگشتی

این کال‌بک همیشه اول در فیلتر اسکریپت ها تماس داده میشود.

## مثال ها

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[46];
    format(string, sizeof(string), "Actor ID %d Baraye Shoma Unstream Shod.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## نکات

<TipNPCCallbacks />

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnActorStreamIn](OnActorStreamIn): این کال‌بک زمانی فراخوانی می‌شود که یک اکتور برای بازیکن نمایش داده میشود
</div>