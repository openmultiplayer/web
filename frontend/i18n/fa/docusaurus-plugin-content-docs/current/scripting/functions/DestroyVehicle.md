---
title: DestroyVehicle
sidebar_label: DestroyVehicle
description: یک خودرو را نابود می‌کند.
tags: ["vehicle"]
---

## توضیحات

یک خودرو را نابود می‌کند. فوراً ناپدید خواهد شد.

| نام      | توضیحات                      |
| --------- | ---------------------------- |
| vehicleid | شناسه خودرو برای نابودی.    |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. خودرو وجود ندارد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          if (IsPlayerInAnyVehicle(playerid))
          {
               new vehicleid = GetPlayerVehicleID(playerid);
               DestroyVehicle(vehicleid);
          }
          return 1;
     }
     return 0;
}
```

## توابع مرتبط

- [CreateVehicle](CreateVehicle): ایجاد یک خودرو.
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): بیرون انداختن بازیکن از خودرو.
- [SetVehicleToRespawn](SetVehicleToRespawn): ریسپاون کردن یک خودرو.