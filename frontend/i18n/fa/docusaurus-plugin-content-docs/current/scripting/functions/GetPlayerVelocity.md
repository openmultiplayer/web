---
title: GetPlayerVelocity
sidebar_label: GetPlayerVelocity
description: دریافت سرعت (velocity) بازیکن در محورهای X، Y و Z.
tags: ["player"]
---

## توضیحات

دریافت سرعت (velocity) بازیکن در محورهای X، Y و Z.

| نام     | توضیحات                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | بازیکن برای دریافت سرعتش.                                                   |
| &Float:x | متغیر float برای ذخیره سرعت در محور X، به صورت reference پاس داده می‌شود. |
| &Float:y | متغیر float برای ذخیره سرعت در محور Y، به صورت reference پاس داده می‌شود. |
| &Float:z | متغیر float برای ذخیره سرعت در محور Z، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

تابع خودش مقدار خاصی برنمی‌گرداند. سرعت‌های X، Y و Z در متغیرهای مشخص شده ذخیره می‌شوند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/velocity", true))
    {
        new
            Float:x, Float:y, Float:z,
            string[128];

        GetPlayerVelocity(playerid, x, y, z);
        
        format(string, sizeof(string), "You are going at a velocity of X: %f, Y: %f, Z: %f", x, y, z);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
}
```

## توابع مرتبط

- [SetPlayerVelocity](SetPlayerVelocity): تنظیم سرعت بازیکن.
- [SetVehicleVelocity](SetVehicleVelocity): تنظیم سرعت وسیله نقلیه.
- [GetVehicleVelocity](GetVehicleVelocity): دریافت سرعت وسیله نقلیه.