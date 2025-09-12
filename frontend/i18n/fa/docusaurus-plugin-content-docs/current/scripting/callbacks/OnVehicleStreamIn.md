---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه به کلاینت بازیکن stream شود.
tags: ["vehicle"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه به کلاینت بازیکن stream شود.

| نام         | توضیحات                                            |
| ----------- | ------------------------------------------------------ |
| vehicleid   | شناسه وسیله نقلیه‌ای که برای بازیکن stream in شده.   |
| forplayerid | شناسه بازیکنی که وسیله نقلیه برای او stream in شده.  |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

## کالبک‌های مرتبط

- [OnVehicleStreamOut](OnVehicleStreamOut): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه برای بازیکن stream out شود.
- [OnPlayerStreamIn](OnPlayerStreamIn): این کالبک زمانی فراخوانده می‌شود که بازیکن برای بازیکن دیگری stream in شود.
- [OnPlayerStreamOut](OnPlayerStreamOut): این کالبک زمانی فراخوانده می‌شود که بازیکن برای بازیکن دیگری stream out شود.