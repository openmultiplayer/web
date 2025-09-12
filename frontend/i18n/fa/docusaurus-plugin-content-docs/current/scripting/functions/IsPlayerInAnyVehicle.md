---
title: IsPlayerInAnyVehicle
sidebar_label: IsPlayerInAnyVehicle
description: چک می‌کنه که آیا بازیکن داخل هر وسیله نقلیه‌ای هست یا نه (بعنوان راننده یا مسافر).
tags: ["player", "vehicle"]
---

## توضیحات

چک می‌کنه که آیا بازیکن داخل هر وسیله نقلیه‌ای هست یا نه (بعنوان راننده یا مسافر).

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

**true** - بازیکن در وسیله نقلیه هست.

**false** - بازیکن در وسیله نقلیه نیست.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/invehicle", true) == 0)
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "You're in a vehicle.");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "You're not in any vehicle.");
        }
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [IsPlayerInVehicle](IsPlayerInVehicle): چک کردن اینکه بازیکن در یه وسیله نقلیه خاص هست یا نه.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): چک کردن اینکه بازیکن در کدوم صندلی نشسته.