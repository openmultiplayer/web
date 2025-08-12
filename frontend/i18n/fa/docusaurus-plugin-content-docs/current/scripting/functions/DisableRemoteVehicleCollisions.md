---
title: DisableRemoteVehicleCollisions
sidebar_label: DisableRemoteVehicleCollisions
description: تصادم بین خودروهای اشغال شده برای بازیکن را غیرفعال می‌کند.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

تصادم بین خودروهای اشغال شده برای بازیکن را غیرفعال می‌کند.

| نام         | توضیحات                                                           |
| ------------ | ----------------------------------------------------------------- |
| playerid     | شناسه بازیکنی که می‌خواهید تصادم‌ها را برای او غیرفعال کنید.     |
| bool:disable | 'true' برای غیرفعال کردن تصادم‌ها، 'false' برای فعال کردن تصادم‌ها. |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیکن مشخص شده وجود ندارد.

## مثال‌ها

```c
new bool:gPlayerVehicleCollision[MAX_PLAYERS];

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/collision", true))
    {
        new string[64];

        format(string, sizeof(string), "Vehicle collision for you is now '%s'", (gPlayerVehicleCollision[playerid] == false) ? ("Disabled") : ("Enabled"));
        SendClientMessage(playerid, 0xFFFFFFFF, string);

        gPlayerVehicleCollision[playerid] = !gPlayerVehicleCollision[playerid];

        DisableRemoteVehicleCollisions(playerid, gPlayerVehicleCollision[playerid]);
        return 1;
    }
    return 0;
}
```