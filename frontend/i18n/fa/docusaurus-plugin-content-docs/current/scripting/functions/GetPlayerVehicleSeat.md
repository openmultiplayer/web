---
title: GetPlayerVehicleSeat
sidebar_label: GetPlayerVehicleSeat
description: تشخیص اینکه بازیکن در کدام صندلی است.
tags: ["player", "vehicle"]
---

## توضیحات

تشخیص اینکه بازیکن در کدام صندلی است.

| نام     | توضیحات                                       |
| -------- | ------------------------------------------------- |
| playerid | ID بازیکنی که می‌خواهید صندلی‌اش را دریافت کنید. |

## مقادیر برگشتی

ID صندلی‌ای که بازیکن در آن است.

**-1** در وسیله نقلیه نیست، **0** راننده است، **1** مسافر جلو، و **2** & **3** مسافران عقب.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/myseat", true) == 0)
    {
        new
            playerSeat = GetPlayerVehicleSeat(playerid);

        // How you can discard of your information.
        if (playerSeat == 128)
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "An error has prevented us from returning the seat ID.");
        }

        new
            string[24];

        format(string, sizeof(string), "Your seat: %i", playerSeat);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

| ID  | صندلی                         |
| --- | ---------------------------- |
| 0   | راننده                       |
| 1   | مسافر جلو              |
| 2   | مسافر عقب-چپ          |
| 3   | مسافر عقب-راست         |
| 4+  | صندلی‌های مسافر (اتوبوس و...) |

## توابع مرتبط

- [GetPlayerVehicleID](GetPlayerVehicleID): دریافت ID وسیله نقلیه‌ای که بازیکن در آن است.
- [PutPlayerInVehicle](PutPlayerInVehicle): قرار دادن بازیکن در وسیله نقلیه.