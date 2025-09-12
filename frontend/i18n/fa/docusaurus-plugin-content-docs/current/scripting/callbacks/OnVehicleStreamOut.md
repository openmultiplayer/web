---
title: OnVehicleStreamOut
sidebar_label: OnVehicleStreamOut
description: این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه برای کلاینت بازیکن stream out شود (آنقدر دور است که نمی‌تواند آن را ببیند).
tags: ["vehicle"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه برای کلاینت بازیکن stream out شود (آنقدر دور است که نمی‌تواند آن را ببیند).

| نام         | توضیحات                                                    |
| ----------- | ------------------------------------------------------------ |
| vehicleid   | شناسه وسیله نقلیه‌ای که stream out شده است.               |
| forplayerid | شناسه بازیکنی که دیگر وسیله نقلیه را stream نمی‌کند.      |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

## کالبک‌های مرتبط

- [OnVehicleStreamIn](OnVehicleStreamIn): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه برای بازیکن stream in شود.
- [OnPlayerStreamIn](OnPlayerStreamIn): این کالبک زمانی فراخوانده می‌شود که بازیکن برای بازیکن دیگری stream in شود.
- [OnPlayerStreamOut](OnPlayerStreamOut): این کالبک زمانی فراخوانده می‌شود که بازیکن برای بازیکن دیگری stream out شود.