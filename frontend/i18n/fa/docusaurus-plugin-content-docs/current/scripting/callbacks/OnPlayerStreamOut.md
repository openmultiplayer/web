---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: این کالبک زمانی فراخوانده می‌شود که بازیکن از کلاینت بازیکن دیگری stream out شود.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن از کلاینت بازیکن دیگری stream out شود.

| نام         | توضیحات                                     |
| ----------- | ----------------------------------------------- |
| playerid    | بازیکنی که destream شده است.                  |
| forplayerid | بازیکنی که بازیکن دیگر را destream کرده است.  |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

:::warning

OnPlayerStreamOut هنگام قطع اتصال بازیکن برای هر دو بازیکن فراخوانده نمی‌شود

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerStreamIn](OnPlayerStreamIn): این کالبک زمانی فراخوانده می‌شود که بازیکن برای بازیکن دیگری stream in شود.
- [OnActorStreamIn](OnPlayerStreamOut): این کالبک زمانی فراخوانده می‌شود که اکتور توسط بازیکن stream in شود.
- [OnVehicleStreamIn](OnPlayerStreamOut): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه برای بازیکن stream in شود.