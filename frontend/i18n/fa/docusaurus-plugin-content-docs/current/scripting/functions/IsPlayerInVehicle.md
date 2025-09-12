---
title: IsPlayerInVehicle
sidebar_label: IsPlayerInVehicle
description: چک می‌کنه که آیا بازیکن در یه وسیله نقلیه خاص هست یا نه.
tags: ["player", "vehicle"]
---

## توضیحات

چک می‌کنه که آیا بازیکن در یه وسیله نقلیه خاص هست یا نه.

| نام       | توضیحات                                        |
| --------- | ---------------------------------------------- |
| playerid  | ID بازیکن.                                     |
| vehicleid | ID وسیله نقلیه. توجه: modelid نیست!             |

## مقادیر برگشتی

**true** - بازیکن در وسیله نقلیه هست.

**false** - بازیکن در وسیله نقلیه نیست.

## مثال‌ها

```c
new gSpecialCar;

public OnGameModeInit()
{
    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)
    {
        if (IsPlayerInVehicle(playerid, gSpecialCar))
        {
            SendClientMessage(playerid, -1, "You're in the special car!");
        }
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): چک کردن اینکه بازیکن در هر وسیله نقلیه‌ای هست یا نه.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): چک کردن اینکه بازیکن در کدوم صندلی نشسته.