---
title: IsValidVehicle
sidebar_label: IsValidVehicle
description: چک کردن اینکه ماشین ساخته شده یا نه.
tags: ["vehicle"]
---

:::note

این تابع در کتابخونه‌های قدیمی که با سرور SA-MP بسته‌بندی شده وجود نداره، ولی [آخرین نسخه‌های کتابخونه‌های maintained](https://github.com/pawn-lang/samp-stdlib) شامل این تابع و سایر declaration های گم شده هستن.

:::

## توضیحات

چک کردن اینکه ماشین ساخته شده یا نه.

## پارامترها

| نام       | توضیحات                                |
| --------- | -------------------------------------- |
| vehicleid | ماشینی که باید وجودش چک بشه             |

## مقادیر برگشتی

**true** اگه ماشین وجود داشته باشه، وگرنه **false**.

## نحوه استفاده

```c
#if !defined IsValidVehicle
    native IsValidVehicle(vehicleid);
#endif

// Count vehicles
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/countvehicles", true))
    {
        new
            count,
            string[128];

        for (new i = 0; i < MAX_VEHICLES; i++)
        {
            if (IsValidVehicle(i))
            {
                count++;
            }
        }

        format(string, sizeof(string), "* There are %d valid spawned vehicles on this server.", count);
        SendClientMessage(playerid, 0x33CCCCFF, string);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [GetPlayerVehicleID](GetPlayerVehicleID): دریافت ID ماشینی که بازیکن داخلشه.
- [GetVehicleModel](GetVehicleModel): دریافت ID model یه ماشین.