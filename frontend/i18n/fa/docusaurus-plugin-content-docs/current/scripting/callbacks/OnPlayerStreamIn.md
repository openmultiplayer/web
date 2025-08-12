---
title: OnPlayerStreamIn
sidebar_label: OnPlayerStreamIn
description: این کالبک زمانی فراخوانده می‌شود که بازیکن توسط کلاینت بازیکن دیگری stream شود.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن توسط کلاینت بازیکن دیگری stream شود.

| نام         | توضیحات                                               |
| ----------- | ------------------------------------------------------- |
| playerid    | شناسه بازیکنی که stream شده است.                      |
| forplayerid | شناسه بازیکنی که بازیکن دیگر را stream کرده است.     |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerStreamOut](OnPlayerStreamOut): این کالبک زمانی فراخوانده می‌شود که بازیکن برای بازیکن دیگری stream out شود.
- [OnActorStreamIn](OnPlayerStreamOut): این کالبک زمانی فراخوانده می‌شود که اکتور توسط بازیکن stream in شود.
- [OnVehicleStreamIn](OnVehicleStreamIn): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه برای بازیکن stream in شود.